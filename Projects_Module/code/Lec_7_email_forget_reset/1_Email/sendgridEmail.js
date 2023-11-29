const sgMail = require('@sendgrid/mail');

const dotenv = require("dotenv");
dotenv.config();
// send the API key 
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
/******this message object describes the whole mail****/ 
const msg = {
    to: 'mr.jasbirsingh96@gmail.com', // Change to your recipient
    from: 'jasbir.singh@scaler.com', // Change to your verified sender
    subject: 'Testing sendgrid to send Email',
    text: 'and easy to do anywhere, even with Node.js', // it si shown to end client when 
    // SMTP server  is not able to parser HTML
    html: '<strong>Current POC for sendgrid</strong>',
}

sgMail
    .send(msg)
    .then(() => {
        console.log('Email sent');
    })
    .catch((error) => {
        console.error(error)
    })