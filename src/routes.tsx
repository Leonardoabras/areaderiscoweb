import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Register from './pages/Register';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/register" component={Register} />
  </Switch>
);

export default Routes;
