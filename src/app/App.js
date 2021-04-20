import React from 'react';
import Routes from '../routes';
import { BrowserRouter } from 'react-router-dom';
import Header from 'containers/Header/Header';
import MainServiceCarousel from 'containers/MainServiceCarousel/MainServiceCarousel';
import Footer from 'containers/Footer/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <MainServiceCarousel />
      <Routes />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
