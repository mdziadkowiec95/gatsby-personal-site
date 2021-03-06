import styled, { css } from 'styled-components';
import { darken, rgba } from 'polished';
import { respondTo } from '../../styles/mixins';
import GithubIconSVG from '../../assets/images/icons/github-rounded.svg';
import Button from '../Button/Button';

export const Label = styled.div`
  position: absolute;
  z-index: 10;
  top: 2px;
  right: 5px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 0.8rem;
  font-weight: 700;
  opacity: 0;
  transition: opacity 0.3s ease;
  display: none;
`;

export const Body = styled.div`
  /* @include hardware(); */
  backface-visibility: hidden;
  perspective: 1000;
  position: relative;
  z-index: 20;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-align: center;
  padding: 40px 10px 30px 10px;
  /* margin-bottom: 20px; */
  width: 100%;
  height: 100%;
  border-radius: 15px;
  color: ${({ theme }) => theme.colors.white};
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.3s ease, transform 0.4s ease;
  overflow: hidden;
`;

export const Name = styled.h4`
  font-size: ${({ theme }) => theme.font.size.m};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.colors.white};
`;

export const Description = styled.p`
  margin: 10px 0 30px 0;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.font.size.xs};

  ${respondTo.desktop(css`
    font-size: ${({ theme }) => theme.font.size.s};
  `)}
`;

export const VisitButton = styled(Button)`
  align-self: center;
`;

export const GithubLink = styled.a`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
`;

export const GithubIcon = styled(GithubIconSVG)`
  fill: ${({ theme }) => theme.colors.white};
  transition: fill 0.3s ease-in-out;

  ${/* sc-selector */ GithubLink}:hover & {
    fill: ${({ theme }) => theme.colors.secondary};
  }
`;

export const ScreenImg = styled.div`
  position: relative;
  z-index: -1;
`;

const cardOverlayNoHover = theme =>
  rgba(darken(0.1, theme.colors.primary), 0.45);

export const Wrapper = styled.div`
  perspective: 1000;
  display: flex;
  align-items: flex-end;
  position: relative;
  margin: 20px auto;
  width: 330px;
  height: 210px;
  border-radius: 15px;
  overflow: hidden;
  cursor: default;
  box-shadow: 0 0 5px ${({ theme }) => rgba(theme.colors.dark, 0.2)};
  transition: transform 0.3s ease-out, box-shadow 0.3s ease-in-out;

  ${respondTo.tablet(css`
    margin: 20px 5px;
    width: 350px;
    height: 220px;
  `)};

  ${respondTo.desktop(css`
    margin: 20px 10px;
    width: 370px;
    height: 235px;
  `)};

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) =>
      rgba(darken(0.2, theme.colors.tertiary), 0.8)};
    border-radius: 15px;
    opacity: 0;
    will-change: opacity;
    transition: opacity 0.3s ease;
  }

  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: ${({ theme }) => `linear-gradient(
            ${`${cardOverlayNoHover(theme)}, 
            ${cardOverlayNoHover(theme)}`}
          )`};
  }

  ${/* sc-selector */ ScreenImg} {
    /* @include hardware(); */

    backface-visibility: hidden;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: no-repeat center / cover;
    border-radius: 15px;
    transition: transform 0.3s ease;
  }

  :hover {
    box-shadow: 0 2px 10px ${({ theme }) => rgba(theme.colors.dark, 0.4)};

    ::before,
    ${Body} {
      opacity: 1;
    }

    ${/* sc-selector */ ScreenImg} {
      transform: scale(1.1);
    }

    ${Body} {
      transform: translateY(0);
    }
  }
`;
