import React, { useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledReCaptcha = styled(ReCAPTCHA)`
  &,
  > div {
    display: inline-block;
  }
`;

const ReCaptcha = ({ onChange }) => {
  const recaptchaRef = useRef(null);

  const handleOnChange = token => {
    onChange(token);
  };

  return (
    <StyledReCaptcha
      ref={recaptchaRef}
      size="compact"
      hl="en"
      sitekey={process.env.RECAPTCHA_SITE_KEY}
      onChange={handleOnChange}
    />
  );
};

ReCaptcha.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default ReCaptcha;
