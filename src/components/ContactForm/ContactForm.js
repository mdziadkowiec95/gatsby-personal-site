import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import * as Styled from './styles';
import TextField from '../TextField/TextField';
import Button from '../Button/Button';
import ReCaptcha from '../ReCaptcha/ReCaptcha';

const ContactForm = () => {
  const form = useFormik({
    initialValues: {
      name: '',
      subject: '',
      message: '',
      captchaToken: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(25, 'Name can be no longer than 25 characters')
        .required('Name is required'),
      subject: Yup.string()
        .max(20, 'Subject can be at most 50 characters long')
        .required('Message is required'),
      message: Yup.string()
        .min(
          6,
          'Message should be longer than 6 and shorter than 250 characters'
        )
        .max(250, 'Message can be at most 250 characters length')
        .required('Message is required'),
      captchaToken: Yup.string().required(`Are you sure you are not a robot?`),
    }),
    onSubmit: values => {
      form.validateField('captchaToken');
      alert(JSON.stringify(values, null, 2));
    },
  });

  // useEffect(() => {
  //   fetch('/api-lambda/send-contact-email/send-contact-email')
  //     .then(res => res.text())
  //     .then(data => console.log(data))
  //     .catch(err => console.log(err));
  // }, []);

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
        name="subject"
        value={form.values.subject}
        placeholder="What is the subject?"
        onChange={form.handleChange}
        onBlur={form.handleBlur}
        error={form.errors.subject}
        touched={form.touched.subject}
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
