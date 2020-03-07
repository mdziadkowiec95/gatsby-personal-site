import styled from 'styled-components';

export const Wrapper = styled.section`
  position: relative;
  padding: 100px 0;

  ::before {
    content: '';
    position: absolute;
    top: 0%;
    left: 0;
    width: 100%;
    height: 500px;
    z-index: -1;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;
