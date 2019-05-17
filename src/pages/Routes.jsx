import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Notifications from 'react-notify-toast';
import LandingComponent from './Landing';
import ArticlesComponent from './Articles';
import SigninComponent from './Signin';
import SignupComponent from './Signup';
import EditProfile from './EditProfile';
import ViewProflle from './ViewProflle';
import NavBar from '../components/NavBar';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';
import ResetPassword from '../components/resetPassword';
import ChangePassword from './PasswordReset';
import DashboardComponent from './Dashboard';
import DisplayArticleComponent from './singleArticle';
import EditArticleComponent from './singleArticle/EditArticle';


class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <>
        <Router>
          <NavBar />
          <Notifications />
          <Switch>
            <Route exact path="/" component={LandingComponent} />
            <Route path="/register" component={SignupComponent} />
            <PrivateRoute
              path="/articles/edit/:slug"
              component={EditArticleComponent}
              isLoggedIn={(localStorage.getItem('userAuthenticated'))}
            />
            <Route path="/login" component={SigninComponent} />
            <Route path="/password-reset/" component={ResetPassword} />
            <Route path="/reset/:token/change/" component={ChangePassword} />
            <Route
              exact
              path="/dashboard"
              component={DashboardComponent}
            />
            <PrivateRoute
              exact
              path="/article/create"
              component={ArticlesComponent}
              isLoggedIn={(localStorage.getItem('userAuthenticated'))}
            />
            <Route
              exact
              path="/articles/:slug"
              component={DisplayArticleComponent}
            />
            <PrivateRoute
              exact
              path="/article/create"
              component={ArticlesComponent}
              isLoggedIn={(localStorage.getItem('userAuthenticated'))}
            />
            <PrivateRoute
              path="/profile"
              component={ViewProflle}
              isLoggedIn={(localStorage.getItem('userAuthenticated'))}
            />
            <PrivateRoute
              path="/editprofile"
              component={EditProfile}
              isLoggedIn={(localStorage.getItem('userAuthenticated'))}
            />
          </Switch>
        </Router>
      </>
    );
  }
}

export default Routes;
