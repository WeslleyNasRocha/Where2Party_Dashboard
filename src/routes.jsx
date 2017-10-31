import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';

import App from './main/app';
import Auth from './auth/auth';

export default props => (
  <Router history={hashHistory}>
    <Route path='/' component={App} />
    <Route path='/login' component={Auth} />
    <Redirect from='*' to='/' />
  </Router>
);
