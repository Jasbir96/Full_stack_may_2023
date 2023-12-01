
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();
/******************setup *********************/

//  entering the details about our smtp server and client -> Creating transporter
const techDetails = {
    host: 'smtp.sendgrid.net',
    port: 465,
    //identify our application -> sender 
    secure: true,
    auth: {
        user: "apikey",
        pass: process.env.SENDGRID_API_KEY
    }
}
const transporter = nodemailer.createTransport(techDetails);
const fs = require("fs");



/*************************************************/




async function emailSender(to, subject, html, text) {
    try {
        // entering details required to send your Email 
        console.log(process.env.SENDER_EMAIL, "subject", subject, "text", text);

        let emailObject = {
            to: to, // Change to your recipient
            from: process.env.SENDER_EMAIL, // Change to your verified sender
            subject: subject,
            text: text, // it is shown to end client when 
            // SMTP server  is not able to parser HTML
            html: html,
        }
        await transporter.sendMail(emailObject);
    } catch (err) {
        console.log(err);
        throw new Error(err.message)
    }

}


async function sendEmailHelper(otp, htmlTemplate, userName, to) {
    // 2 write the template
    // template -> final -> replace placeholders with actual data
    const nameUpdatedHtml = htmlTemplate.replace("#{USER_NAME}", userName);
    const finalHTMLCode = nameUpdatedHtml.replace("#{OTP}", otp);
    const text = `
    Hi ${userName}
    Your otp to reset your password is ${otp}`;
    const subject = "RESET PASSWORD Verification OTP";
    await emailSender(to, subject, finalHTMLCode, text);
}


module.exports = sendEmailHelper;





