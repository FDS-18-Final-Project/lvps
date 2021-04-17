import React from 'react';
import Routes from '../routes';
import { BrowserRouter } from 'react-router-dom';

import { Header, Footer } from 'containers';
import GetAQuoteCheckbox from '../containers/GetAQuoteCheckbox/GetAQuoteCheckbox';

import StaffIntroduction from 'containers/StaffIntroduction/StaffIntroduction';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <Footer>
        <Footer.Logo />
        <Footer.Content />
      </Footer>
    </BrowserRouter>
  );
};

export default App;
