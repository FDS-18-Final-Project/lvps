import React from 'react';
import Routes from '../routes';
import { BrowserRouter } from 'react-router-dom';

import { Header, Footer } from 'containers';
import GetAQuoteCheckbox from '../containers/GetAQuoteCheckbox/GetAQuoteCheckbox';

import StaffIntroduction from 'containers/StaffIntroduction/StaffIntroduction';
import { PriceTable } from 'components/';
import GetAQuoteForm from 'containers/GetAQuoteForm/GetAQuoteForm';
import GetAQuoteFormSection from 'containers/GetAQuoteFormSection/GetAQuoteFormSection';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <GetAQuoteFormSection />
      <Routes />
      <Footer>
        <Footer.Logo />
        <Footer.Content />
      </Footer>
    </BrowserRouter>
  );
};

export default App;
