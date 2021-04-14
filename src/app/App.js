import React from 'react';
import Routes from '../routes';
import { BrowserRouter } from 'react-router-dom';
import { Header, Footer, SubBanner, OurBestServices } from 'containers';
import PriceTable from '../components/PriceTable/PriceTable';


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <SubBanner />
      <PriceTable />
      <OurBestServices />
      <Footer>
        <Footer.Logo />
        <Footer.Content />
      </Footer>
    </BrowserRouter>
  );
};

export default App;
