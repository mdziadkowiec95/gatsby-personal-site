import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import * as Styled from './styles';
import TextField from '../TextField/TextField';
import ReCaptcha from '../ReCaptcha/ReCaptcha';

const ContactForm = () => {
  const form = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
      captchaToken: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(25, 'Name can be no longer than 25 characters')
        .required('Name is required'),
      email: Yup.string()
        .email('You need to provide valid email')
        .required('Email is required'),
      message: Yup.string()
        .min(
          6,
          'Message should be longer than 6 and shorter than 250 characters'
        )
        .max(250, 'Message can be at most 250 characters length')
        .required('Message is required'),
    }),
    onSubmit: values => {
      console.log('Before submiting');
      fetch('/.netlify/functions/send-contact-email/send-contact-email', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          message: values.message,
          captchaToken: values.captchaToken,
        }),
      })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
      // alert(JSON.stringify(values, null, 2));
    },
  });

  useEffect(() => {}, []);

  return (
    <form onSubmit={form.handleSubmit}>
      <TextField
        name="name"
        value={form.values.name}
        placeholder="What is your name?"
        onChange={form.handleChange}
        onBlur={form.handleBlur}
        error={form.errors.name}
        touched={form.touched.name}
      />
      <TextField
        name="email"
        type="email"
        value={form.values.email}
        placeholder="Your email"
        onChange={form.handleChange}
        onBlur={form.handleBlur}
        error={form.errors.email}
        touched={form.touched.email}
      />
      <TextField
        isTextarea
        name="message"
        value={form.values.message}
        placeholder="Your message..."
        onChange={form.handleChange}
        onBlur={form.handleBlur}
        error={form.errors.message}
        touched={form.touched.message}
      />
      <Styled.ActionBox>
        <div>
          <ReCaptcha
            onChange={token => form.setFieldValue('captchaToken', token)}
          />
        </div>
        <Styled.SubmitBtn type="submit">Send a message</Styled.SubmitBtn>
      </Styled.ActionBox>
      {form.errors.captchaToken && (
        <Styled.CaptchaErr>Are you sure you are not a robot?</Styled.CaptchaErr>
      )}
    </form>
  );
};

export default ContactForm;
