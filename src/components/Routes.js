import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Login from './Login';
import Landing from './Landing';

const Routes = () => (
  <>
    <Router>
      <Route exact path="/" component={Landing} />
      <Route path="/login" component={Login} />
    </Router>
  </>

);

export default Routes;
