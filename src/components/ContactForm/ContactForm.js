import React, { useEffect } from 'react';

const ContactForm = () => {
  useEffect(() => {
    fetch('/api-lambda/send-contact-email/send-contact-email')
      .then(res => res.text())
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }, []);
  return (
    <div>
      <h3>Contact me!</h3>
      <input type="text" placeholder="Name" />
    </div>
  );
};

export default ContactForm;
