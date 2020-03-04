import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
  }
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    font-family: ${({ theme }) => theme.font.family.primary};
    color: ${({ theme }) => theme.colors.dark}
  }

  p {
    font-size: ${({ theme }) => theme.font.size.m};
    color: ${({ theme }) => theme.colors.dark100}
  }

  h1 {
    font-size: ${({ theme }) => theme.font.size.xxl}
  }

  h2 {
    font-size: ${({ theme }) => theme.font.size.xl}
  }

  h3 {
    font-size: ${({ theme }) => theme.font.size.l}
  }
`;

export default GlobalStyle;
