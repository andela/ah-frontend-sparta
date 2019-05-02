import React from 'react';
import { withRouter } from 'react-router-dom';
import LandingPageWrapper from '../../components/LandingPageWrapper';
import LandingImage from '../../assets/images/landing_image.jpg';

import './Landing.scss';

const Landing = () => (
  <div>
    <div className="page-banner-image">
      <img className="LandingImage" src={LandingImage} alt="Landing page." />
    </div>
    <div className="small-screen">
      <div>
        <form>
          <input type="text" placeholder="SEARCH" />
        </form>
      </div>
      <div>
        <a href="/login">Account</a>
      </div>
    </div>
    <LandingPageWrapper />
    <br />
    <br />
    <br />
  </div>
);

export default withRouter(Landing);
