import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styles';

const SectionHeading = ({ accent, children }) => {
  return <Styled.Heading accent={accent}>{children}</Styled.Heading>;
};

SectionHeading.propTypes = {
  accent: PropTypes.bool,
  children: PropTypes.number.isRequired,
};

SectionHeading.defaultProps = {
  accent: false,
};

export default SectionHeading;
