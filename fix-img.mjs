import fs from 'fs';
import path from 'path';

const featuresDir = 'c:/Users/DELL/Pictures/New folder (5)/noqu-live-website/src/Components/TAM/Features';

const filesToUpdate = [
  'Workflow/Workflow.jsx',
  'Shif_Management/Shif_Management.jsx',
  'Regularization/Regularization.jsx',
  'Payroll/Payroll.jsx',
  'Livetracking/Livetracking.jsx',
  'Leave_Holiday/Leave_Holiday.jsx',
  'Biometric/Biometric.jsx',
  'Hrms/Hrms.jsx',
];

for (const relPath of filesToUpdate) {
  const fullPath = path.join(featuresDir, relPath);
  let content = fs.readFileSync(fullPath, 'utf8');

  // Replace the self-closing div with a div containing an img tag
  const regex = /<div\s+className="([a-zA-Z0-9_\-]+)-right-image-panel"\s+style=\{\{\s*backgroundImage:\s*`url\(\$\{HeroImage\}\)`\s*\}\}\s*\/>/g;
  
  const modifiedContent = content.replace(regex, (match, p1) => {
    return `<div className="${p1}-right-image-panel" style={{ position: 'relative', overflow: 'hidden' }}>
                    <img src={HeroImage} alt="Hero" fetchPriority="high" loading="eager" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>`;
  });

  if (content !== modifiedContent) {
    fs.writeFileSync(fullPath, modifiedContent, 'utf8');
    console.log(`Updated ${relPath}`);
  } else {
    console.log(`No match found in ${relPath}`);
  }
}
