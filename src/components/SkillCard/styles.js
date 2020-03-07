import styled, { css } from 'styled-components';

export const Side = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  transition: all 0.7s;
  backface-visibility: hidden;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 8px rgba(36, 36, 36, 0.2);
  outline: none;
  border: none;
`;

export const Front = styled(Side)`
  ${({ isRotated }) =>
    isRotated &&
    css`
      transform: rotateY(-180deg);
    `}
`;

export const Back = styled(Side)`
  /* background-color: blue; */
  transform: rotateY(180deg);

  ${({ isRotated }) =>
    isRotated &&
    css`
      transform: rotateY(0);
    `}
`;

export const Wrapper = styled.div`
  perspective: 1500px;
  position: relative;
  background-color: transparent;
  width: 100%;
  min-height: ${({ minCardHeight }) =>
    minCardHeight ? `${minCardHeight}px` : '280px'};
  backface-visibility: hidden;
  cursor: pointer;
`;
