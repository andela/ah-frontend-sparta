import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Notifications from 'react-notify-toast';
import LandingComponent from './Landing';
import SigninComponent from './Signin';
import SignupComponent from './Signup';
import NavBar from '../components/NavBar';
import ResetPassword from '../components/resetPassword';
import ChangePassword from './PasswordReset';

const Routes = () => (
  <>
    <Router>
      <NavBar />
      <Notifications />
      <Switch>
        <Route exact path="/" component={LandingComponent} />
        <Route path="/register" component={SignupComponent} />
        <Route path="/login" component={SigninComponent} />
        <Route path="/password-reset/" component={ResetPassword} />
        <Route path="/reset/:token/change/" component={ChangePassword} />
      </Switch>
    </Router>
  </>
);

export default Routes;
