import styled, { css } from 'styled-components';

export const ButtonWrap = styled.button`
  display: inline-block;
  padding: 15px 25px;
  font-size: ${({ theme }) => theme.font.size.m};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 30px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.secondary};
  will-change: background-color, color;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

  :hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.white};
  }

  ${({ secondary }) =>
    secondary &&
    css`
      color: ${({ theme }) => theme.colors.white};
    `}
`;
