import styled, { css } from 'styled-components';
import { respondTo } from '../../styles/mixins';

export const Wrapper = styled.div`
  margin-top: 50px;
  border-radius: 15px;

  ${respondTo.tablet(css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  `)}

  ${respondTo.desktop(css`
    padding: 30px 15px;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 3px 20px rgba(27, 4, 56, 0.2);
  `)}
`;

export const SkillItem = styled.div`
  margin: 15px;

  ${respondTo.tablet(css`
    flex: calc(50% - 2 * 15px) 1 1;
    
    // IE11 fallback
    -ms-flex: 25% 0 0;
  `)}

  ${respondTo.desktop(css`
    flex: calc(33% - 2 * 15px) 1 1;
  `)}

  ${respondTo.fullhd(css`
    flex: calc(25% - 2 * 15px) 0 0;
  `)}
`;
