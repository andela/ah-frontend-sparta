import React from 'react';
import PropTypes from 'prop-types';

import './SignupButton.scss';

const SignButton = ({ value }) => <button type="submit">{value}</button>;

SignButton.propTypes = {
  value: PropTypes.string,
};

SignButton.defaultProps = {
  value: '',
};

export default SignButton;
