const fs = require('fs');
let content = fs.readFileSync('c:/Users/msi/OneDrive/Desktop/ecovera/js/main.js', 'utf8');

// Insert new translations for 'en'
const enInsert = '        "splash.tagline": "Premium Bio-Proteins • Sustainable Fertilizers • Eco-Oils",\n        "splash.slogan": "\\"Empowering agriculture with next-generation organic nutrients.\\"",\n';
content = content.replace('        "footer.bottom": "© 2026', enInsert + '        "footer.bottom": "© 2026');

// Insert new translations for 'ar'
const arInsert = '        "splash.tagline": "بروتينات حيوية ممتازة • أسمدة مستدامة • زيوت صديقة للبيئة",\n        "splash.slogan": "\\"تمكين الزراعة بمغذيات عضوية من الجيل القادم.\\"",\n';
content = content.replace('        "footer.bottom": "© 2026 إيكوفيرا', arInsert + '        "footer.bottom": "© 2026 إيكوفيرا');

// Add logic to change logo in setLanguage function
// Find setLanguage(lang) function
const langFuncLogic = 
    document.querySelectorAll('img.logo-img, img.splash-logo-img').forEach(img => {
        if(lang === 'ar') {
            img.src = './assets/arabic_logo.png';
        } else {
            img.src = './assets/logo_nobackground.png';
        }
    });
;
content = content.replace('document.documentElement.lang = lang;', 'document.documentElement.lang = lang;' + langFuncLogic);

fs.writeFileSync('c:/Users/msi/OneDrive/Desktop/ecovera/js/main.js', content, 'utf8');
console.log('done');
