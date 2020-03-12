import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styles';
import SiteLogo from '../SiteLogo/SiteLogo';

const routes = [
  {
    name: 'About',
    href: '#about',
  },
  {
    name: 'Skills',
    href: '#skills',
  },
  {
    name: 'Projects',
    href: '#projects',
  },
  {
    name: 'Contact',
    href: '#contact',
  },
];

const NavMenu = ({ isOpen, isInitialized, setIsOpen }) => {
  return (
    <Styled.NavWrap isOpen={isOpen} isInitialized={isInitialized}>
      <Styled.NavLogo isOpen={isOpen}>
        <SiteLogo />
      </Styled.NavLogo>
      <Styled.NavList isOpen={isOpen}>
        {routes.map(route => (
          <Styled.NavItem key={`route-${route.name}`}>
            <Styled.NavLink href={route.href} onClick={() => setIsOpen(false)}>
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
