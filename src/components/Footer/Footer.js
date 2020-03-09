import React from 'react';
import * as Styled from './styles';

const Footer = () => {
  return (
    <Styled.Wrapper>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </Styled.Wrapper>
  );
};

export default Footer;
