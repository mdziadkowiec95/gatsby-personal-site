import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styles';

const Container = ({ children }) => {
  return <Styled.Wrapper>{children}</Styled.Wrapper>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
