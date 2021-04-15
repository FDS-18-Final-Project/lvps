import React from 'react';
import Routes from '../routes';
import { BrowserRouter } from 'react-router-dom';
import {
  Header,
  Footer,
  SubBanner,
  OurBestServices,
  ServiceInfo
} from 'containers';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <SubBanner />
      <ServiceInfo>
        Ceramic Pro is a multi-layerable, clear, liquid nano-ceramic coating.
        When cured, this technology will transform itself on the surface to a
        permanent, durable yet flexible glass shield. Ceramic Pro can be
        described as an additional clear coat, with 3 times the hardness and
        self cleaning properties.
      </ServiceInfo>
      <OurBestServices />
      <Footer>
        <Footer.Logo />
        <Footer.Content />
      </Footer>
    </BrowserRouter>
  );
};

export default App;
