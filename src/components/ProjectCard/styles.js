import styled, { css } from 'styled-components';
import { darken, rgba } from 'polished';
import { respondTo } from '../../styles/mixins';

export const Label = styled.div`
  position: absolute;
  z-index: 10;
  top: 2px;
  right: 5px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 0.8rem;
  font-weight: 700;
  opacity: 0;
  transition: opacity 0.3s ease;
  display: none;
`;

export const Body = styled.div`
  /* @include hardware(); */
  backface-visibility: hidden;
  perspective: 1000;
  position: relative;
  z-index: 20;
  text-align: center;
  padding: 10px;
  margin-bottom: 20px;
  width: 100%;
  border-radius: 15px;
  color: ${({ theme }) => theme.colors.white};
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.3s ease, transform 0.4s ease;
  overflow: hidden;
`;

export const Name = styled.h4`
  font-size: ${({ theme }) => theme.font.size.m};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.colors.white};
`;

export const Description = styled.p`
  margin: 10px 0 30px 0;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.font.size.s};
`;

export const Wrapper = styled.div`
  perspective: 1000;
  display: flex;
  align-items: flex-end;
  position: relative;
  margin: 20px auto;
  width: 290px;
  height: 210px;
  border-radius: 15px;
  overflow: hidden;
  cursor: default;
  box-shadow: 0 0 5px ${({ theme }) => rgba(theme.colors.dark, 0.2)};
  transition: transform 0.3s ease-out, box-shadow 0.3s ease-in-out;

  ${respondTo.tablet(css`
    height: 250px;
    width: 400px;
  `)};

  ${respondTo.tablet(css`
    width: 400px;
    height: 250px;
  `)};

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) =>
      rgba(darken(0.2, theme.colors.tertiary), 0.75)};
    border-radius: 15px;
    opacity: 0;
    will-change: opacity;
    transition: opacity 0.3s ease;
  }

  ::after {
    /* @include hardware(); */

    backface-visibility: hidden;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: no-repeat center / cover;
    border-radius: 15px;
    background-image: ${({ image }) => image && `url(${image.fluid.src})`};
    transition: transform 0.3s ease;
  }

  :hover {
    box-shadow: 0 2px 10px ${({ theme }) => rgba(theme.colors.dark, 0.4)};

    ::before,
    ${Body} {
      opacity: 1;
    }

    ::after {
      transform: scale(1.1);
    }

    ${Body} {
      transform: translateY(0);
    }
  }
`;
