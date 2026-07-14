const fs = require('fs');
const code = 

// --- Contact Form Handling ---
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<span class=\"spinner\"></span> Sending...';
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
;
fs.appendFileSync('c:/Users/msi/OneDrive/Desktop/ecovera/js/main.js', code, 'utf8');
console.log('done');
