import styled, { css, keyframes } from 'styled-components';
import Image from 'gatsby-image';
import { respondTo } from '../../styles/mixins';

const typing = keyframes`
    0% { max-width: 0 }
    100% { max-width: 100% }
`;

const blinkingPipe = keyframes` 
    0, 100% { border-color: transparent }
    50% { border-color: #fff; }
`;
export const Wrapper = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 20px;
  background-color: unset;

  ${respondTo.tablet(css`
    background-image: linear-gradient(
      252deg,
      rgb(255, 255, 255),
      rgb(255, 255, 255) 60%,
      ${({ theme }) => theme.colors.primary} 40%,
      ${({ theme }) => theme.colors.primary}
    );
  `)}

  ${respondTo.desktop(css`
    background-image: linear-gradient(
      292deg,
      rgb(255, 255, 255),
      rgb(255, 255, 255) 60%,
      ${({ theme }) => theme.colors.primary} 40%,
      ${({ theme }) => theme.colors.primary}
    );
  `)}
`;

export const PortraitImg = styled(Image)`
  display: none;
  max-width: 30vw;

  ${respondTo.desktop(css`
    display: block;
    position: absolute !important;
    width: 35%;
    max-width: 340px;
    bottom: 0;
    left: 9vw;
    filter: saturate(60%);
  `)}

  ${respondTo.widescreen(css``)}

  ${respondTo.fullhd(css`
    left: 14vw;
    max-width: 22vw;
  `)}
`;

export const HeroInner = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

  ${respondTo.tablet(css`
    position: absolute;
    top: 0;
    right: 0;
    width: 58%;
  `)}

  ${respondTo.desktop(css`
    width: 55%;
  `)}
`;

export const HeroBox = styled.div``;

export const HeadingWrap = styled.h1`
  font-size: ${({ theme }) => theme.font.size.xl};
  font-weight: ${({ theme }) => theme.font.weight.bold};

  ${respondTo.fullhd(css`
    font-size: ${({ theme }) => theme.font.size.xxl};
  `)}
`;

const HeadingBase = styled.span`
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid ${({ theme }) => theme.colors.primary};
`;

export const HeadingName = styled(HeadingBase)`
  animation: ${typing} 2.5s steps(35, end) backwards,
    ${blinkingPipe} 0.75s step-end forwards 1.1s;
`;
export const HeadingRole = styled(HeadingBase)`
  animation: ${typing} 3.5s steps(40, end) 2.5s backwards,
    ${blinkingPipe} 0.75s step-end forwards 1.5s;
`;
export const PurpleAccent = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
`;
