import React from 'react';
import Routes from '../routes';
import { BrowserRouter } from 'react-router-dom';
import Logo from '../components/Logo/Logo';
import Navbar from '@components/Navbar/Navbar';
import Footer from 'containers/Footer/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Logo tag="h2" />
      <Navbar />
      <Routes />
      <Footer>
        <Footer.Logo />
        <Footer.Content />
      </Footer>
    </BrowserRouter>
  );
};

export default App;
