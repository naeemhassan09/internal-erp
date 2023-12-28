import React, { Fragment } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Login from '../pages/auth/login';

const PublicRoutes = () => (
  <Fragment>
    <Switch>
      <Route path='/login'>
        <Login />
      </Route>
      <Route path=''>
        <Redirect to='/login' />
      </Route>
    </Switch>
  </Fragment>
);

export default PublicRoutes;
