import styled, { css } from 'styled-components';
import { respondTo } from '../../styles/mixins';
import Button from '../Button/Button';

export const ActionBox = styled.div`
  ${respondTo.tablet(css`
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
  `)}
`;

export const SubmitBtn = styled(Button)`
  display: block;
  margin: 15px auto 0 auto;

  ${respondTo.tablet(css`
    align-self: center;
    margin: 0 auto 0 0;
  `)}
`;

export const CaptchaErr = styled.p`
  margin-top: 10px;
  text-align: center;
  color: ${({ theme }) => theme.colors.danger};
  font-size: ${({ theme }) => theme.font.size.xs};
`;
