import React from 'react';
import Routes from '../routes';
import { BrowserRouter } from 'react-router-dom';

import { Header, Footer, StaffIntroduction } from 'containers';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <StaffIntroduction />
      {/* <Routes />
      <Footer>
        <Footer.Logo />
        <Footer.Content />
      </Footer> */}
    </BrowserRouter>
  );
};

export default App;
