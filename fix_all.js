const fs = require('fs');
let html = fs.readFileSync('c:/Users/msi/OneDrive/Desktop/ecovera/index_original.html', 'utf8');
let temp = fs.readFileSync('c:/Users/msi/OneDrive/Desktop/ecovera/temp.html', 'utf8');

// 1. Nav links
html = html.replace(/<a href="#process" class="nav-item".*?<\/a>\s*/g, '');
html = html.replace(/<a href="#market" class="nav-item".*?<\/a>\s*/g, '');
html = html.replace(/<a href="#process" class="mobile-card-link">.*?<\/a>\s*/gs, '');
html = html.replace(/<a href="#market" class="mobile-card-link">.*?<\/a>\s*/gs, '');

// 2. About section replacement
const aboutMatch = html.match(/<section id="about" class="about-section light-bg reveal">.*?<\/section>/s);
const heroMatch = temp.match(/<section id="hero" class="hero-section dark-bg">.*?<\/section>/s);
if (aboutMatch && heroMatch) {
    let newAbout = heroMatch[0].replace('id="hero" class="hero-section dark-bg"', 'id="about" class="hero-section dark-bg"');
    html = html.replace(aboutMatch[0], newAbout);
}

// 3. Remove resources
html = html.replace(/<section id="resources" class="resources-section dark-bg reveal">.*?<\/section>/s, '');

// 4. Impact section dark-bg
html = html.replace('id="impact" class="impact-section light-bg reveal"', 'id="impact" class="impact-section dark-bg reveal"');

// 5. Replace logos
html = html.replace(/logo\.jpeg/g, 'logo_nobackground.png');
html = html.replace(/logo_dark\.png/g, 'logo_nobackground.png');
html = html.replace(/new_logo\.jpg/g, 'logo_nobackground.png');
html = html.replace(/favicon\.ico/g, 'logo_nobackground.png');

// 6. Splash i18n
html = html.replace('<p class="splash-tagline">Premium Bio-Proteins &bull; Sustainable Fertilizers &bull; Eco-Oils</p>', '<p class="splash-tagline" data-i18n="splash.tagline">Premium Bio-Proteins &bull; Sustainable Fertilizers &bull; Eco-Oils</p>');
html = html.replace('<p class="splash-slogan">"Empowering agriculture with next-generation organic nutrients."</p>', '<p class="splash-slogan" data-i18n="splash.slogan">"Empowering agriculture with next-generation organic nutrients."</p>');

// 7. Footer logo stacking
html = html.replace('<a href="#" class="logo-lockup mb-3" aria-label="Ecovera Home">\r\n                    <div class="logo-mark-chip large">', '<a href="#" class="logo-lockup mb-3" aria-label="Ecovera Home" style="flex-direction: column; align-items: flex-start; gap: 10px;">\r\n                    <div class="logo-mark-chip large" style="margin-left: -15px;">');
html = html.replace('<a href="#" class="logo-lockup mb-3" aria-label="Ecovera Home">\n                    <div class="logo-mark-chip large">', '<a href="#" class="logo-lockup mb-3" aria-label="Ecovera Home" style="flex-direction: column; align-items: flex-start; gap: 10px;">\n                    <div class="logo-mark-chip large" style="margin-left: -15px;">');

// 8. Contact section phone number (keep it original, do not duplicate)
// the original already has the phone number in #contact. We just need to add it to the footer.
const footerContact = '<h4 data-i18n="footer.contact">Contact</h4>\n                <a href="#contact" data-i18n="nav.contact">Get in Touch</a>\n                <a href="mailto:info@ecoverajo.com">info@ecoverajo.com</a>';
const footerContactNew = '<h4 data-i18n="footer.contact">Contact</h4>\n                <a href="#contact" data-i18n="nav.contact">Get in Touch</a>\n                <a href="mailto:info@ecoverajo.com">info@ecoverajo.com</a>\n                <a href="tel:+962771513888" dir="ltr">+962 77 151 3888</a>';
html = html.replace(footerContact, footerContactNew);
const footerContact2 = '<h4 data-i18n="footer.contact">Contact</h4>\r\n                <a href="#contact" data-i18n="nav.contact">Get in Touch</a>\r\n                <a href="mailto:info@ecoverajo.com">info@ecoverajo.com</a>';
const footerContactNew2 = '<h4 data-i18n="footer.contact">Contact</h4>\r\n                <a href="#contact" data-i18n="nav.contact">Get in Touch</a>\r\n                <a href="mailto:info@ecoverajo.com">info@ecoverajo.com</a>\r\n                <a href="tel:+962771513888" dir="ltr">+962 77 151 3888</a>';
html = html.replace(footerContact2, footerContactNew2);

fs.writeFileSync('c:/Users/msi/OneDrive/Desktop/ecovera/index.html', html, 'utf8');
console.log('done');
