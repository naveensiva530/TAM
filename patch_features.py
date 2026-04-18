import glob, re, os

# Uniform CSS values
JUSTIFY_STYLE = "text-align: justify;"
HEADING_STYLE = """font-family: var(--font-poppins), 'Poppins', sans-serif;
    font-size: clamp(3rem, 4.5vw, 5rem);
    font-weight: 900;
    line-height: 1.1;
    margin-bottom: 0px !important;
    text-align: center;"""
SUBTITLE_STYLE = """font-family: var(--font-inter), 'Inter', sans-serif;
    font-size: 1.55rem;
    color: var(--lt-text-soft, #475569);
    line-height: 1.7;
    margin-bottom: 1rem;
    text-align: center;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;"""

# CSS Classes map
# Format: file_pattern: (para_class, heading_class, subtitle_class)
class_map = {
    'Biometric.css': (r'\.btp-para-text', r'\.btf-sync-top-heading', r'\.btf-sync-top-desc'),
    'Hrms.css': (r'\.hrp-para-text', r'\.hrf-sync-top-heading', r'\.hrf-sync-top-desc'),
    'Leave_Holiday.css': (r'\.lh-para-text', r'\.lh-features-section-headline', r'\.lh-features-section-subtext'),
    'Livetracking.css': (r'\.ltp-para-text', r'\.ltf-section-headline', r'\.ltf-section-subtext'),
    'Multichannel.css': (r'\.multi_channel_paragraph_body', r'\.multi_channel_attendance_Type_main_heading', r'\.multi_channel_attendance_Type_sub'),
    'Payroll.css': (r'\.pay-para-text', r'\.pay-features-title', r'\.pay-features-subtitle'),
    'Regularization.css': (r'\.regp-para-text', r'\.reg-handle-main-title', r'\.reg-handle-main-subtitle'),
    'Roles_Permission.css': (r'\.rpp-para-text', r'\.multi_channel_attendance_Type_main_heading', r'\.rp-sec3-subtext'),
    'Shif_Management.css': (r'\.shmp-para-text', r'\.shmf-main-title', r'\.shmf-main-subtitle'),
    'Workflow.css': (r'\.wfp-para-text', r'\.wff-title', r'\.wff-subtitle')
}

files = glob.glob('src/Components/TAM/Features/*/*.css')
for f in files:
    filename = os.path.basename(f)
    if filename not in class_map: continue
    
    para_regex, head_regex, sub_regex = class_map[filename]
    
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    # 1. Inject justify in para_class
    def inject_justify(match):
        block = match.group(0)
        if 'text-align: justify' not in block:
            return block.replace('{', '{\n    text-align: justify;', 1)
        return block
    content = re.sub(para_regex + r'\s*\{[^}]*\}', inject_justify, content)
    
    # 2. Overwrite heading styles
    def replace_heading(match):
        # preserve the color if it's there
        original = match.group(0)
        color_match = re.search(r'color:\s*[^;]+;', original)
        color_str = color_match.group(0) if color_match else ""
        return f"{match.group(1)} {{\n    {HEADING_STYLE}\n    {color_str}\n}}"
    content = re.sub(r'(' + head_regex + r'\s*)\{[^}]*\}', replace_heading, content)
    
    # 3. Overwrite subtitle styles
    def replace_subtitle(match):
        original = match.group(0)
        return f"{match.group(1)} {{\n    {SUBTITLE_STYLE}\n}}"
    content = re.sub(r'(' + sub_regex + r'\s*)\{[^}]*\}', replace_subtitle, content)
    
    with open(f, 'w', encoding='utf-8') as file:
        file.write(content)

print('Done applying standard formats.')
