import React, { useState } from 'react';
import * as Styled from './styles';
import Hamburger from '../Hamburger/Hamburger';
import NavMenu from '../NavMenu/NavMenu';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  const handleNavOpen = () => {
    setIsOpen(!isOpen);
    if (!isInitialized) setIsInitialized(true);
  };

  return (
    <Styled.Wrapper>
      <div>
        <Hamburger onClick={handleNavOpen} />
        <NavMenu
          isOpen={isOpen}
          isInitialized={isInitialized}
          setIsOpen={setIsOpen}
        />
      </div>
    </Styled.Wrapper>
  );
};

export default Header;
