import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styles';

const SectionHeading = ({ reversed, accent, center, children }) => {
  return (
    <Styled.Heading reversed={reversed} accent={accent} center={center}>
      {children}
    </Styled.Heading>
  );
};

SectionHeading.propTypes = {
  accent: PropTypes.bool,
  reversed: PropTypes.bool,
  center: PropTypes.bool,
  children: PropTypes.number.isRequired,
};

SectionHeading.defaultProps = {
  accent: false,
  reversed: false,
  center: false,
};

export default SectionHeading;
