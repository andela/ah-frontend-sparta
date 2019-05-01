import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Landing from '../pages/Landing';

const Routes = () => (
  <>
    <Router>
      <Route exact path="/" component={Landing} />
    </Router>
  </>

);

export default Routes;
