import styled, { css } from 'styled-components';
import Image from 'gatsby-image';
import { respondTo } from '../../styles/mixins';

export const Wrapper = styled.section`
  padding: 100px 0;
`;

export const Inner = styled.div`
  margin-top: 35px;

  ${respondTo.desktop(css`
    display: flex;
    justify-content: center;
    align-items: center;
  `)}
`;

export const Description = styled.p`
  flex: 1;
  margin-right: 30px;
`;

export const AboutImg = styled(Image)`
  margin: 0 auto;
  flex: 1;
  max-width: 590px;
`;
