const fs = require('fs');
let js = fs.readFileSync('c:/Users/msi/OneDrive/Desktop/ecovera/js/main.js', 'utf8');

const formHandler = 

    // --- Contact Form Handling ---
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
                    alert(currentLang === 'ar' ? 'تم إرسال رسالتك بنجاح!' : 'Your message has been sent successfully!');
                    contactForm.reset();
                } else {
                    alert((currentLang === 'ar' ? 'خطأ: ' : 'Error: ') + (result.error || 'Unknown error'));
                }
            } catch (error) {
                console.error('Error submitting form:', error);
                alert(currentLang === 'ar' ? 'حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.' : 'An error occurred. Please try again later.');
            } finally {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }
        });
    }
;

// Insert the form handler right before the closing DOMContentLoaded block
js = js.replace(/}\);\s*$/, formHandler + '\n});\n');
fs.writeFileSync('c:/Users/msi/OneDrive/Desktop/ecovera/js/main.js', js, 'utf8');
console.log('done');
