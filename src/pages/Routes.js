import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Landing from './Landing';
import Signin from './Signin';
import Signup from './Signup';
import NavBar from '../components/NavBar';

const Routes = () => (
  <>
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/register" component={Signup} />
        <Route path="/login" component={Signin} />
      </Switch>
    </Router>
  </>
);

export default Routes;
