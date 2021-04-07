import React from 'react';
import Routes from '../routes';
import { BrowserRouter } from 'react-router-dom';
import Logo from '../components/Logo/Logo';

const App = () => {
  return (
    <BrowserRouter>
      <Logo tag="h2" />
      <Routes />
    </BrowserRouter>
  );
};

export default App;
