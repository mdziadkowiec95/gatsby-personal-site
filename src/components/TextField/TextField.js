import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styles';

const TextField = ({
  value,
  name,
  type,
  onChange,
  onBlur,
  placeholder,
  isTextarea,
  error,
  touched,
}) => (
  <Styled.Wrapper>
    <Styled.Field
      type={type}
      name={name}
      value={value}
      placeholder=" "
      onChange={onChange}
      onBlur={onBlur}
      as={isTextarea ? 'textarea' : 'input'}
    />
    <Styled.Label>{placeholder}</Styled.Label>
    <Styled.Bar isError={error && touched} isValid={!error && touched} />
    {error && touched && <Styled.Error>{error}</Styled.Error>}
  </Styled.Wrapper>
);

TextField.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'email']),
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  isTextarea: PropTypes.bool,
  error: PropTypes.string,
  touched: PropTypes.bool,
};

TextField.defaultProps = {
  value: '',
  placeholder: 'Enter some text',
  type: 'text',
  isTextarea: false,
  error: null,
  touched: false,
};

export default TextField;
