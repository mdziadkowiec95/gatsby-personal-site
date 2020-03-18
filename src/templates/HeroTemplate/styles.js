import styled, { css } from 'styled-components';
import Image from 'gatsby-image';
import { respondTo } from '../../styles/mixins';
import { breakpoints } from '../../styles/variables';

export const Wrapper = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: unset;
  z-index: 0;

  ${respondTo.tablet(css`
    background-image: linear-gradient(
      252deg,
      rgb(255, 255, 255),
      rgb(255, 255, 255) 60%,
      ${({ theme }) => theme.colors.secondary} 40%,
      ${({ theme }) => theme.colors.primary}
    );
  `)}

  ${respondTo.desktop(css`
    background-image: linear-gradient(
      292deg,
      rgb(255, 255, 255),
      rgb(255, 255, 255) 60%,
      ${({ theme }) => theme.colors.secondary} 40%,
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
    left: 15vw;
    bottom: 0;
    z-index: -1;
    width: 22%;
    max-width: 340px;
    filter: saturate(80%);
  `)}

    @media (min-width: ${breakpoints.desktop}) and (min-height: 700px) {
      left: 9vw;
      width: 35%;
    }

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

export const MouseIcon = styled.a`
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  fill: ${({ theme }) => theme.colors.primary};
  width: 70px;

  ${respondTo.tablet(css`
    transform: none;
    left: auto;
    right: 10%;
  `)}

  ${respondTo.desktop(css`
    transform: translateX(-50%);
    left: 50%;
  `)}
`;
