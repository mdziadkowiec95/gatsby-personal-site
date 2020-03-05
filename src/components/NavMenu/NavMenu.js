import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styles';

const routes = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
];

const NavMenu = ({ isOpen, isInitialized, setIsOpen }) => {
  return (
    <Styled.NavWrap isOpen={isOpen} isInitialized={isInitialized}>
      <Styled.NavList isOpen={isOpen}>
        {routes.map(route => (
          <Styled.NavItem key={`route-${route.name}`}>
            <Styled.NavLink
              to={route.href}
              activeClassName="active"
              onClick={() => setIsOpen(false)}
            >
              {route.name}
            </Styled.NavLink>
          </Styled.NavItem>
        ))}
      </Styled.NavList>
    </Styled.NavWrap>
  );
};

NavMenu.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func.isRequired,
  isInitialized: PropTypes.bool,
};

NavMenu.defaultProps = {
  isOpen: false,
  isInitialized: false,
};

export default NavMenu;
