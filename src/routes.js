import React from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import { Home, PageNotFound } from './pages';
import { Header } from './containers';

const Routes = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path='/' component={Home} />
      <Route path='/PageNotFound' component={PageNotFound} />
      <Redirect to='/page-not-found' />
    </Switch>
  </BrowserRouter>
);

export default Routes;
