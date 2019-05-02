import React from 'react';
import PropTypes from 'prop-types';
import GoogleLogin from 'react-google-login';
import { ClientId } from './GoogleConfig';
import './Google.css';

const Google = ({ responseGoogle }) => (
  <>
    <div className="google-login">
      <GoogleLogin
        clientId={ClientId}
        render={renderProps => (
          <span
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            className="fab fa-google-plus"
            role="presentation"
          />
        )}
        redirectUri={process.env.redirectUri}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
    </div>
  </>
);

Google.propTypes = {
  responseGoogle: PropTypes.func,
};

Google.defaultProps = {
  responseGoogle: () => {},
};

export default Google;
