import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
  display: inline-block;
  padding: 13px 25px;
  font-size: ${({ theme }) => theme.font.size.s};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 30px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.secondary};
  will-change: background-color, color;
  white-space: nowrap;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

  :hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.white};
  }

  :focus {
    /* outline: none;
    box-shadow: 0 0 8px ${({ theme }) => theme.colors.secondary}; */
  }

  ${({ secondary }) =>
    secondary &&
    css`
      color: ${({ theme }) => theme.colors.white};
    `}
`;

Button.propTypes = {
  secondary: PropTypes.bool,
};

export default Button;
