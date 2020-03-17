import styled from 'styled-components';

export const Wrapper = styled.footer`
  padding: 150px 0 20px 0;
  background-color: ${({ theme }) => theme.colors.tertiary};
  text-align: center;
`;

export const SocialWrap = styled.div`
  margin-bottom: 10px;
`;

export const SocialLink = styled.a`
  display: inline-block;
  margin: 0 5px;

  .socialIcon {
    width: 35px;
    fill: ${({ theme }) => theme.colors.white};
   
    transition: fill .3s ease-in-out;

    &:hover {
      fill: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

export const Copyright = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.font.size.xs};
`;

