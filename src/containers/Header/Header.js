import React from 'react';
import Navbar from 'components/Navbar/Navbar';
import Logo from 'components/Logo/Logo';
import Icon from 'components/Icon/Icon';
import { Layout } from 'pages';

const Header = () => {
  return (
    <Layout>
      <Layout.FlexContainer flex={1}>
        <Logo maxWidth={237} />
      </Layout.FlexContainer>
      <Layout.FlexContainer tag="nav" flex={2}>
        <Navbar />
      </Layout.FlexContainer>
      <Layout.FlexContainer flex={1}>
        <Icon type="instagram" color="#fff" width="30px" />
        <Icon type="facebook" color="#fff" width="30px" />
      </Layout.FlexContainer>
    </Layout>
  );
};

export default Header;
