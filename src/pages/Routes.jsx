import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Notifications from 'react-notify-toast';
import Landing from './Landing';
import SigninComponent from './Signin';
import SignupComponent from './Signup';
import NavBar from '../components/NavBar';

const Routes = () => (
  <>
    <Router>
      <NavBar />
      <Notifications />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/register" component={SignupComponent} />
        <Route path="/login" component={SigninComponent} />
      </Switch>
    </Router>
  </>
);

export default Routes;
