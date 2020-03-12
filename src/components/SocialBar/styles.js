import styled from 'styled-components';
import { rgba } from 'polished';

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  background-color: transparent;
  z-index: 10;
  border-radius: 10px 0 0 10px;
  overflow: hidden;
  transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  :hover {
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0 0 5px ${({ theme }) => rgba(theme.colors.dark, 0.2)};
  }
`;

export const Link = styled.a`
  display: block;
  padding: 12px;
  opacity: 0.7;
  width: 72px;
  max-width: 52px;
  transition: max-width 0.3s ease-in-out, background-color 0.3s ease-in-out,
    opacity 0.25s ease-in-out;

  ${/* sc-selector */ Wrapper}:hover & {
    max-width: 72px;
  }

  .socialIcon {
    width: 30px;
    height: 30px;
    transition: fill 0.3s ease-in-out;
  }

  :hover {
    background-color: ${({ theme }) => theme.colors.grey};
    opacity: 1;

    .socialIcon {
      fill: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

export const Icon = styled.div`
  width: 1.2rem;
  height: 1.2rem;
  fill: #fff;
  background-image: url('../../assets/images/icons/github-rounded.svg');
`;
