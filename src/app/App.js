import React from 'react';
import Routes from '../routes';
import { BrowserRouter } from 'react-router-dom';
import { Header, Footer } from 'containers';
import GetAquoteCheckbox from '../containers/GetAQuoteCheckbox/GetAquoteCheckbox';
import StaffIntroduction from 'containers/StaffIntroduction/StaffIntroduction';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <GetAquoteCheckbox />
      <StaffIntroduction />
      <Routes />
      <Footer>
        <Footer.Logo />
        <Footer.Content />
      </Footer>
    </BrowserRouter>
  );
};

export default App;
