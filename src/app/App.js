import React from 'react';
import Routes from '../routes';
import { BrowserRouter } from 'react-router-dom';

import { Header, Footer, FAQ } from 'containers';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <FAQ />
      {/* <Routes /> */}
      {/* <Footer>
        <Footer.Logo />
        <Footer.Content />
      </Footer> */}
    </BrowserRouter>
  );
};

export default App;
