import React, { useState } from 'react';
import * as Styled from './styles';
import Hamburger from '../Hamburger/Hamburger';
import NavMenu from '../NavMenu/NavMenu';
import useScrollDirection from '../../hooks/useScrollDirection';



const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  const [scrollDirection, pageYOffset] = useScrollDirection('up');

  const handleNavOpen = e => {
    e.preventDefault();
    setIsOpen(!isOpen);
    if (!isInitialized) setIsInitialized(true);
  };

  const hasBackgroundCondition  = pageYOffset > 200;
  return (
    <Styled.Wrapper isFixed={scrollDirection === 'up'} hasBackground={hasBackgroundCondition}>
      {console.log(scrollDirection)}
        <Hamburger onClick={handleNavOpen} />
        <NavMenu
          isOpen={isOpen}
          isInitialized={isInitialized}
          setIsOpen={setIsOpen}
          hasBackground={hasBackgroundCondition}
        />
    </Styled.Wrapper>
  );
};

export default Header;
