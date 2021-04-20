import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import GetAQuoteFormSection from 'containers/GetAQuoteFormSection/GetAQuoteFormSection';
import Home from 'pages/Home/Home';
import AboutUs from 'pages/AboutUs/AboutUs';
import PageNotFound from 'pages/PageNotFound/PageNotFound';
import ContactUs from 'pages/ContactUs/ContactUs';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/AboutUs" component={AboutUs} />
    <Route path="/ContactUs" component={ContactUs} />
    <Route path="/GetAQuote" component={GetAQuoteFormSection} />
    <Route path="/PageNotFound" component={PageNotFound} />
    <Redirect to="/PageNotFound" />
  </Switch>
);

export default Routes;
