import React from 'react';
import Routes from '../routes';
import { BrowserRouter } from 'react-router-dom';
import Footer from 'containers/Footer/Footer';
import Header from 'containers/Header/Header';

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
