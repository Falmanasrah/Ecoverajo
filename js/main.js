// Translations Dictionary
const translations = {
    en: {
        "brand.name": "Ecovera",
        "brand.tagline": "Sustainable Feed & Bio Solutions",
        "nav.about": "About",
        "nav.process": "Process",
        "nav.products": "Products",
        "nav.specs": "Specs",
        "nav.market": "Market",
        "nav.impact": "Impact",
        "nav.faq": "FAQ",
        "nav.contact": "Get in Touch",
        "hero.title": "Transforming Waste into Sustainable Value",
        "hero.subtitle": "A Jordan-based bio-technology venture turning organic waste into high-value protein, oil, and fertilizer — powered by Black Soldier Fly larvae within a scalable circular-economy model.",
        "hero.vp1": "Circular by design",
        "hero.vp2": "10–14 day cycle",
        "hero.vp3": "Four revenue streams",
        "hero.cta.primary": "Explore Our Products",
        "hero.cta.secondary": "Partner With Us",
        "hero.wwm.label": "What We Make:",
        "hero.wwm.protein": "Protein",
        "hero.wwm.oil": "Oil",
        "hero.wwm.fertilizer": "Fertilizer",
        "hero.wwm.frass": "Frass",
        "stats.rooms": "Fly Rooms",
        "stats.rooms.detail": "operational today",
        "stats.bins": "Rearing Bins",
        "stats.bins.detail": "full-scale capacity",
        "stats.capacity": "Daily Capacity",
        "stats.capacity.detail": "organic waste processed",
        "stats.revenue": "Revenue Streams",
        "stats.revenue.detail": "de-risked model",
        "tags.waste": "Waste Management",
        "tags.food": "Food Security",
        "tags.circular": "Circular Economy",
        "tags.sustainability": "Sustainability",
        "about.eyebrow": "The Project",
        "about.title": "An Integrated Circular System.",
        "about.copy": "Ecovera was founded to address a dual regional challenge — growing volumes of unused organic waste, and heavy dependence on imported protein feed. Using the lifecycle of the Black Soldier Fly, it converts organic material into a protein- and fat-rich biomass, plus a natural organic fertilizer (frass) as a by-product.",
        "about.quote": "\"To become a leading model for the circular economy and bio-technology in Jordan and the region — transforming an environmental problem into a sustainable economic value chain.\"",
        "why.eyebrow": "Why Black Soldier Fly",
        "why.title": "A Superior Bio-Converter",
        "why.edge.title": "The Edge",
        "why.edge.subtitle": "Operational advantages",
        "why.edge.1": "Rapid organic-waste conversion",
        "why.edge.2": "Low water & energy use",
        "why.edge.3": "Short cycle (10–14 days)",
        "why.edge.4": "Multi-source production",
        "why.edge.5": "Low environmental footprint",
        "why.edge.6": "High scalability",
        "why.feed.title": "The Feedstock",
        "why.feed.subtitle": "Accepted inputs",
        "why.feed.1": "Central-market organic waste",
        "why.feed.2": "Restaurant & hotel residuals",
        "why.feed.3": "Food-processing waste",
        "why.feed.4": "Agricultural residues",
        "why.feed.5": "Select animal by-products",
        "process.eyebrow": "Our Methodology",
        "process.title": "From Egg to Finished Product",
        "process.copy": "A continuous, zero-waste biological processing cycle.",
        "process.1.title": "Nursery",
        "process.1.copy": "Egg collection & hatching in a controlled-temperature, humidity-managed environment.",
        "process.2.title": "Rearing",
        "process.2.copy": "10–14 day feeding cycle; larvae transform organic waste into protein/fat-rich biomass.",
        "process.3.title": "Pupation",
        "process.3.copy": "Breeding & egg cycle; a portion of larvae is retained for continuous in-house operation.",
        "process.4.title": "Harvest",
        "process.4.copy": "Drying & extraction; larvae separated from fertilizer, processed into protein, oil, and compost.",
        "products.eyebrow": "Our Output",
        "products.title": "Seven Products Under the Ecovera Label.",
        "prod.bsf-oil.title": "BSF Oil",
        "prod.bsf-oil.weight": "50 KG",
        "prod.bsf-oil.copy": "Natural, anti-bacterial, multi-purpose BSF oil for feed and industrial applications.",
        "prod.frass.title": "Organic Frass Fertilizer",
        "prod.frass.weight": "50 KG",
        "prod.frass.copy": "Organic fertilizer that improves soil fertility & water retention; certified and export-ready.",
        "prod.roll.title": "Pure Protein Roll",
        "prod.roll.weight": "25 KG",
        "prod.roll.copy": "High-protein feed from BSF larvae for poultry & aquaculture; a sustainable alternative to fishmeal.",
        "prod.powder.title": "Pure Protein Powder",
        "prod.powder.weight": "25 KG",
        "prod.powder.copy": "Concentrated protein powder ideal for specialized feed applications.",
        "prod.dried.title": "Dried Larva",
        "prod.dried.weight": "10 KG",
        "prod.dried.copy": "Whole dried BSF larvae, preserving natural nutrients for optimal feed quality.",
        "prod.bsf.title": "BSF",
        "prod.bsf.weight": "N/A",
        "prod.bsf.copy": "Premium Black Soldier Fly product line.",
        "prod.chitin.title": "Chitin",
        "prod.chitin.weight": "N/A",
        "prod.chitin.copy": "Natural biopolymer extracted from BSF for industrial and agricultural applications.",
        "prod.link": "View Specifications",
        "specs.eyebrow": "Technical Details",
        "specs.title": "A Complete Black Soldier Fly Ingredient Range.",
        "specs.badge.1": "Free from antibiotics & hormones",
        "specs.badge.2": "Controlled Processing",
        "specs.badge.3": "Consistent Quality",
        "specs.badge.4": "Sustainable & Eco-Friendly",
        "specs.tab.1": "Frozen Larvae",
        "specs.tab.2": "Dried Larvae",
        "specs.tab.3": "Pure Protein Powder",
        "specs.tab.4": "Full-Fat Meal",
        "specs.tab.5": "BSF Oil",
        "specs.tab.6": "BSF Frass",
        "specs.tab.7": "BSF",
        "specs.tab.8": "Chitin",
        "specs.p1.sub": "fresh-frozen whole larvae",
        "specs.p2.sub": "whole dried",
        "specs.p3.sub": "premium protein supplement",
        "specs.p4.sub": "energy-rich whole meal",
        "specs.p5.sub": "premium insect oil",
        "specs.p6.sub": "organic bio-fertilizer",
        "specs.p7.sub": "premium product",
        "specs.p8.sub": "natural biopolymer",
        "specs.table.param": "Parameter",
        "specs.table.value": "Value",
        "specs.table.protein": "Crude Protein",
        "specs.table.fat": "Crude Fat",
        "specs.table.moisture": "Moisture",
        "specs.table.fiber": "Crude Fiber",
        "specs.table.ash": "Ash",
        "specs.table.lauric": "Lauric Acid",
        "specs.table.organic": "Organic Matter",
        "specs.table.nitrogen": "Total Nitrogen (N)",
        "specs.table.phos": "Available Phosphorus (P₂O₅)",
        "specs.table.pot": "Soluble Potassium (K₂O)",
        "specs.table.ph": "pH",
        "specs.tba": "To be added",
        "specs.back": "Back to Products",
        "specs.note.label": "Note:",
        "specs.p3.note": "Technical specifications will be updated soon.",
        "specs.p5.note": "Rich in MCFAs, high oxidative stability.",
        "specs.p6.note": "Contains natural chitin and beneficial microorganisms.",
        "specs.p7.note": "Technical specifications will be updated soon.",
        "specs.p8.note": "Technical specifications will be updated soon.",
        "market.eyebrow": "The Opportunity",
        "market.title": "A Fast-Growing Global Sector.",
        "market.driver.1": "Rising costs of conventional feed",
        "market.driver.2": "Growing global protein demand",
        "market.driver.3": "Worldwide shift to a green economy",
        "market.driver.4": "Demand for low-emission solutions",
        "market.driver.5": "Poultry & aquaculture expansion",
        "market.sector1.title": "Feed",
        "market.sector1.i1": "Poultry farms",
        "market.sector1.i2": "Aquaculture operators",
        "market.sector1.i3": "Feed manufacturers",
        "market.sector1.i4": "Pet-food brands",
        "market.sector2.title": "Agriculture",
        "market.sector2.i1": "Organic farms",
        "market.sector2.i2": "Greenhouse operators",
        "market.sector2.i3": "Fertilizer companies",
        "market.sector3.title": "Waste Management",
        "market.sector3.i1": "Municipalities",
        "market.sector3.i2": "Central markets",
        "market.sector3.i3": "Food companies",
        "market.sector3.i4": "Industrial kitchens",
        "market.expansion": "Operational in Jordan, with clear expansion potential into Egypt and the Gulf.",
        "impact.eyebrow": "Our Commitment",
        "impact.title": "Triple Impact",
        "impact.1.title": "Environmental",
        "impact.1.copy": "Reduces organic-waste volumes, lowers landfill emissions, supports recycling streams, and reduces conventional-protein reliance.",
        "impact.2.title": "Economic",
        "impact.2.copy": "Cuts local feed costs, creates sustainable protein alternatives, adds value to organic waste, and establishes multiple revenue streams.",
        "impact.3.title": "Social",
        "impact.3.copy": "Creates green jobs, supports entrepreneurship, develops local agriculture, and empowers youth employment.",
        "resources.eyebrow": "Library",
        "resources.title": "Resources & Downloads",
        "res.1.title": "Technical Datasheet",
        "res.1.copy": "Complete BSF ingredient range specifications.",
        "res.2.title": "Investor Brief",
        "res.2.copy": "Detailed overview of our business model and expansion plan.",
        "res.link": "Download PDF",
        "faq.eyebrow": "Questions",
        "faq.title": "Frequently Asked Questions",
        "faq.1.q": "What is the Black Soldier Fly?",
        "faq.1.a": "The Black Soldier Fly (Hermetia illucens) is a harmless, non-pest insect. In its larval stage, it is an incredibly efficient bio-converter, rapidly consuming organic waste and transforming it into high-value protein and fat.",
        "faq.2.q": "What organic inputs do you accept?",
        "faq.2.a": "We process a wide range of clean organic waste, including central-market produce waste, restaurant and hotel residuals, food-processing by-products, agricultural residues, and select animal by-products.",
        "faq.3.q": "How long is the production cycle?",
        "faq.3.a": "Our rearing cycle is extremely rapid, typically taking only 10 to 14 days for the larvae to fully process the feedstock and reach harvest size.",
        "faq.4.q": "Are your products free from antibiotics and hormones?",
        "faq.4.a": "Yes. All Ecovera products are 100% natural, processed under controlled conditions, and completely free from artificial hormones and antibiotics.",
        "faq.5.q": "Which sectors do you serve?",
        "faq.5.a": "We serve the feed sector (poultry farms, aquaculture, pet food), agriculture (organic farming, fertilizer companies), and provide waste management services for municipalities and food companies.",
        "faq.6.q": "Where are you based and where are you expanding?",
        "faq.6.a": "Ecovera is currently operational in Jordan, with strategic plans for geographic expansion into Egypt and the wider Gulf region.",
        "cta.title": "Let's build the next model for the circular economy.",
        "cta.button": "Get in Touch",
        "contact.eyebrow": "Partner With Us",
        "contact.title": "Start the Conversation",
        "contact.form.name": "Name",
        "contact.form.email": "Email",
        "contact.form.company": "Company",
        "contact.form.message": "Message",
        "contact.form.submit": "Send Message",
        "contact.details.founder": "Founder",
        "contact.details.founder.val": "Ammar Al-Rafou",
        "contact.details.location": "Location",
        "contact.details.location.val": "Jordan",
        "contact.details.whatsapp": "WhatsApp",
        "contact.details.contact": "Contact",
        "footer.nav": "Navigation",
        "footer.prod": "Products",
        "footer.contact": "Contact",
        "splash.tagline": "Premium Bio-Proteins • Sustainable Fertilizers • Eco-Oils",
        "splash.slogan": "\"Empowering agriculture with next-generation organic nutrients.\"",
        "footer.bottom": "© 2026 Ecovera · Sustainable Feed & Bio Solutions. All Rights Reserved.",
        "legal.privacy": "Privacy Policy",
        "legal.terms": "Terms & Conditions",
        "legal.cookie": "Cookie Policy",
        "legal.disclaimer": "Product Disclaimer",
        "legal.ip": "Intellectual Property Notice"
    },
    ar: {
        "brand.name": "إيكوفيرا",
        "brand.tagline": "حلول الأعلاف الحيوية والمستدامة",
        "nav.about": "من نحن",
        "nav.process": "العملية",
        "nav.products": "المنتجات",
        "nav.specs": "المواصفات",
        "nav.market": "السوق",
        "nav.impact": "التأثير",
        "nav.faq": "الأسئلة الشائعة",
        "nav.contact": "تواصل معنا",
        "hero.title": "تحويل النفايات إلى قيمة مستدامة",
        "hero.subtitle": "مشروع تكنولوجيا حيوية مقره الأردن يحول النفايات العضوية إلى بروتين وزيت وأسمدة عالية القيمة — مدعوم بيرقات ذبابة الجندي الأسود ضمن نموذج اقتصاد دائري قابل للتطوير.",
        "hero.vp1": "دائري التصميم",
        "hero.vp2": "دورة من 10 إلى 14 يومًا",
        "hero.vp3": "أربعة مصادر للدخل",
        "hero.cta.primary": "استكشف منتجاتنا",
        "hero.cta.secondary": "كن شريكاً لنا",
        "hero.wwm.label": "ماذا ننتج:",
        "hero.wwm.protein": "بروتين",
        "hero.wwm.oil": "زيت",
        "hero.wwm.fertilizer": "أسمدة",
        "hero.wwm.frass": "مخلفات",
        "stats.rooms": "غرف الذباب",
        "stats.rooms.detail": "عاملة اليوم",
        "stats.bins": "صناديق التربية",
        "stats.bins.detail": "القدرة الاستيعابية الكاملة",
        "stats.capacity": "القدرة اليومية",
        "stats.capacity.detail": "معالجة النفايات العضوية",
        "stats.revenue": "مصادر الدخل",
        "stats.revenue.detail": "نموذج منخفض المخاطر",
        "tags.waste": "إدارة النفايات",
        "tags.food": "الأمن الغذائي",
        "tags.circular": "الاقتصاد الدائري",
        "tags.sustainability": "الاستدامة",
        "about.eyebrow": "المشروع",
        "about.title": "نظام دائري متكامل.",
        "about.copy": "تأسست إيكوفيرا لمعالجة تحدي إقليمي مزدوج — تزايد أحجام النفايات العضوية غير المستخدمة، والاعتماد الكبير على الأعلاف البروتينية المستوردة. باستخدام دورة حياة ذبابة الجندي الأسود، نقوم بتحويل المواد العضوية إلى كتلة حيوية غنية بالبروتين والدهون، بالإضافة إلى سماد عضوي طبيعي كمنتج ثانوي.",
        "about.quote": "\"أن نصبح نموذجًا رائدًا للاقتصاد الدائري والتكنولوجيا الحيوية في الأردن والمنطقة — تحويل مشكلة بيئية إلى سلسلة قيمة اقتصادية مستدامة.\"",
        "why.eyebrow": "لماذا ذبابة الجندي الأسود",
        "why.title": "محول حيوي متفوق",
        "why.edge.title": "الميزة",
        "why.edge.subtitle": "مزايا تشغيلية",
        "why.edge.1": "تحويل سريع للنفايات العضوية",
        "why.edge.2": "استهلاك منخفض للمياه والطاقة",
        "why.edge.3": "دورة قصيرة (10-14 يومًا)",
        "why.edge.4": "إنتاج متعدد المصادر",
        "why.edge.5": "بصمة بيئية منخفضة",
        "why.edge.6": "قابلية عالية للتوسع",
        "why.feed.title": "المواد الخام",
        "why.feed.subtitle": "المدخلات المقبولة",
        "why.feed.1": "نفايات الأسواق المركزية",
        "why.feed.2": "بقايا المطاعم والفنادق",
        "why.feed.3": "نفايات معالجة الأغذية",
        "why.feed.4": "المخلفات الزراعية",
        "why.feed.5": "منتجات حيوانية مختارة",
        "process.eyebrow": "منهجيتنا",
        "process.title": "من البيضة إلى المنتج النهائي",
        "process.copy": "دورة معالجة بيولوجية مستمرة وخالية من النفايات.",
        "process.1.title": "الحضانة",
        "process.1.copy": "جمع البيض وتفقيسه في بيئة يتم التحكم بدرجة حرارتها ورطوبتها.",
        "process.2.title": "التربية",
        "process.2.copy": "دورة تغذية من 10-14 يومًا؛ تحول اليرقات النفايات العضوية إلى كتلة غنية بالبروتين والدهون.",
        "process.3.title": "التعذر",
        "process.3.copy": "دورة التكاثر؛ يتم الاحتفاظ بجزء من اليرقات للعمليات الداخلية المستمرة.",
        "process.4.title": "الحصاد",
        "process.4.copy": "التجفيف والاستخراج؛ يتم فصل اليرقات عن الأسمدة، ومعالجتها إلى بروتين وزيت وسماد.",
        "products.eyebrow": "مخرجاتنا",
        "products.title": "أربعة منتجات تحت علامة إيكوفيرا.",
        "prod.1.title": "علف بروتيني",
        "prod.1.weight": "25 كجم",
        "prod.1.copy": "علف عالي البروتين من يرقات ذبابة الجندي الأسود للدواجن والاستزراع المائي؛ بديل مستدام لمسحوق السمك.",
        "prod.2.title": "سماد حيوي",
        "prod.2.weight": "50 كجم",
        "prod.2.copy": "سماد عضوي يحسن خصوبة التربة والاحتفاظ بالمياه؛ معتمد وجاهز للتصدير.",
        "prod.3.title": "زيت الحشرات",
        "prod.3.weight": "50 كجم",
        "prod.3.copy": "زيت طبيعي متعدد الاستخدامات مضاد للبكتيريا للتطبيقات الصناعية والأعلاف.",
        "prod.4.placeholder": "سماد عضوي · 50 كجم",
        "prod.4.title": "سماد عضوي (كمبوست)",
        "prod.4.weight": "50 كجم",
        "prod.4.copy": "سماد عضوي ممتاز غني بالمغذيات الدقيقة وميكروبات التربة المفيدة للزراعة عالية الإنتاجية.",
        "prod.link": "عرض المواصفات",
        "specs.eyebrow": "التفاصيل الفنية",
        "specs.title": "مجموعة كاملة من مكونات ذبابة الجندي الأسود.",
        "specs.badge.1": "خالٍ من المضادات الحيوية والهرمونات",
        "specs.badge.2": "معالجة خاضعة للرقابة",
        "specs.badge.3": "جودة متسقة",
        "specs.badge.4": "مستدام وصديق للبيئة",
        "specs.tab.1": "يرقات مجمدة",
        "specs.tab.2": "يرقات مجففة",
        "specs.tab.3": "مسحوق منزوع الدهن",
        "specs.tab.4": "مسحوق كامل الدسم",
        "specs.tab.5": "زيت الحشرات",
        "specs.tab.6": "سماد (Frass)",
        "specs.p1.sub": "يرقات كاملة مجمدة طازجة",
        "specs.p2.sub": "يرقات كاملة مجففة",
        "specs.p3.sub": "مسحوق بروتين مركز",
        "specs.p4.sub": "مسحوق كامل غني بالطاقة",
        "specs.p5.sub": "زيت حشرات ممتاز",
        "specs.p6.sub": "سماد حيوي عضوي",
        "specs.table.param": "المعيار",
        "specs.table.value": "القيمة",
        "specs.table.protein": "البروتين الخام",
        "specs.table.fat": "الدهون الخام",
        "specs.table.moisture": "الرطوبة",
        "specs.table.fiber": "الألياف الخام",
        "specs.table.ash": "الرماد",
        "specs.table.lauric": "حمض اللوريك",
        "specs.table.organic": "المادة العضوية",
        "specs.table.nitrogen": "النيتروجين الكلي (N)",
        "specs.table.phos": "الفوسفور المتاح (P₂O₅)",
        "specs.table.pot": "البوتاسيوم القابل للذوبان (K₂O)",
        "specs.table.ph": "درجة الحموضة (pH)",
        "specs.note.label": "ملاحظة:",
        "specs.p5.note": "غني بالأحماض الدهنية متوسطة السلسلة، ثبات تأكسدي عالي.",
        "specs.p6.note": "يحتوي على الكيتين الطبيعي والكائنات الحية الدقيقة المفيدة.",
        "market.eyebrow": "الفرصة",
        "market.title": "قطاع عالمي سريع النمو.",
        "market.driver.1": "ارتفاع تكاليف الأعلاف التقليدية",
        "market.driver.2": "تزايد الطلب العالمي على البروتين",
        "market.driver.3": "التحول العالمي إلى الاقتصاد الأخضر",
        "market.driver.4": "الطلب على حلول منخفضة الانبعاثات",
        "market.driver.5": "توسع قطاع الدواجن والاستزراع المائي",
        "market.sector1.title": "الأعلاف",
        "market.sector1.i1": "مزارع الدواجن",
        "market.sector1.i2": "مشغلو الاستزراع المائي",
        "market.sector1.i3": "مصنعو الأعلاف",
        "market.sector1.i4": "العلامات التجارية لأغذية الحيوانات الأليفة",
        "market.sector2.title": "الزراعة",
        "market.sector2.i1": "المزارع العضوية",
        "market.sector2.i2": "مشغلو البيوت البلاستيكية",
        "market.sector2.i3": "شركات الأسمدة",
        "market.sector3.title": "إدارة النفايات",
        "market.sector3.i1": "البلديات",
        "market.sector3.i2": "الأسواق المركزية",
        "market.sector3.i3": "شركات الأغذية",
        "market.sector3.i4": "المطابخ الصناعية",
        "market.expansion": "عاملة في الأردن، مع إمكانية واضحة للتوسع في مصر ودول الخليج.",
        "impact.eyebrow": "التزامنا",
        "impact.title": "تأثير ثلاثي",
        "impact.1.title": "بيئي",
        "impact.1.copy": "يقلل من أحجام النفايات العضوية، ويخفض انبعاثات مكبات النفايات، ويدعم تيارات إعادة التدوير، ويقلل الاعتماد على البروتين التقليدي.",
        "impact.2.title": "اقتصادي",
        "impact.2.copy": "يخفض تكاليف الأعلاف المحلية، ويخلق بدائل بروتينية مستدامة، ويضيف قيمة إلى النفايات العضوية، ويؤسس مصادر دخل متعددة.",
        "impact.3.title": "اجتماعي",
        "impact.3.copy": "يخلق وظائف خضراء، ويدعم ريادة الأعمال، ويطور الزراعة المحلية، ويمكّن توظيف الشباب.",
        "resources.eyebrow": "المكتبة",
        "resources.title": "الموارد والتنزيلات",
        "res.1.title": "ورقة البيانات الفنية",
        "res.1.copy": "المواصفات الكاملة لمجموعة مكونات ذبابة الجندي الأسود.",
        "res.2.title": "ملخص للمستثمرين",
        "res.2.copy": "نظرة عامة مفصلة على نموذج أعمالنا وخطة التوسع.",
        "res.link": "تحميل الملف",
        "faq.eyebrow": "الأسئلة",
        "faq.title": "الأسئلة الشائعة",
        "faq.1.q": "ما هي ذبابة الجندي الأسود؟",
        "faq.1.a": "ذبابة الجندي الأسود (Hermetia illucens) هي حشرة غير ضارة. في مرحلة اليرقات، تعتبر محولًا حيويًا فعالًا للغاية، حيث تستهلك النفايات العضوية بسرعة وتحولها إلى بروتين ودهون عالية القيمة.",
        "faq.2.q": "ما هي المدخلات العضوية التي تقبلونها؟",
        "faq.2.a": "نقوم بمعالجة مجموعة واسعة من النفايات العضوية النظيفة، بما في ذلك نفايات الأسواق المركزية، وبقايا المطاعم والفنادق، والمنتجات الثانوية لتجهيز الأغذية، والمخلفات الزراعية، والمنتجات الحيوانية الثانوية المختارة.",
        "faq.3.q": "ما هي مدة دورة الإنتاج؟",
        "faq.3.a": "دورة التربية لدينا سريعة للغاية، وعادة ما تستغرق من 10 إلى 14 يومًا فقط حتى تعالج اليرقات المواد الخام بالكامل وتصل إلى حجم الحصاد.",
        "faq.4.q": "هل منتجاتكم خالية من المضادات الحيوية والهرمونات؟",
        "faq.4.a": "نعم. جميع منتجات إيكوفيرا طبيعية 100٪، وتتم معالجتها تحت ظروف خاضعة للرقابة، وخالية تمامًا من الهرمونات الاصطناعية والمضادات الحيوية.",
        "faq.5.q": "ما هي القطاعات التي تخدمونها؟",
        "faq.5.a": "نحن نخدم قطاع الأعلاف (مزارع الدواجن، الاستزراع المائي، أغذية الحيوانات الأليفة)، والزراعة (الزراعة العضوية، شركات الأسمدة)، ونقدم خدمات إدارة النفايات للبلديات وشركات الأغذية.",
        "faq.6.q": "أين يقع مقركم وأين تتوسعون؟",
        "faq.6.a": "تعمل إيكوفيرا حاليًا في الأردن، مع خطط استراتيجية للتوسع الجغرافي في مصر ومنطقة الخليج الأوسع.",
        "cta.title": "دعونا نبني النموذج القادم للاقتصاد الدائري.",
        "cta.button": "تواصل معنا",
        "contact.eyebrow": "كن شريكاً لنا",
        "contact.title": "ابدأ المحادثة",
        "contact.form.name": "الاسم",
        "contact.form.email": "البريد الإلكتروني",
        "contact.form.company": "الشركة",
        "contact.form.message": "الرسالة",
        "contact.form.submit": "إرسال الرسالة",
        "contact.details.founder": "المؤسس",
        "contact.details.founder.val": "عمار الرفوع",
        "contact.details.location": "الموقع",
        "contact.details.location.val": "الأردن",
        "contact.details.whatsapp": "واتساب",
        "contact.details.contact": "التواصل",
        "footer.nav": "روابط سريعة",
        "footer.prod": "المنتجات",
        "footer.contact": "تواصل معنا",
        "splash.tagline": "بروتينات حيوية ممتازة • أسمدة مستدامة • زيوت صديقة للبيئة",
        "splash.slogan": "\"تمكين الزراعة بمغذيات عضوية من الجيل القادم.\"",
        "footer.bottom": "© 2026 إيكوفيرا · حلول الأعلاف الحيوية والمستدامة. جميع الحقوق محفوظة.",
        "legal.privacy": "سياسة الخصوصية",
        "legal.terms": "الشروط والأحكام",
        "legal.cookie": "سياسة ملفات تعريف الارتباط",
        "legal.disclaimer": "إخلاء المسؤولية عن المنتجات",
        "legal.ip": "إشعار الملكية الفكرية"
    }
};

