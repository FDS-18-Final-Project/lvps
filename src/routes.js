import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'pages/Home/Home';
import AboutUs from 'pages/AboutUs/AboutUs';
import WheelAndTire from 'pages/Services/WheelAndTire';
import PageNotFound from 'pages/PageNotFound/PageNotFound';
import DetailingAndCorrection from 'pages/Services/DetailingAndCorrection';
import MainService from 'pages/MainService/MainService';
import ServiceCeramic from 'pages/ServiceCeramic/ServiceCeramic';
import PaintProtectionFilm from 'pages/PaintProtectionFilm/PaintProtectionFilm';
import ContactUs from 'pages/ContactUs/ContactUs';
import IGLCoatings from 'pages/IGLCoatings/IGLCoatings';
import WindowTinting from './pages/WindowTinting/WindowTinting';
import GetAQuote from 'pages/GetAQuote/GetAQuote';
import GetAQuotePage from 'pages/GetAQuotePage/GetAQuotePage';
const Routes = () => (
  <Switch>
    <Route path="/" exact>
      <Home />
    </Route>
    <Route path="/home">
      <Home />
    </Route>

    <Route path="/mainService" component={MainService} />
    <Route path="/serviceCeramic" component={ServiceCeramic} />
    <Route path="/paintProtection" component={PaintProtectionFilm} />
    <Route path="/windowTinting" component={WindowTinting} />
    <Route path="/AboutUs" component={AboutUs} />
    <Route path="/WheelAndTire" component={WheelAndTire} />
    <Route path="/DetailingAndCorrection" component={DetailingAndCorrection} />
    <Route path="/ContactUs" component={ContactUs} />
    <Route path="/IGLCoatings" component={IGLCoatings} />
    <Route path="/GetAQuote/" component={GetAQuote} />
    <Route path="/GetAQuoteForm" component={GetAQuotePage} />
    <Route path="/PageNotFound" component={PageNotFound} />
  </Switch>
);

export default Routes;
