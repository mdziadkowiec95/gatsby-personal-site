import styled, { css } from 'styled-components';
import { respondTo } from '../../styles/mixins';

export const Wrapper = styled.section`
  position: relative;
  padding: 100px 0;

  ::before {
    content: '';
    position: absolute;
    top: 0%;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: ${({ theme }) => theme.colors.primary};

    ${respondTo.desktop(css`
      height: 500px;
    `)}
  }
`;
