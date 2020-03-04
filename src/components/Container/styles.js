import styled, { css } from 'styled-components';
import { respondTo } from '../../styles/mixins';

export const ContainerWrap = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 100%;
  padding: 0 15px;

  ${respondTo.tablet(css`
    max-width: 960px;
  `)}

  ${respondTo.fullhd(css`
    max-width: 1240px;
  `)}
`;
