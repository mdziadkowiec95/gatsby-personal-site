import { createGlobalStyle, css } from 'styled-components';
import { normalize } from 'styled-normalize';
import { respondTo } from './mixins';

const GlobalStyle = createGlobalStyle`
  /* ${normalize} */

  html {
    box-sizing: border-box;
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  * {
    margin: 0;
    padding: 0;
    color: ${({ theme }) => theme.colors.dark};
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
    color: ${({ theme }) => theme.colors.dark100};
    line-height: 1.45;
  }

  h1 {
    font-size: ${({ theme }) => theme.font.size.xxl}
  }

  h2 {
    font-size: ${({ theme }) => theme.font.size.l};
    
    ${respondTo.desktop(css`
      font-size: ${({ theme }) => theme.font.size.xl};
    `)}
  }

  h3 {
    font-size: ${({ theme }) => theme.font.size.l}
  }

  ul {
    list-style: none;
  }

  li {
    font-size: ${({ theme }) => theme.font.size.m};
  }

  a {
    font-size: 1.6rem;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  button, 
  input {
    :focus {
      /* outline: none; */
      /* box-shadow: 0 0 8px ${({ theme }) => theme.colors.secondary}; */
    }
  }
`;

export default GlobalStyle;
