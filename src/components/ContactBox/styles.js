import styled, { css } from 'styled-components';
import { respondTo } from '../../styles/mixins';
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
`;

export const ContentBox = styled.div`
  ${respondTo.desktop(css`
    display: flex;
  `)}
`;

export const Cta = styled(Button)`
  align-self: center;
`;
