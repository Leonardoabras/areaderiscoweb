import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Register from './pages/Register';
import RegisterTarget from './pages/RegisterTarget';
import Login from './pages/Login';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/register" exact component={Register} />
    <Route path="/register/target" component={RegisterTarget} />
    <Route path="/login" component={Login} />
  </Switch>
);

export default Routes;
