import styled, { css } from 'styled-components';
import { respondTo } from '../../styles/mixins';

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 100%;
  padding: 0 15px;

  ${respondTo.tablet(css`
    max-width: 960px;
  `)}

  ${respondTo.fullhd(css`
    max-width: 1240px;
  `)}
`;
