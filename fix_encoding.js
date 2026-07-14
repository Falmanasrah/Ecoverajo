const fs = require('fs');
let content = fs.readFileSync('c:/Users/msi/OneDrive/Desktop/ecovera/index.html', 'utf8');
// convert back to buffer using latin1 (which maps 1:1 to bytes 0-255)
let buf = Buffer.from(content, 'latin1');
// now read that buffer as utf8
let fixed = buf.toString('utf8');
// check if fixed contains the word 'العربية'
if (fixed.includes('العربية') || fixed.includes('16–20%')) {
    fs.writeFileSync('c:/Users/msi/OneDrive/Desktop/ecovera/index.html', fixed, 'utf8');
    console.log('Fixed encoding!');
} else {
    // maybe it's windows-1252?
    console.log('Did not find expected characters, not saving.');
}
