import styled, { css } from 'styled-components';
import { respondTo } from '../../styles/mixins';

export const BurgerButton = styled.button`
  position: fixed;
  top: 0;
  right: 0;
  width: 77px;
  height: 60px;
  background-color: transparent;
  border: none;

  ${respondTo.desktop(css`
    display: none;
  `)};
`;

export const BurgerBackground = styled.span`
  display: block;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary};

  ::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 0;
    border-bottom: 25px solid #fff;
    border-right: 30px solid transparent;
  }
`;

export const BurgerLines = styled.span`
  position: absolute;
  display: block;
  top: 22px;
  right: 8px;
  width: 40px;
  height: 3px;
  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;

  ::before,
  ::after {
    content: '';

    position: absolute;

    right: 0;

    width: 100%;
    height: 3px;

    background-color: ${({ theme }) => theme.colors.white};

    transition: top 0.2s ease, transform 0.2s ease;
  }

  ::before {
    top: -10px;
  }

  ::after {
    bottom: -10px;
  }
`;
