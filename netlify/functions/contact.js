const { Resend } = require('resend');

// Initialize Resend with the API key from Netlify Environment Variables
const resend = new Resend(process.env.RESEND_API_KEY);

exports.handler = async function (event, context) {
    // Only allow POST requests
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        const data = JSON.parse(event.body);
        const { name, email, company, message } = data;

        // Basic validation
        if (!name || !email || !message) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Missing required fields: Name, Email, and Message.' })
            };
        }

        // Send email via Resend
        const { data: responseData, error } = await resend.emails.send({
            // Since you connected your domain, you can send from any address at your domain.
            from: 'Website Contact Form <no-reply@ecoverajo.com>', 
            to: ['info@ecoverajo.com'],
            subject: `New Inquiry from ${name} via Ecovera Website`,
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
                    <h2 style="color: #2F3E22; margin-top: 0;">New Website Contact</h2>
                    <p>You have received a new message from the contact form on ecoverajo.com.</p>
                    <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
                    
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                    <p><strong>Company:</strong> ${company || 'Not provided'}</p>
                    
                    <h4 style="margin-bottom: 5px;">Message:</h4>
                    <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${message}</div>
                </div>
            `
        });

        // Handle Resend API errors
        if (error) {
            console.error('Resend API Error:', error);
            return {
                statusCode: 400,
                body: JSON.stringify({ error: error.message })
            };
        }

        // Success response
        return {
            statusCode: 200,
            body: JSON.stringify({ success: true, message: 'Message sent successfully!', data: responseData })
        };

    } catch (error) {
        console.error('Server Error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'An internal server error occurred.' })
        };
    }
};
