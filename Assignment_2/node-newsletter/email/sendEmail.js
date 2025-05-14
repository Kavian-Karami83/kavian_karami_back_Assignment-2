import nodemailer from 'nodemailer';
import{MAILRAP_USER, MAILRAP_PASS} from '../config.js';
const transporter = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 587,
    auth: {
        user: MAILRAP_USER,
        pass: MAILRAP_PASS
    }
});

export async function sendEmailtoALL(recipents, htmlcontent) {
    for (const recipents of recipents) {
    const mailOptions = {
        from: '"Newsletter" <noreply@newsletter.com>',
        to: recipents,
        subject: 'Newsletter',
        html: htmlcontent
    };
    try {
        const info = await transporter.sendMail(mailOptions);
        console.log( `Email send ${recipents.email} ok`);

    }catch(error){
        console.error(`Error sending email to ${recipents.email}:`, error.message);
    }
  }   
}