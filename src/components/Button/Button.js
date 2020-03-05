import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styles';

const Button = ({ secondary, children }) => {
  return (
    <Styled.ButtonWrap secondary={secondary}>{children}</Styled.ButtonWrap>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
};

Button.propTypes = {
  secondary: PropTypes.bool,
};

Button.defaultProps = {
  secondary: false,
};

export default Button;
