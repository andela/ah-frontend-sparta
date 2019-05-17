import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import InputBox from '../InputBox';
import Button from '../SignupButton';

const SignupForm = ({
  username, email, password, confirmPassword, handleSubmit, onChange, error,
}) => (
  <div style={{ paddingLeft: '50px' }}>
    <p style={{ fontSize: '20px', paddingLeft: '65px' }}>
        Create an account
    </p>
    <form onSubmit={handleSubmit}>
      <InputBox
        type="text"
        value={username}
        name="username"
        placeholder="USERNAME"
        onChangeInput={onChange}
      />
      <InputBox
        type="email"
        value={email}
        name="email"
        placeholder="EMAIL"
        onChangeInput={onChange}
      />
      <InputBox
        type="password"
        value={password}
        name="password"
        placeholder="PASSWORD"
        onChangeInput={onChange}
      />
      <InputBox
        type="password"
        value={confirmPassword}
        name="confirmPassword"
        placeholder="CONFIRM PASSWORD"
        onChangeInput={onChange}
      />
      {error && <div className="error-msg">{error}</div>}
      <Button value="Signup" />
      <div className="other">
        <span>
          Already have an account?
          {' '}
          <Link to="/login">Signin</Link>
        </span>
      </div>
    </form>
  </div>
);

SignupForm.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  username: PropTypes.string,
  confirmPassword: PropTypes.string,
  error: PropTypes.string,
  handleSubmit: PropTypes.func,
  onChange: PropTypes.func,
};

SignupForm.defaultProps = {
  email: '',
  password: '',
  username: '',
  confirmPassword: '',
  error: '',
  handleSubmit: () => {},
  onChange: () => {},
};

export default SignupForm;
