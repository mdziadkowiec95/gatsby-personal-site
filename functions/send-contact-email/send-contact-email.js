/* eslint-disable no-console */
const fetch = require('node-fetch');
const sgMail = require('@sendgrid/mail');
require('dotenv').config();

const log = (eventName, data) => {
  console.log(
    '\n',
    `------- start ------- ${eventName.toUpperCase()} ------ start ------`,
    '\n'
  );
  if (data) console.log(`------ REQUEST BODY: `, data, '\n');
  console.log(
    `------ end ------- ${eventName.toUpperCase()} ------ end ------`,
    '\n'
  );
};

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const RECAPTCHA_VERIFY_BASE = 'https://www.google.com/recaptcha/api/siteverify';

const sendEmail = (body, callback) => {
  const msg = {
    to: 'hrmdrum@gmail.com',
    from: body.email,
    subject: 'Contact from mdziadkowiec.com',
    html: `
      <h2>Contact from <strong>mdziadkowiec.com</strong> website.</h2>
      <p>Message from <strong>${body.name}</strong></p><hr />
      <h3>Message body:</h3>
      <p>${body.message}</p>
    `,
  };

  sgMail.send(msg).then(
    () => {
      log('Email sent successfuly', body);

      callback(null, {
        statusCode: 200,
        body: JSON.stringify({
          success: true,
          msg: 'Email sent successfuly!',
        }),
      });
    },
    err => {
      log('Email not sent', body);

      console.error(err);
      callback(null, {
        statusCode: 500,
        body: JSON.stringify({
          success: false,
          msg: 'Error occured, email not sent!',
        }),
      });
    }
  );
};

exports.handler = function handler(event, context, callback) {
  if (event.httpMethod !== 'POST')
    return callback(null, {
      statusCode: 405,
      body: JSON.stringify({ msg: 'Method not allowed!' }),
    });

  const body = JSON.parse(event.body);
  const { captchaToken } = body;

  if (!captchaToken) {
    log('Token not provided by client', event.body);

    return callback(null, {
      statusCode: 400,
      body: JSON.stringify({
        success: false,
        msg: 'ReCaptcha verification failed',
        errors: ['Token not provided'],
      }),
    });
  }

  const VERIFY_URL = `${RECAPTCHA_VERIFY_BASE}?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captchaToken}`;

  fetch(VERIFY_URL, {
    method: 'post',
  })
    .then(res => res.json())
    .then(data => {
      if (!data.success) {
        log('ReCaptcha verification failed', event.body);

        return callback(null, {
          statusCode: 400,
          body: JSON.stringify({
            success: false,
            msg: 'ReCaptcha verification failed',
            errors: data['error-codes'],
          }),
        });
      }

      return sendEmail(body, callback);
    })
    .catch(err => {
      console.error(err);

      callback(null, {
        statusCode: 500,
        body: JSON.stringify({
          msg: 'Internal server error',
        }),
      });
    });
  return false;
};
