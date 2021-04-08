import React from 'react';
import Navbar from '@components/Navbar/Navbar';
import Logo from '@components/Logo/Logo';
import HeaderLayout from 'pages/Layout/HeaderLayout/HeaderLayout';
import Icon from 'components/Icon/Icon';

function Header() {
  return (
    <HeaderLayout>
      <HeaderLayout.FlexContainer flex={1}>
        <Logo maxWidth={237} />
      </HeaderLayout.FlexContainer>
      <HeaderLayout.FlexContainer tag="nav" flex={2}>
        <Navbar />
      </HeaderLayout.FlexContainer>
      <HeaderLayout.FlexContainer flex={1}>
        <Icon type="instagram" color="#fff" width="30px" />
        <Icon type="facebook" color="#fff" width="30px" />
      </HeaderLayout.FlexContainer>
    </HeaderLayout>
  );
}

export default Header;
