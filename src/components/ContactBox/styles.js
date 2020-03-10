import styled, { css } from 'styled-components';
import { respondTo, line } from '../../styles/mixins';
import Button from '../Button/Button';

export const Wrapper = styled.div`
  position: relative;
  z-index: 10;
  padding: 40px;
  margin: 0 auto -100px auto;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  box-shadow: 0px 3px 20px rgba(27, 4, 56, 0.2);
  max-width: 750px;
  text-align: center;

  ::before {
    ${({ theme }) => line(theme.colors.tertiary, '3px', 'horizontal', '35%')};

    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  ${respondTo.desktop(css`
    text-align: left;
  `)}
`;

export const ContentBox = styled.div`
  ${respondTo.desktop(css`
    display: flex;
  `)}
`;

export const Description = styled.p`
  margin: 10px 0 20px 0;
`;

export const Cta = styled(Button)`
  ${respondTo.desktop(css`
    align-self: center;
    margin-left: 25px;
  `)}
`;
