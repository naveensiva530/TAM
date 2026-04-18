const fs = require('fs');
const path = require('path');

const files = [
    "src/Components/TAM/TAM_Homepage2/TAM_Homepage2.jsx",
    "src/Components/TAM/Features/Biometric/Biometric.jsx",
    "src/Components/TAM/Features/Hrms/Hrms.jsx",
    "src/Components/TAM/Features/Leave_Holiday/Leave_Holiday.jsx",
    "src/Components/TAM/Features/Livetracking/Livetracking.jsx",
    "src/Components/TAM/Features/Multichannel/Multichannel.jsx",
    "src/Components/TAM/Features/Payroll/Payroll.jsx",
    "src/Components/TAM/Features/Regularization/Regularization.jsx",
    "src/Components/TAM/Features/Roles_Permission/Roles_Permission.jsx",
    "src/Components/TAM/Features/Shif_Management/Shif_Management.jsx",
    "src/Components/TAM/Features/Workflow/Workflow.jsx"
];

for (const file of files) {
    const filePath = path.join(__dirname, file);
    if (!fs.existsSync(filePath)) continue;
    
    let content = fs.readFileSync(filePath, 'utf8');

    // Remove any incorrectly injected <Helmet> blocks + imports
    content = content.replace(/import\s*{\s*Helmet\s*}\s*from\s*'react-helmet-async';\s*\n?/g, '');
    content = content.replace(/\s*<Helmet>[\s\S]*?<\/Helmet>\s*(?:{\s*|\n*)/g, function(match) {
        if (match.endsWith('{')) {
            return '{';
        } else if (match.endsWith('{   ')) {
            return '{';
        }
        return '';
    });
    // Another pass to be absolutely sure we strip any naked <Helmet> text
    content = content.replace(/<Helmet>[\s\S]*?<\/Helmet>/g, '');
    // clean up any hanging '{' from the previous broken replace if there is `</Helmet> {`
    // Actually the previous node script did: content.slice(...) + helmetBlock + content.slice(...)
    // helmetBlock was: `\n            <Helmet>\n                <title>${title} | NoQu TAM</title>\n                <meta name="description" content="..." />\n            </Helmet>`
    // So the `</Helmet>` was followed directly by the rest of the file.
    
    fs.writeFileSync(filePath, content);
}
console.log("Cleanup done.");
