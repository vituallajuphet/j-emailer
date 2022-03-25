const nodemailer = require('nodemailer');

const sendEmail = async (data) => {

    const { to, html, text, from, subject } = data

    const htmlBody = (html && to ? { html } : html ? {html} : {to} )

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
          user: 'web2.juphetvitualla@gmail.com',
          pass: ''
        }
      });
      
      const mailOptions = {
        from: from,
        to: to,
        subject: subject,
        ...htmlBody
      };

      console.log(mailOptions);
      
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log("error: " + error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      }); 
}

module.exports = sendEmail;