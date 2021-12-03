const nodemailer = require('nodemailer')

const sendMail = (name, email, title, message, callback) => {

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'mvohra024@gmail.com',
        pass: 'HelloWorld'
      }
    });
    const mailOptions = {
      from: email,
      to: 'mvohra024@gmail.com',
      subject: title,
      text: `Hello, This is ${name} & my Email:${email}  Message: ${message}`
    }; 
    
    transporter.sendMail(mailOptions , function(err, data) {
      if (err) {
        callback(err, null)
      } else {
        callback(null, data)
      }
    })
  }

module.exports = sendMail