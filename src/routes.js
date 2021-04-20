import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import GetAQuoteFormSection from 'containers/GetAQuoteFormSection/GetAQuoteFormSection';
import Home from 'pages/Home/Home';
import AboutUs from 'pages/AboutUs/AboutUs';
import PageNotFound from 'pages/PageNotFound/PageNotFound';

const Routes = () => (
  <Switch>
    <Route path="/" exact>
      <Home />
    </Route>
    <Route path="/AboutUs" component={AboutUs} />
    <Route path="/GetAQuote" component={GetAQuoteFormSection} />
    <Route path="/PageNotFound" component={PageNotFound} />
    <Redirect to="/PageNotFound" />
  </Switch>
);

export default Routes;
