import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styles';

const Container = ({ id, children }) => {
  return <Styled.ContainerWrap id={id}>{children}</Styled.ContainerWrap>;
};

Container.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Container.defaultProps = {
  id: null,
};

export default Container;
