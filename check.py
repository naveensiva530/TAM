import glob, re

files = glob.glob('src/Components/TAM/Features/*/*.css')
for f in files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
        
        para_match = re.search(r'\.([a-zA-Z0-9_\-]+para-text|\w+paragraph_body)\s*\{', content)
        para_class = para_match.group(1) if para_match else 'UNKNOWN'
        
        head_match = re.search(r'\.([a-zA-Z0-9_\-]+)\s*\{[^\}]*clamp\(3rem', content)
        head_class = head_match.group(1) if head_match else 'UNKNOWN'
        
        sub_match = re.search(r'\.([a-zA-Z0-9_\-]+)\s*\{[^\}]*font-size:\s*1\.55rem', content)
        sub_class = sub_match.group(1) if sub_match else 'UNKNOWN'
        
        print(f'{f}: {para_class}, {head_class}, {sub_class}')
