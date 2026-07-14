const fs = require('fs');
let html = fs.readFileSync('c:/Users/msi/OneDrive/Desktop/ecovera/index.html', 'utf8');

html = html.replace(/<section id="why-bsf".*?<\/section>\s*/s, '');
html = html.replace(/<section id="process".*?<\/section>\s*/s, '');
html = html.replace(/<section id="market".*?<\/section>\s*/s, '');

fs.writeFileSync('c:/Users/msi/OneDrive/Desktop/ecovera/index.html', html, 'utf8');
console.log('done');
