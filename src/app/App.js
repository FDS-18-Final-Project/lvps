import React from 'react';
import Routes from '../routes';
import { BrowserRouter } from 'react-router-dom';

import { Header, Footer, GetAQuteCheckbox } from 'containers';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <Footer>{/* <Footer.Logo />
        <Footer.Content /> */}</Footer>
      <Footer />

    </BrowserRouter>
  );
};

export default App;
