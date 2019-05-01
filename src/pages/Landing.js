import React from 'react';
import Navbar from '../components/Navbar';
import LandingPageWrapper from '../components/LandingPageWrapper';
import LandingImage from '../../images/landing_image.jpg';

import '../assets/scss/style.scss';


const Landing = () => (
    <div>
      <Navbar/>
      
      <div className="page-banner-image">
         <img className='LandingImage' src={LandingImage} alt="Landing image" />
      </div>
      <div className="small-screen">
        <div>
            <form>
              <input type="text" placeholder="SEARCH" />
            </form>
        </div>
        <div><a href="/login">Account</a></div>
      </div>
      <LandingPageWrapper  />
      <br></br>
      <br></br>
      <br></br>
    </div>
    
);

export default Landing;
