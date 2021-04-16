import React from 'react';
import Routes from '../routes';
import { BrowserRouter } from 'react-router-dom';
import { Header, Footer, FAQ, OurBestServices } from 'containers';
import GetAquoteCheckbox from '../containers/GetAQuoteCheckbox/GetAQuoteCheckbox';
import StaffIntroduction from 'containers/StaffIntroduction/StaffIntroduction';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <FAQ />
      <OurBestServices />
      <Routes />
      <Footer>
        <Footer.Logo />
        <Footer.Content />
      </Footer>
    </BrowserRouter>
  );
};

export default App;
