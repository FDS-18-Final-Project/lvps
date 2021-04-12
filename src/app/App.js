import React, { useEffect } from 'react';
import Routes from '../routes';
import { BrowserRouter } from 'react-router-dom';
import Footer from 'containers/Footer/Footer';
import Header from 'containers/Header/Header';
import OurBestServices from '../containers/OurBestServices/OurBestServices';
import { calcRem } from '../theme/theme';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <OurBestServices />
      <Footer>
        <Footer.Logo />
        <Footer.Content />
      </Footer>
    </BrowserRouter>
  );
};

export default App;
