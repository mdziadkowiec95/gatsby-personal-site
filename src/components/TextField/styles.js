import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 10px 0 15px 0;
  padding-bottom: 20px;
`;

export const Field = styled.input`
  color: ${({ theme }) => theme.colors.dark};
  font-size: 16px;
  border: none;
  line-height: 22px;
  width: 100%;
  background: none;
  padding-bottom: 8px;

  :focus {
    outline: none;
  }

  ${({ type }) =>
    type === 'textarea' &&
    css`
      resize: none;
      min-height: 150px;
    `}
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.dark};
  position: absolute;
  top: 3px;
  left: 0;
  transition: 0.2s ease-out all;
  pointer-events: none;
  font-size: 16px;
  cursor: text;

  ${/* sc-selector */ Field}:focus + & {
    top: -22px;
    font-size: 13px;
  }

  ${/* sc-selector */ Field}:not(:placeholder-shown) + & {
    top: -22px;
    font-size: 13px;
    cursor: none;
  }
`;

export const Bar = styled.div`
  width: 100%;
  height: 2px;
  background: ${({ theme, isError, isValid }) =>
    (isError && theme.colors.danger) ||
    (isValid && theme.colors.success) ||
    theme.colors.primary};
  transition: 0.1s all;

  ${/* sc-selector */ Field}:focus ~ & {
    background: ${({ theme }) => theme.colors.tertiary};
  }
`;

export const Error = styled.p`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  font-size: ${({ theme }) => theme.font.size.xs};
`;
