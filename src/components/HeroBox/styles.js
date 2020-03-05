import styled, { keyframes, css } from 'styled-components';
import { respondTo } from '../../styles/mixins';

const typing = keyframes`
    0% { max-width: 0 }
    100% { max-width: 100% }
`;

const blinkingPipe = keyframes` 
    0, 100% { border-color: transparent }
    50% { border-color: #fff; }
`;

export const Wrapper = styled.div``;

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
