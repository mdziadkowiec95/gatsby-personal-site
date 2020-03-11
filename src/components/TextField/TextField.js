import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styles';

const TextField = ({
  value,
  name,
  onChange,
  onBlur,
  placeholder,
  isTextarea,
  error,
  touched,
}) => (
  <Styled.Wrapper>
    <Styled.Field
      type="text"
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
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  isTextarea: PropTypes.bool,
  error: PropTypes.string,
  touched: PropTypes.string,
};

TextField.defaultProps = {
  value: '',
  placeholder: 'Enter some text',
  isTextarea: false,
  error: null,
  touched: false,
};

export default TextField;
