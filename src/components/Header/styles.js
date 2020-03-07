import styled, { css } from 'styled-components';
import { respondTo } from '../../styles/mixins';

export const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;

  ${respondTo.desktop(css`
    position: absolute;
  `)}
`;
