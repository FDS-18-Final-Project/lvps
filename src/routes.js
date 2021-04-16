import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Home, PageNotFound } from './pages';

const Routes = () => (
  <Switch>
    <Route path="/" exact>
      <Home />
    </Route>
    <Route path="/PageNotFound" component={PageNotFound} />
    <Redirect to="/PageNotFound" />
  </Switch>
);

export default Routes;
