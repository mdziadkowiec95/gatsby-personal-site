import React from 'react';
import LayoutTemplate from '../templates/LayoutTemplate/LayoutTemplate';
import SEO from '../components/SEO/seo';
import ContactForm from '../components/ContactForm/ContactForm';

const ContactPage = () => (
  <LayoutTemplate>
    <SEO title="Home" />
    <h1>Contact page</h1>
    <ContactForm />
  </LayoutTemplate>
);

export default ContactPage;
