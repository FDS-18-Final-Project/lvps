import React from 'react';
import Routes from '../routes';
import { BrowserRouter } from 'react-router-dom';
import { Header, Footer, FAQ, OurBestServices } from 'containers';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <FAQ />
      <Footer>
        <Footer.Logo />
        <Footer.Content />
      </Footer>
    </BrowserRouter>
  );
};

export default App;
