import styled, { css } from 'styled-components';

export const Heading = styled.h2`
  ${({ accent }) =>
    accent &&
    css`
      line-height: 1.5;

      > span {
        display: inline-block;
        padding: 10px 30px 0 10px;
        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.white};
        clip-path: polygon(5em 0%, 100% 50%, 100% 100%, 0 100%, 0 0);
      }
    `}
`;
