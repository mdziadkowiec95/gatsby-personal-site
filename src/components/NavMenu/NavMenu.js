import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styles';
import SiteLogo from '../SiteLogo/SiteLogo';

const sections = [
  {
    name: 'About',
    id: 'about',
  },
  {
    name: 'Skills',
    id: 'skills',
  },
  {
    name: 'Projects',
    id: 'projects',
  },
  {
    name: 'Contact',
    id: 'contact',
  },
];

const NavMenu = ({ isOpen, isInitialized, setIsOpen }) => {
  return (
    <Styled.NavWrap isOpen={isOpen} isInitialized={isInitialized}>
      <Styled.NavLogo isOpen={isOpen}>
        <SiteLogo />
      </Styled.NavLogo>
      <Styled.NavList isOpen={isOpen} items={sections.map(s => s.id)} currentClassName="isCurrent">
        {sections.map(section => (
          <Styled.NavItem key={`section-${section.name}`}>
            <Styled.NavLink href={`#${section.id}`} onClick={() => setIsOpen(false)}>
              {section.name}
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
