$index = Get-Content "c:\Users\msi\OneDrive\Desktop\ecovera\index.html" -Raw; $index = $index -replace '<p class="splash-tagline">Premium Bio-Proteins &bull; Sustainable Fertilizers &bull; Eco-Oils</p>', '<p class="splash-tagline" data-i18n="splash.tagline">Premium Bio-Proteins &bull; Sustainable Fertilizers &bull; Eco-Oils</p>'; $index = $index -replace '<p class="splash-slogan">"Empowering agriculture with next-generation organic nutrients."</p>', '<p class="splash-slogan" data-i18n="splash.slogan">"Empowering agriculture with next-generation organic nutrients."</p>'; $index = $index -replace '(?s)<a href="#" class="logo-lockup mb-3" aria-label="Ecovera Home">\s*<div class="logo-mark-chip large">\s*<img src="./assets/logo_nobackground.png" alt="" class="logo-img">\s*</div>\s*<div class="logo-text">\s*<span class="logo-name" data-i18n="brand.name">Ecovera</span>\s*</div>\s*</a>', '<a href="#" class="logo-lockup mb-3" aria-label="Ecovera Home" style="flex-direction: column; align-items: flex-start; gap: 10px;">
                    <div class="logo-mark-chip large">
                        <img src="./assets/logo_nobackground.png" alt="" class="logo-img">
                    </div>
                    <div class="logo-text">
                        <span class="logo-name" data-i18n="brand.name">Ecovera</span>
                    </div>
                </a>'; $index = $index -replace '<a href="mailto:info@ecoverajo.com">info@ecoverajo.com</a>', '<a href="mailto:info@ecoverajo.com">info@ecoverajo.com</a>
                <br>
                <a href="tel:+962771513888" dir="ltr">+962 77 151 3888</a>'; Set-Content "c:\Users\msi\OneDrive\Desktop\ecovera\index.html" $index -Encoding UTF8
