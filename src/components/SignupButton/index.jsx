import React from 'react';
import PropTypes from 'prop-types';

import './SignupButton.scss';

const SignButton = ({ value, handleSubmit }) => <button id="loginButton" type="submit" onClick={handleSubmit}>{value}</button>;

SignButton.propTypes = {
  value: PropTypes.string,
  handleSubmit: PropTypes.func,
};

SignButton.defaultProps = {
  value: '',
  handleSubmit: () => {},
};

export default SignButton;
