import styled, { keyframes, css } from 'styled-components';
import { rgba } from 'polished';
import Scrollspy from 'react-scrollspy'
import { respondTo } from '../../styles/mixins';

const showNavAniamtion = keyframes`
    50% {
        width: 3000px;
        height: 3000px;
    }
    100% {
        width: 100%;
        height: 100%;
        border-radius: 0;
    }
`;
const hideNavAnimation = keyframes`
    0% {
        border-bottom-left-radius: 1500px;
        width: 3000px;
        height: 3000px;
    }

    55% {
        width: 45px;
        height: 40px;
    }
`;

export const NavWrap = styled.nav`
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 0;
  width: 60px;
  height: 54px;
  border-bottom-left-radius: 20px;
  background-color: ${({ theme }) => theme.colors.primary};
  opacity: 0.95;
  box-shadow: 0 1px 3px #333;
  transition: border-radius 0.2s;

  ${({ isOpen }) =>
    isOpen
      ? css`
          animation: ${showNavAniamtion} 1.3s ease both;
        `
      : css``}

  ${({ isOpen, isInitialized }) =>
    isInitialized &&
    !isOpen &&
    css`
      animation: ${hideNavAnimation} 0.7s ease;
    `}

    ${respondTo.desktop(css`
      position: static;
      background-color: transparent;
      box-shadow: none;
      width: auto;
      height: auto;
      opacity: 1;
      border-radius: 0;
      padding: 30px 40px 30px 0;
      transition: box-shadow .3s ease-in-out;
      
      ${({ hasBackground }) => hasBackground &&  css`
        box-shadow: 0 2px 5px ${({ theme }) => rgba(theme.colors.dark, 0.2)};
      `}
    `)}
`;

export const NavLogo = styled.div`
  position: absolute;
  width: 30px;
  right: 50vw;
  top: 20px;
  padding: 5px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.primary};
  z-index: 10;

  ${({ isOpen }) =>
    isOpen
      ? css`
          opacity: 1;
          visibility: visible;
        `
      : css`
          opacity: 0;
          visibility: hidden;
        `}

  ${respondTo.desktop(css`
    top: 16px;
    left: 30px;
    width: 49px;
    opacity: 1;
    visibility: visible;
  `)}
`;

export const NavList = styled(Scrollspy)`
  position: fixed;
  top: 100px;
  right: 0;
  margin-right: 20px;
  will-change: transform;
  transform: translateX(300px);
  transition: transform 0.3s ease-in-out;

  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: translateX(0);
    `}

  ${respondTo.desktop(css`
    transform: none;
    position: static;
    display: flex;
    justify-content: flex-end;
  `)}
`;

export const NavItem = styled.li`
  margin-bottom: 10px;

  ${respondTo.desktop(css`
    margin-bottom: 0;
  `)}
`;

export const NavLink = styled.a`
  position: relative;
  display: inline-block;
  width: 100%;
  padding: 5px 10px;
  font-size: ${({ theme }) => theme.font.size.l};
  color: ${({ theme }) => theme.colors.white};

  ::before {
    content: "";
    display: block;
    position: absolute;
    width: 0;
    height: 0;
    margin-right: -6px;
    top: 12px;
    left: -20px;
    opacity: 0;
    transition: transform .3s ease-in-out, opacity .3s ease-in-out;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-left: 10px solid ${({ theme }) => theme.colors.white};
  
    ${respondTo.desktop(css`
      top: 7px;
      left: -7px;
      border-top: 7px solid transparent;
      border-bottom: 7px solid transparent;
      border-left: 7px solid ${({ theme }) => theme.colors.secondary};
    `)}
  }

  :hover,
  ${/* sc-selector */ NavItem}.isCurrent & {
    opacity: 1;

    &::before {
      transform: translateX(5px);
      opacity: 1;
    }
  }

  ${/* sc-selector */ NavItem}.isCurrent & {
    color: ${({ theme }) => theme.colors.secondary};
    background-color: ${({ theme }) => theme.colors.white};

    ${respondTo.desktop(css`
      background-color: transparent;
    `)}
  }
  

  ${respondTo.desktop(css`
    font-size: ${({ theme }) => theme.font.size.s};
    color: ${({ theme }) => theme.colors.dark100};
  `)}

  &.active {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: ${({ theme }) => theme.font.weight.bold};
  }
`;
