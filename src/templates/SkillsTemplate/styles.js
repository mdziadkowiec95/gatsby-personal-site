import styled, { css } from 'styled-components';
import { respondTo } from '../../styles/mixins';

export const Wrapper = styled.section`
  position: relative;
  padding: 100px 0;

  ::before {
    content: '';
    position: absolute;
    top: 0%;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: ${({ theme }) => theme.colors.primary};
    /*  THIS gradient IS JUST AN IDEA */
    /* background-image: linear-gradient(
      #615ffa,
      #7510f7 37%,
      #615ffa 67%,
      rgb(255, 255, 255)
    ); */

    background-image: linear-gradient(
      #2321a3,
      #5e13bd 37%,
      #615ffa 67%,
      rgb(255, 255, 255)
    );

    ${respondTo.desktop(css`
      height: 500px;
    `)};
  }
`;
