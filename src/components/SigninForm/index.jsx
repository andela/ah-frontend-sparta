import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import InputBox from '../InputBox';
import Button from '../SignupButton';
import ResetPasswordContainer from
  '../../pages/PasswordReset/ResetPasswordContainer';

const SigninForm = ({
  email, password, handleSubmit, onChange,
}) => (
  <React.Fragment>
    <div className="signStr spacebottom">Login to your account</div>
    <form>
      <InputBox
        type="email"
        name="email"
        value={email}
        placeholder="EMAIL"
        onChangeInput={onChange}
      />
      <InputBox
        type="password"
        name="password"
        value={password}
        placeholder="PASSWORD"
        onChangeInput={onChange}
      />
      <div className="forgot">
        <span data-toggle="modal" data-target="#forgotPassword">
            Forgot password?
        </span>
        <ResetPasswordContainer />
      </div>
      <Button value="Signin" handleSubmit={handleSubmit} />
      <div className="other">
        <span>
          Don’t have an account?
          {' '}
          <Link to="/register">Signup</Link>
        </span>
      </div>
    </form>
  </React.Fragment>
);

SigninForm.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  handleSubmit: PropTypes.func,
  onChange: PropTypes.func,
};

SigninForm.defaultProps = {
  email: '',
  password: '',
  handleSubmit: () => {},
  onChange: () => {},
};

export default SigninForm;
