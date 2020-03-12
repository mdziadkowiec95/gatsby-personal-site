import React from 'react';
import * as Styled from './styles';
import Container from '../Container/Container';
import ContactForm from '../ContactForm/ContactForm';

const ContactBox = () => {
  return (
    <Container id="contact">
      <Styled.Wrapper>
        <h3>Get in touch</h3>
        <Styled.ContentBox>
          <Styled.Description>
            Are you interested in getting in touch with me, collaboration,
            talking about projects or just would like to share your thoughts?
          </Styled.Description>
        </Styled.ContentBox>
        <ContactForm />
      </Styled.Wrapper>
    </Container>
  );
};

export default ContactBox;
