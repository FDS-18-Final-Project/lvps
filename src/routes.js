import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Home, PageNotFound } from './pages';
import GetAQuoteFormSection from 'containers/GetAQuoteFormSection/GetAQuoteFormSection';

const Routes = () => (
  <Switch>
    <Route path="/" exact>
      <Home />
    </Route>
    <Route path="/GetAQuote" component={GetAQuoteFormSection} />
    <Route path="/PageNotFound" component={PageNotFound} />
    <Redirect to="/PageNotFound" />
  </Switch>
);

export default Routes;
