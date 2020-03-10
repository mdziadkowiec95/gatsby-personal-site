import React from 'react';
import { Link } from 'gatsby';
import * as Styled from './styles';
import Container from '../Container/Container';

const ContactBox = () => {
  return (
    <Container>
      <Styled.Wrapper>
        <h3>Get in touch</h3>
        <Styled.ContentBox>
          <Styled.Description>
            Are you interested in getting in touch with me, collaboration,
            talking about projects or just would like to share your thoughts?
          </Styled.Description>
          <Styled.Cta as={Link} to="/contact">
            Contact me!
          </Styled.Cta>
        </Styled.ContentBox>
      </Styled.Wrapper>
    </Container>
  );
};

export default ContactBox;
