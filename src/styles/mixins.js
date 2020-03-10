import { css } from 'styled-components';
import { breakpoints } from './variables';

export const respondTo = Object.keys(breakpoints).reduce(
  (accumulator, label) => {
    accumulator[label] = (...args) => css`
      @media (min-width: ${breakpoints[label]}) {
        ${args};
      }
    `;
    return accumulator;
  },
  {}
);

export const line = (
  color = '#000',
  size = '3px',
  orientation = 'vertical',
  length = '100%'
) => css`
  content: '';
  position: absolute;
  background-color: ${color};

  ${orientation === 'horizontal' &&
    css`
      height: ${size};
      width: ${length};
    `}

  ${orientation === 'vertical' &&
    css`
      width: ${size};
      height: ${length};
    `}
`;
