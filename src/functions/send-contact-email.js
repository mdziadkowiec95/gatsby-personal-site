/* eslint-disable no-console */

// const nodemailer = require('nodemailer');
// const nodemailerSendgrid = require('nodemailer-sendgrid');
// const transport = nodemailer.createTransport(
//   nodemailerSendgrid({
//     apiKey: SENDGRID_API_KEY,
//   })
// );

require('dotenv').config();
const sgMail = require('@sendgrid/mail');

const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

export function handler(event, context, callback) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }
  const msg = {
    to: 'hrmdrum@gmail.com',
    from: 'test@example.com',
    subject: 'Sending with Twilio SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };
  // ES6
  sgMail.send(msg).then(
    () => {
      callback(null, {
        statusCode: 200,
        body: 'Email Sent!',
      });
    },
    err => {
      console.error(err);
      callback(null, {
        statusCode: 500,
        body: 'Email NOT Sent!',
      });
    }
  );
  return false;
}
