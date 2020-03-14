import styled, { css } from 'styled-components';
import { respondTo } from '../../styles/mixins';

export const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;

  ${respondTo.desktop(css`
    position: fixed;
    transform: translateY(-150px);
    transition: background-color .3s ease-in-out, transform .3s ease-in-out;

    ${({ isFixed }) => isFixed && css`
      transform: translateY(0);
    `}
    ${({ hasBackground }) => hasBackground && css`
      background-color: ${({ theme }) => theme.colors.white};
    `}
  `)}
`;
