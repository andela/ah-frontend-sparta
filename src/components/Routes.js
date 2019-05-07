import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Landing from '../pages/Landing';
import Google from '../components/socialLogin/GoogleButton';

const Routes = () => (
  <>
    <Router>
      <Route exact path="/" component={Landing} />
      <Route exact path="/social" component={Google} />
    </Router>
  </>

);

export default Routes;
