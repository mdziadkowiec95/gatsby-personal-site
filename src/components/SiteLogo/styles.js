import styled, { css } from 'styled-components';
import Image from 'gatsby-image';
import { Link } from 'gatsby';

export const LogoLink = styled(Link)`
  display: block;
`;

export const LogoImg = styled(Image)`
  transition: transform 0.2s ease-in-out;

  :hover {
    transform: rotateZ(2deg) scale(0.85);
  }

  ${({ theme, withBg }) =>
    withBg &&
    css`
      background-color: ${theme.colors.primary};
    `}
`;
