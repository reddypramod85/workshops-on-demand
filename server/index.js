var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const fromEmailAddress = process.env.FROM_EMAIL_ADDRESS;
const toEmailAddress = process.env.TO_EMAIL_ADDRESS;
const smtpHost = process.env.SMTP_HOST
const smtpPort = process.env.SMTP_PORT


var transport = {
    host: smtpHost, // Don’t forget to replace with the SMTP host of your provider
    port: smtpPort,
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/send', (req, res, next) => {
  var name = req.body.name
  var email = req.body.email
  var company = req.body.company
  var notebookList = req.body.notebookList
  var bookingPeriod = req.body.bookingPeriod

  var content = ` Name: ${name}\n Email ID: ${email}\n Company: ${company}\n Notebook List: ${notebookList}\n Booking Period: ${bookingPeriod}\n `

  var mail = {
    from: fromEmailAddress,
    to: toEmailAddress,  // Change to email address that you want to receive messages on
    subject: `New notebooks booking request from ${name}`,
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
       status: 'success'
      })
    }
  })
})

const app = express()
app.use(cors())
app.use(express.json())
app.use('/', router)
app.listen(3002)