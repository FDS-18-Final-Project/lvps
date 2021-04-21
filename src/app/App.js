import React from 'react';
import Routes from '../routes';
import Header from 'containers/Header/Header';
import Footer from 'containers/Footer/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Routes />
      <Footer />
    </>
  );
};

export default App;
