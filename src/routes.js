import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import GetAQuoteFormSection from 'containers/GetAQuoteFormSection/GetAQuoteFormSection';
import Home from 'pages/Home/Home';
import AboutUs from 'pages/AboutUs/AboutUs';
import WheelAndTire from 'pages/Services/WheelAndTire';
import PageNotFound from 'pages/PageNotFound/PageNotFound';

import MainService from 'pages/MainService/MainService';
import ContactUs from 'pages/ContactUs/ContactUs';
import IGLCoatings from 'pages/IGLCoatings/IGLCoatings';
const Routes = () => (
  <Switch>
    <Route path="/" exact>
      <Home />
    </Route>
    <Route path="/home" exact>
      <Home />
    </Route>
    <Route path="/mainService" component={MainService} />
    <Route path="/AboutUs" component={AboutUs} />
    <Route path="/WheelAndTire" component={WheelAndTire} />
    <Route path="/ContactUs" component={ContactUs} />
    <Route path="/GetAQuote" component={GetAQuoteFormSection} />
    <Route path="/IGLCoatings" component={IGLCoatings} />
    <Route path="/PageNotFound" component={PageNotFound} />
    <Redirect to="/PageNotFound" />
  </Switch>
);

export default Routes;
