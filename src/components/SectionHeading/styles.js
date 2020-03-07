import styled, { css } from 'styled-components';

export const Heading = styled.h2`
  ${({ reversed, accent, center, theme }) =>
    accent &&
    css`
      line-height: 1.5;
      text-align: ${center ? 'center' : 'left'};
      color: ${reversed ? theme.colors.white : theme.colors.dark};

      > span {
        position: relative;
        display: inline-block;
        padding: 5px 10px 0 10px;
        margin-right: 30px;
        background-color: ${reversed
          ? theme.colors.white
          : theme.colors.primary};
        color: ${reversed ? theme.colors.primary : theme.colors.white};

        ::after {
          content: '';
          position: absolute;
          top: 0;
          right: -30px;
          width: 30px;
          height: 100%;
          border-left: 1px solid
            ${reversed ? theme.colors.primary : theme.colors.white};
          background-color: ${reversed
            ? theme.colors.white
            : theme.colors.primary};

          clip-path: polygon(0% 0%, 100% 50%, 100% 100%, 0 100%, 0 0);
        }
      }
    `}
`;
