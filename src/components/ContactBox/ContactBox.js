import React from 'react';
import * as Styled from './styles';
import Container from '../Container/Container';

const ContactBox = () => {
  return (
    <Container>
      <Styled.Wrapper>
        <h3>Get in touch</h3>
        <Styled.ContentBox>
          <p>
            Are you interested in getting in touch with me, collaboration,
            talking about projects or just would like to share your thoughts?
          </p>
          <Styled.Cta>Contact me!</Styled.Cta>
        </Styled.ContentBox>
      </Styled.Wrapper>
    </Container>
  );
};

export default ContactBox;
