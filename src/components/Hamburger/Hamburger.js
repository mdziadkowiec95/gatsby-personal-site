import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styles';

const Hamburger = ({ onClick, isOpen }) => {
  return (
    <Styled.BurgerButton onClick={onClick} isOpen={isOpen} href="#">
      <Styled.BurgerLines />
    </Styled.BurgerButton>
  );
};

Hamburger.propTypes = {
  isOpen: PropTypes.bool,
  onClick: PropTypes.func,
};

Hamburger.defaultProps = {
  isOpen: false,
  onClick: null,
};

export default Hamburger;
