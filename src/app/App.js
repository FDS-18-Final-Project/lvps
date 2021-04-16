import React from 'react';
import Routes from '../routes';
import { BrowserRouter } from 'react-router-dom';
import { Header, Footer } from 'containers';
import { PriceTable } from 'components/';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <PriceTable hover={false} type="title" modal={true} />
      <PriceTable hover type="list" />
      <Routes />
      <Footer>
        <Footer.Logo />
        <Footer.Content />
      </Footer>
    </BrowserRouter>
  );
};

export default App;
