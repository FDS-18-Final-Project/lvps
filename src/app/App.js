import React from 'react';
import Routes from '../routes';
import { BrowserRouter } from 'react-router-dom';
import Header from 'containers/Header/Header';
import Footer from 'containers/Footer/Footer';
import GetAQuoteForm from 'containers/GetAQuoteForm/GetAQuoteForm';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      {/* <GetAQuoteForm /> */}
      <Routes />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
