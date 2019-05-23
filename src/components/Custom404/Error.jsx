import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorStyles.css';

const Error = () => (
  <>
    <div className="heading-error">
      <h3>OOPS!! There is nothing here</h3>
    </div>
    <div className="to-dashboard">
      <Link to="/dashboard">
        <h6>Back to Dashboard</h6>
      </Link>
    </div>
  </>
);

export default Error;
