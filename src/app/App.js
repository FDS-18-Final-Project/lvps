import React from 'react';
import Routes from '../routes';
import { BrowserRouter } from 'react-router-dom';
import { Footer } from 'containers';

const App = () => {
  return (
    <BrowserRouter>
      <Routes />
      <Footer>
        <Footer.Logo />
        <Footer.Content />
      </Footer>
    </BrowserRouter>
  );
};

export default App;
