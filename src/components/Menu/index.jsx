import React, { useState } from 'react';

import { Header, Container } from './styles';

import Logo from './Logo';
import BtnMenuMobile from './BtnMenuMobile';
import Navigation from './Navigation';
import BtnLogout from './BtnLogout';

const Menu = () => {
  const [isMobileActive, setIsMobileActive] = useState(false);

  return (
    <Header>
      <Container>
        <Logo />
        <BtnMenuMobile active={isMobileActive} setActive={setIsMobileActive} />
        <Navigation activeOnMobile={isMobileActive} />
        <BtnLogout />
      </Container>
    </Header>
  );
};

export default Menu;
