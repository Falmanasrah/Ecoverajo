const fs = require('fs');
let html = fs.readFileSync('c:/Users/msi/OneDrive/Desktop/ecovera/index.html', 'utf8');
let splash = fs.readFileSync('c:/Users/msi/OneDrive/Desktop/ecovera/splash.html', 'utf8');

const heroRegex = /<section id="hero" class="hero-section dark-bg">.*?<\/section>/s;
html = html.replace(heroRegex, splash);

fs.writeFileSync('c:/Users/msi/OneDrive/Desktop/ecovera/index.html', html, 'utf8');
console.log('done');
