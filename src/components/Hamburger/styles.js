import styled, { css } from 'styled-components';
import { respondTo } from '../../styles/mixins';

export const BurgerButton = styled.a`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 2000;
  width: 60px;
  height: 54px;
  border: none;
  background-color: transparent;

  :hover {
    + * {
      border-bottom-left-radius: 40px;
    }
  }

  ${respondTo.desktop(css`
    display: none;
  `)}
`;

export const BurgerLines = styled.span`
  position: absolute;
  display: block;
  top: 22px;
  right: 8px;
  width: 40px;
  height: 3px;
  background-color: ${({ theme, primary }) =>
    primary ? theme.colors.primary : theme.colors.white};
  cursor: pointer;

  ::before,
  ::after {
    content: '';

    position: absolute;

    right: 0;

    width: 100%;
    height: 3px;

    background-color: ${({ theme, primary }) =>
      primary ? theme.colors.primary : theme.colors.white};

    transition: top 0.2s ease, transform 0.2s ease;
  }

  ::before {
    top: -10px;
  }

  ::after {
    bottom: -10px;
  }
`;