document.addEventListener('DOMContentLoaded', () => {

    // Initialize Lucide Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // --- Language Translation Engine ---
    let currentLang = localStorage.getItem('lang') || 'en';
    
    const applyLanguage = (lang) => {
        currentLang = lang;
        localStorage.setItem('lang', lang);
        
        // Update DOM direction and lang
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        
        document.querySelectorAll('img.logo-img, img.splash-logo-img').forEach(img => {
            img.src = lang === 'ar' ? './assets/arabic_logo.png' : './assets/logo_nobackground.png';
        });
        
        // Update all translation keys
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });

        // Update legal links href based on language
        document.querySelectorAll('a.legal-link').forEach(el => {
            const currentHref = el.getAttribute('href');
            if (currentHref) {
                if (lang === 'ar' && !currentHref.includes('-ar.html')) {
                    el.setAttribute('href', currentHref.replace('.html', '-ar.html'));
                } else if (lang === 'en' && currentHref.includes('-ar.html')) {
                    el.setAttribute('href', currentHref.replace('-ar.html', '.html'));
                }
            }
        });

        // Update whatsapp links href based on language
        document.querySelectorAll('a.wa-link').forEach(el => {
            if (lang === 'ar') {
                el.setAttribute('href', 'https://wa.me/962771513888?text=' + encodeURIComponent('مرحباً، هل يمكنني الحصول على مزيد من المعلومات حول إيكوفيرا؟'));
            } else {
                el.setAttribute('href', 'https://wa.me/962771513888?text=' + encodeURIComponent('Hello can i get more info on Ecovera?'));
            }
        });

        // Update active class on desktop dropdown
        document.querySelectorAll('.lang-option').forEach(btn => {
            if (btn.getAttribute('data-lang') === lang) {
                btn.style.backgroundColor = 'rgba(0,0,0,0.05)';
            } else {
                btn.style.backgroundColor = 'transparent';
            }
        });

        // Update Desktop Display Toggle Button
        const displayLang = lang === 'en' ? 'EN' : 'AR';
        const displayFlag = lang === 'en' ? '🇺🇸' : '🇯🇴';
        const currentLangSpan = document.querySelector('.current-lang');
        if(currentLangSpan) currentLangSpan.textContent = displayLang;

        // If rtl, adjust some layout stuff implicitly managed by CSS logical props
        // We re-trigger icon render just in case
        if (typeof lucide !== 'undefined') lucide.createIcons();
    };

    // Initialize language
    applyLanguage(currentLang);

    // Desktop Language Switcher
    const langBtn = document.querySelector('.lang-btn');
    const langMenu = document.querySelector('.lang-menu');
    
    if (langBtn && langMenu) {
        langBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isExpanded = langBtn.getAttribute('aria-expanded') === 'true';
            langBtn.setAttribute('aria-expanded', !isExpanded);
            langMenu.classList.toggle('show');
        });

        document.addEventListener('click', (e) => {
            if (!langBtn.contains(e.target) && !langMenu.contains(e.target)) {
                langBtn.setAttribute('aria-expanded', 'false');
                langMenu.classList.remove('show');
            }
        });

        document.querySelectorAll('.lang-option').forEach(option => {
            option.addEventListener('click', (e) => {
                const selectedLang = e.currentTarget.getAttribute('data-lang');
                applyLanguage(selectedLang);
                langBtn.setAttribute('aria-expanded', 'false');
                langMenu.classList.remove('show');
            });
        });
    }

    // Mobile Language Switcher
    document.querySelectorAll('.mobile-lang-option').forEach(option => {
        option.addEventListener('click', (e) => {
            const selectedLang = e.currentTarget.getAttribute('data-lang');
            applyLanguage(selectedLang);
            // close mobile menu
            mobileBtn.setAttribute('aria-expanded', 'false');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });


    // --- Mobile Menu Overlay Toggle ---
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu-overlay');

    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            const isExpanded = mobileBtn.getAttribute('aria-expanded') === 'true';
            mobileBtn.setAttribute('aria-expanded', !isExpanded);
            mobileMenu.classList.toggle('active');
            document.body.style.overflow = isExpanded ? '' : 'hidden'; // Prevent scrolling when open
        });

        // Close menu when a link is clicked
        document.querySelectorAll('.mobile-card-link, .mobile-cta-btn').forEach(link => {
            link.addEventListener('click', () => {
                mobileBtn.setAttribute('aria-expanded', 'false');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // --- Sticky Navbar, Active State & Scroll Progress ---
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-item');
    const progressBar = document.getElementById('scroll-progress');

    window.addEventListener('scroll', () => {
        // Scroll Progress
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        if(progressBar) progressBar.style.width = scrolled + "%";

        // Sticky nav
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Active state
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });

    // --- Scroll Reveal Animation ---
    if (!prefersReducedMotion) {
        const reveals = document.querySelectorAll('.reveal');
        const revealOnScroll = () => {
            const windowHeight = window.innerHeight;
            const elementVisible = 100;

            reveals.forEach(reveal => {
                const elementTop = reveal.getBoundingClientRect().top;
                if (elementTop < windowHeight - elementVisible) {
                    reveal.classList.add('active');
                }
            });
        };
        window.addEventListener('scroll', revealOnScroll);
        revealOnScroll(); // Trigger on load
    } else {
        document.querySelectorAll('.reveal').forEach(el => el.classList.add('active'));
    }

    // --- Animated Counters ---
    const counters = document.querySelectorAll('.counter');
    let hasAnimated = false;
    const statsSection = document.getElementById('stats');

    const animateCounters = () => {
        if(prefersReducedMotion) {
            counters.forEach(counter => counter.innerText = counter.getAttribute('data-target'));
            return;
        }

        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const duration = 2000; // ms
            const stepTime = Math.abs(Math.floor(duration / target)) || 50;
            let current = 0;

            const updateCounter = setInterval(() => {
                current += Math.ceil(target / (duration / stepTime));
                if (current >= target) {
                    counter.innerText = target;
                    clearInterval(updateCounter);
                } else {
                    counter.innerText = current;
                }
            }, stepTime);
        });
    };

    if(statsSection) {
        window.addEventListener('scroll', () => {
            if (!hasAnimated) {
                const sectionTop = statsSection.getBoundingClientRect().top;
                if (sectionTop < window.innerHeight - 100) {
                    animateCounters();
                    hasAnimated = true;
                }
            }
        });
    }

    // --- Specification Tabs Logic ---
    const tabButtons = document.querySelectorAll('.spec-tab-btn');
    const tabPanels = document.querySelectorAll('.spec-panel');

    const activateTab = (tabId) => {
        tabButtons.forEach(btn => {
            if(btn.getAttribute('data-tab') === tabId) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        
        tabPanels.forEach(panel => {
            if(panel.getAttribute('id') === tabId) {
                panel.classList.add('active');
            } else {
                panel.classList.remove('active');
            }
        });
    };

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => activateTab(btn.getAttribute('data-tab')));
    });

    // --- Product Card Click Routing ---
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('click', () => {
            const targetId = card.getAttribute('data-target');
            if (targetId) {
                const targetIdName = targetId.substring(1); // remove #
                activateTab(targetIdName);
                
                // Scroll to specifications section smoothly
                const specsSection = document.getElementById('specifications');
                if (specsSection) {
                    window.scrollTo({
                        top: specsSection.offsetTop - navbar.offsetHeight - 20,
                        behavior: prefersReducedMotion ? 'auto' : 'smooth'
                    });
                }
            }
        });

        // Add keyboard accessibility
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.click();
            }
        });
    });

    // --- FAQ Accordion Logic ---
    const faqHeaders = document.querySelectorAll('.faq-header');

    faqHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const isExpanded = header.getAttribute('aria-expanded') === 'true';

            // Close all others
            document.querySelectorAll('.faq-header').forEach(otherHeader => {
                otherHeader.setAttribute('aria-expanded', 'false');
                otherHeader.nextElementSibling.style.maxHeight = null;
            });

            // Toggle current
            if (!isExpanded) {
                header.setAttribute('aria-expanded', 'true');
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });

    // --- Smooth Scroll for Anchor Links ---
    document.querySelectorAll('.smooth-scroll, a[href^="#"]:not(.nav-item):not(.mobile-card-link):not(.btn)').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href') || this.getAttribute('data-target');
            if(!targetId || targetId === '#') return;
            
            if(targetId.startsWith('#spec-')) {
                e.preventDefault();
                activateTab(targetId.substring(1));
                const specsSection = document.getElementById('specifications');
                if(specsSection) {
                    window.scrollTo({
                        top: specsSection.offsetTop - navbar.offsetHeight - 20,
                        behavior: prefersReducedMotion ? 'auto' : 'smooth'
                    });
                }
                return;
            }

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop - navbar.offsetHeight,
                    behavior: prefersReducedMotion ? 'auto' : 'smooth'
                });
            }
        });
    });

    document.querySelectorAll('.nav-item, .mobile-card-link, .btn[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if(!targetId || targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop - navbar.offsetHeight,
                    behavior: prefersReducedMotion ? 'auto' : 'smooth'
                });
            }
        });
    });

    // --- Cursor Interactive Glow & Animation Performance ---
    const cursorGlow = document.getElementById('cursor-glow');
    const heroSection = document.getElementById('hero');

    if (!prefersReducedMotion) {
        // Cursor glow only on non-touch devices
        if (cursorGlow && heroSection && matchMedia('(pointer: fine)').matches) {
            heroSection.addEventListener('mousemove', (e) => {
                cursorGlow.style.opacity = '1';
                cursorGlow.style.left = e.clientX + 'px';
                cursorGlow.style.top = e.clientY + 'px';
            });
            heroSection.addEventListener('mouseleave', () => {
                cursorGlow.style.opacity = '0';
            });
        }
        
        // Pause heavy decorative animations when not in viewport to save CPU/GPU
        if ('IntersectionObserver' in window) {
            const pauseAnimationsOnHide = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if(!entry.isIntersecting) {
                        entry.target.style.animationPlayState = 'paused';
                    } else {
                        entry.target.style.animationPlayState = 'running';
                    }
                });
            }, { threshold: 0 });

            document.querySelectorAll('.hero-orb-1, .hero-orb-2, .about-shape, .products-leaf').forEach(el => {
                pauseAnimationsOnHide.observe(el);
            });
        }
    }
});

// --- Contact Form Handling ---
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<span class="spinner"></span> Sending...';
            submitBtn.disabled = true;

            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                company: document.getElementById('company').value,
                message: document.getElementById('message').value
            };

            try {
                const response = await fetch('/.netlify/functions/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData)
                });
                
                const result = await response.json();
                
                if (response.ok) {
                    alert(document.documentElement.lang === 'ar' ? 'تم إرسال رسالتك بنجاح!' : 'Your message has been sent successfully!');
                    contactForm.reset();
                } else {
                    alert((document.documentElement.lang === 'ar' ? 'خطأ: ' : 'Error: ') + (result.error || 'Unknown error'));
                }
            } catch (error) {
                console.error('Error submitting form:', error);
                alert(document.documentElement.lang === 'ar' ? 'حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.' : 'An error occurred. Please try again later.');
            } finally {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }
        });
    }
});
