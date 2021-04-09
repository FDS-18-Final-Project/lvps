import React from 'react';
import Routes from '../routes';
import { BrowserRouter } from 'react-router-dom';
import Footer from 'containers/Footer/Footer';
import Header from 'containers/Header/Header';
import ServiceInfo from '../containers/ServiceInfo/ServiceInfo';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <ServiceInfo>
        LVPS operates in North York, Ontario. The major intersection is Dufferin
        St and Finch Ave W. Our goal is to provide our customers with the best
        quality services & products, and convenient automotive services
        experience possible. We use the most modern and up-to-date tools.
        Through our experience with working with many cars using different kind
        of products on the market, we chose our products that are the best in
        the industry for your car.
      </ServiceInfo>
      <Footer>
        <Footer.Logo />
        <Footer.Content />
      </Footer>
    </BrowserRouter>
  );
};

export default App;
