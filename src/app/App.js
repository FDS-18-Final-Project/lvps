import React from 'react';
import Routes from '../routes';
import { BrowserRouter } from 'react-router-dom';
import { Header, Footer, SubBanner, OurBestServices } from 'containers';
import { PriceTable } from 'components/';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <SubBanner />
      <PriceTable type="title" hover icon />
      <PriceTable type="list" hover />
      <PriceTable type="list" icon />
      <OurBestServices />
      <Footer>
        <Footer.Logo />
        <Footer.Content />
      </Footer>
    </BrowserRouter>
  );
};

export default App;
