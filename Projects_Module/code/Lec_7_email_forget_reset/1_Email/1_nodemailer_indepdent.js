
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();
// send the API key 
process.env.SENDGRID_API_KEY;

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

// gmailtechDetails = {
//     service: "gmail",
//     host: "smtp.gmail.com",
//     secure: true,
//     auth: {
//         user: "pepcodingdev@gmail.com",
//         // different from your login password 
//         pass: APP_PASSWORD
//     }
// }
const transporter = nodemailer.createTransport(techDetails);
// entering details required to send your Email 

let emailObject = {
    to: 'mr.jasbirsingh96@gmail.com', // Change to your recipient
    from: 'jasbir.singh@scaler.com', // Change to your verified sender
    subject: 'Testing sendgrid to send Email using Nodemailer',
    text: 'and easy to do anywhere, even with Node.js ', // it si shown to end client when 
    // SMTP server  is not able to parser HTML
    html: '<strong>Current POC for sendgrid with nodemailer</strong>',
}
transporter.sendMail(emailObject).then(() => {
    console.log("Email is send")
}).catch(err => { console.log(err) });

