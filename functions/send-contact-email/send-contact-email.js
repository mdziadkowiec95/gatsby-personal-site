/* eslint-disable no-console */
const fetch = require('node-fetch');
const sgMail = require('@sendgrid/mail');
const yup = require('yup');
require('dotenv').config();

sgMail.setApiKey(`${process.env.SENDGRID_API_KEY}`);

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

exports.handler = async function handler(event, context, callback) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ msg: 'Method not allowed!' }),
    };
  }

  const body = JSON.parse(event.body);

  const { captchaToken } = body;

  if (!captchaToken) {
    log('Token not provided by client', event.body);

    return {
      statusCode: 400,
      body: JSON.stringify({
        success: false,
        msg: 'ReCaptcha verification failed',
        errors: ['Token not provided'],
      }),
    }
  }
  
  const formFieldsValid = await contactFormSchema.isValid({
    name: body.name,
    email: body.email,
    message: body.message
  });

  if (!formFieldsValid) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        success: false,
        msg: 'Form fields are not valid',
      }),
    };
  }

  const VERIFY_URL = `${RECAPTCHA_VERIFY_BASE}?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captchaToken}`;
  
  try {
    const captchaRes = await postRequest(VERIFY_URL);
    const captchaData = await captchaRes.json();
  
    if (!captchaData.success) {
      log('ReCaptcha verification failed', event.body);
  
      return {
        statusCode: 400,
        body: JSON.stringify({
          success: false,
          msg: 'ReCaptcha verification failed',
        }),
      }
    }
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        msg: 'ReCaptcha verification failed',
      }),
    }
  }
 
  log('Send Email step', event.body);
  
  try {
    const msg = {
      to: 'michal.dziadkowiec123@gmail.com',
      from: body.email,
      subject: 'Contact from mdziadkowiec.com',
      html: `
        <h2>Contact from <strong>mdziadkowiec.com</strong> website.</h2>
        <p>Message from <strong>${body.name}</strong></p><hr />
        <h3>Message body:</h3>
        <p>${body.message}</p>
      `,
    };
    await sgMail.send(msg);

    log('Email sent successfully!', body);

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        msg: 'Email sent successfully!',
      }),
    }
  } catch (error) {
    log('Email sending error', body);
    console.error(error);

    return {
      statusCode: 500,
      body: JSON.stringify({
        success: true,
        msg: 'Unexpected error occurred, email not sent. Sorry...',
      }),
    }
  }
};
