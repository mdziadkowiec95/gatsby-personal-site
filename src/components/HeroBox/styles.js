import styled, { keyframes, css } from 'styled-components';
import { respondTo, line } from '../../styles/mixins';
import Button from '../Button/Button';

const typing = keyframes`
    0% { max-width: 0; }
    100% { max-width: 100%; }
`;

const blinkingPipe = keyframes` 
    0, 100% { border-color: transparent; }
    50% { border-color: #615FFA; }
`;

const buildUpLine = keyframes`
  0% { width: 0; }
  60% { width: 100%; }
  100% { width: 65px; }
`;

export const Wrapper = styled.div`
  position: relative;
  padding-top: 0px;

  ::before {
    ${({ theme }) => line(theme.colors.tertiary, '3px', 'horizontal', '65px')};

    top: 0;
    left: 4px;
    animation: ${buildUpLine} 0.7s ease-in-out 4.2s backwards;
  }
`;

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
  border-right: 2px solid transparent;
  font-size: ${({ theme }) => theme.font.size.l};
  font-size: calc(2.5rem + 1vw);

  ${respondTo.fullhd(css`
    font-size: ${({ theme }) => theme.font.size.xl};
  `)}
`;

export const HeadingName = styled(HeadingBase)`
  animation: ${typing} 1.7s steps(25, end) backwards 0.5s,
    ${blinkingPipe} 0.75s step-end 2 forwards 0s;
`;

export const HeadingRole = styled(HeadingBase)`
  padding-right: 3px;
  animation: ${typing} 2s steps(30, end) 2.5s backwards,
    ${blinkingPipe} 0.75s step-end infinite forwards 2.2s;
`;

export const PurpleAccent = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
`;

const bounceBtn = keyframes`
  20% {
    transform: scale(.85);
  }
  70% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

export const SkillsBtn = styled(Button)`
  animation: ${bounceBtn} 0.8s ease-in-out 4.5s;
`;
