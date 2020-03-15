import styled, { css } from 'styled-components';
import { darken } from 'polished';
import IconCheckSVG from '../../assets/images/icon-check.svg';

export const Side = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 15px;
  border-radius: 15px;
  backface-visibility: hidden;
  background: ${({ theme }) => theme.colors.white};
  border: none;
  will-change: transform, box-shadow;
  transition: all 0.7s;

  :focus {
    outline: none;
    box-shadow: 0 0 15px rgba(36, 36, 36, 0.2);
  }
`;

export const Front = styled(Side)`
  ${({ isRotated }) =>
    isRotated &&
    css`
      transform: rotateY(-180deg);
    `}
`;

export const Back = styled(Side)`
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: rotateY(180deg);

  ${({ isRotated }) =>
    isRotated &&
    css`
      transform: rotateY(0);
    `}
`;

export const TechIcon = styled.img`
  max-width: 80px;
  margin-bottom: 20px;
`;

export const Name = styled.p`
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.colors.dark};
`;

export const NameBack = styled(Name)`
  margin-top: 30px;
`;

export const CheckIcon = styled(IconCheckSVG)`
  width: 20px;
  margin-right: 10px;
  fill: ${({ theme }) => theme.colors.secondary};
`;
export const List = styled.ul`
  margin-top: 5px;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
`;

export const Wrapper = styled.div`
  perspective: 1500px;
  position: relative;
  background-color: transparent;
  width: 100%;
  min-height: ${({ minCardHeight }) =>
    minCardHeight ? `${minCardHeight}px` : '250px'};
  max-width: 280px;
  margin: 0 auto;
  backface-visibility: hidden;
  cursor: pointer;

  :hover {
    ${Side} {
      box-shadow: 0 0 15px rgba(36, 36, 36, 0.2);
    }
  }
`;

const getProgressColor = (theme, progress) => {
  const darkenValue = progress / 100 / 3;
  return `${darken(darkenValue, theme.colors.secondary)}`;
};

export const Progress = styled.div`
  position: relative;
  height: 10px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.primary};

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${({ progress }) => `${progress}%`};
    border-radius: inherit;
    background-color: ${({ theme }) => theme.colors.primary};
    background-image: ${({ theme, progress }) =>
      `linear-gradient(to right, ${theme.colors.primary}, ${getProgressColor(
        theme,
        progress
      )})`};
  }
`;
