/* eslint-disable no-console */
const fetch = require('node-fetch');
const sgMail = require('@sendgrid/mail');
const yup = require('yup');
require('dotenv').config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

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

const contactFormSchema = yup.object().shape({
  name: yup.string().max(50).required(),
  email: yup.string().email().required(),
  message: yup.string().min(6).max(250),
});

const RECAPTCHA_VERIFY_BASE = 'https://www.google.com/recaptcha/api/siteverify';

const postRequest = url => fetch(url, {
  method: 'post',
})

exports.handler = function handler(event, context, callback) {
  if (event.httpMethod !== 'POST') {
    return callback(null, {
      statusCode: 405,
      body: JSON.stringify({ msg: 'Method not allowed!' }),
    });
  }

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
  
  contactFormSchema.isValid({
    name: body.name,
    email: body.email,
    message: body.message
  }).then(valid => {
    if (!valid) {
      return callback(null, {
        statusCode: 400,
        body: JSON.stringify({
          success: false,
          msg: 'Form fields are not valid',
        }),
      });
    }

    const VERIFY_URL = `${RECAPTCHA_VERIFY_BASE}?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captchaToken}`;
    return postRequest(VERIFY_URL);
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
    return  callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        success: false,
        msg: 'ReCaptcha verification sucess',
        errors: data['error-codes'],
      }),
    });
  }).then(() => {
    return; // block sending email
    log('Send Email callback', event.body);

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
  })

  return false;
};
