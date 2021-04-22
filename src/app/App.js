import React from 'react';
import Routes from '../routes';
import Header from 'containers/Header/Header';
import Footer from 'containers/Footer/Footer';
import ScrollToTop from 'components/ScrollToTop/ScrollToTop';

const App = () => {
  return (
    <>
      <Header />
      <ScrollToTop />

      <Routes />
      <Footer />
    </>
  );
};

export default App;
