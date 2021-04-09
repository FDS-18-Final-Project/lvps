import React from 'react';
import Routes from '../routes';
import { BrowserRouter } from 'react-router-dom';
import Footer from 'containers/Footer/Footer';
import Header from 'containers/Header/Header';
import AboutUs from '../containers/AboutUs/AboutUs';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <AboutUs />
      <Footer>
        <Footer.Logo />
        <Footer.Content />
      </Footer>
    </BrowserRouter>
  );
};

export default App;
