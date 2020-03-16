import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import styled, { css, keyframes } from 'styled-components';
import PropTypes from 'prop-types';

const bounceCaptcha = keyframes`
  60% {
    transform: scale(.8);
  }
  100% {
    transform: scale(1);
  }
`;

const StyledWrapper = styled.span`
  display: inline-block;

  ${({ isError }) =>
    isError &&
    css`
      animation: ${bounceCaptcha} 0.3s ease-in;
    `}
`;

const StyledReCaptcha = styled(ReCAPTCHA)`
  &,
  > div {
    display: inline-block;
  }
`;

const ReCaptcha = React.forwardRef(({ isError, onChange }, ref) => {
  const handleOnChange = token => {
    onChange(token);
  };

  return (
    <StyledWrapper isError={isError}>
      <StyledReCaptcha
        ref={ref}
        size="compact"
        hl="en"
        sitekey={process.env.GATSBY_RECAPTCHA_SITE_KEY}
        onChange={handleOnChange}
      />
    </StyledWrapper>
  );
});

ReCaptcha.displayName = 'ReCaptcha';

ReCaptcha.propTypes = {
  isError: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

ReCaptcha.defaultProps = {
  isError: false,
};
export default ReCaptcha;
