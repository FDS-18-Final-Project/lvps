import React from 'react';
import Routes from '../routes';
import { BrowserRouter } from 'react-router-dom';
import { Header, Footer } from 'containers';
import CheckBox from '../components/CheckBox/CheckBox';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <CheckBox />
      <Routes />
      <Footer>
        <Footer.Logo />
        <Footer.Content />
      </Footer>
    </BrowserRouter>
  );
};

export default App;
