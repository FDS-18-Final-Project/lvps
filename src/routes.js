import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import GetAQuoteFormSection from 'containers/GetAQuoteFormSection/GetAQuoteFormSection';
import Home from 'pages/Home/Home';
import AboutUs from 'pages/AboutUs/AboutUs';
import WheelAndTire from 'pages/Services/WheelAndTire';
import PageNotFound from 'pages/PageNotFound/PageNotFound';
import MainService from 'pages/MainService/MainService';
import ServiceCeramic from 'pages/ServiceCeramic/ServiceCeramic';
import PaintProtectionFilm from 'pages/PaintProtectionFilm/PaintProtectionFilm';

import ContactUs from 'pages/ContactUs/ContactUs';
import WindowTinting from './pages/WindowTinting/WindowTinting';
const Routes = () => (
  <Switch>
    <Route path="/" exact>
      <Home />
    </Route>
    <Route path="/home" exact>
      <Home />
    </Route>
    <Route path="/mainService" component={MainService} />
    <Route path="/serviceCeramic" component={ServiceCeramic} />
    <Route path="/paintProtection" component={PaintProtectionFilm} />
    <Route path="/windowTinting" component={WindowTinting} />
    <Route path="/AboutUs" component={AboutUs} />
    <Route path="/WheelAndTire" component={WheelAndTire} />
    <Route path="/ContactUs" component={ContactUs} />
    <Route path="/GetAQuote" component={GetAQuoteFormSection} />
    <Route path="/PageNotFound" component={PageNotFound} />
    <Redirect to="/PageNotFound" />
  </Switch>
);

export default Routes;
