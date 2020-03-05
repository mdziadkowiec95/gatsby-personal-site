import styled, { keyframes, css } from 'styled-components';
import { Link } from 'gatsby';
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
      margin: 40px 50px 0 0;
    `)}
`;

export const NavList = styled.ul`
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
`;

export const NavLink = styled(Link)`
  padding: 5px 10px;
  font-size: ${({ theme }) => theme.font.size.l};
  color: ${({ theme }) => theme.colors.white};

  ${respondTo.desktop(css`
    font-size: ${({ theme }) => theme.font.size.s};
    color: ${({ theme }) => theme.colors.dark100};
  `)}

  &.active {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: ${({ theme }) => theme.font.weight.bold};
  }
`;
