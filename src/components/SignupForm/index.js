import React from 'react';
import { connect } from 'react-redux';
import {
  usernameChanged,
  emailChanged,
  passwordChanged,
  confPasswordChanged,
  signUpUser
} from '../../actions/signupSigninActions';
import { Link } from 'react-router-dom';
import InputBox from '../InputBox';
import Button from '../SignupButton';

const Signup = props => {
  const { signupData } = props;

  const onChangeUsername = e => {
    props.usernameChanged(e.target.value);
  };

  const onChangeEmail = e => {
    props.emailChanged(e.target.value);
  };

  const onChangePassword = e => {
    props.passwordChanged(e.target.value);
  };

  const onChangeConfPassword = e => {
    props.confPasswordChanged(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.signUpUser(signupData);
  };

  return (
    <div>
      <div className="signStr spacebottom">Create an account</div>
      <form onSubmit={handleSubmit}>
        <InputBox
          type="text"
          value={signupData.username}
          name="username"
          placeholder="USERNAME"
          onChangeInput={e => onChangeUsername(e)}
        />
        <InputBox
          type="email"
          value={signupData.email}
          name="email"
          placeholder="EMAIL"
          onChangeInput={e => onChangeEmail(e)}
        />
        <InputBox
          type="password"
          value={signupData.password}
          name="password"
          placeholder="PASSWORD"
          onChangeInput={e => onChangePassword(e)}
        />
        <InputBox
          type="password"
          value={signupData.confirm_password}
          name="confirm-password"
          placeholder="CONFIRM PASSWORD"
          onChangeInput={e => onChangeConfPassword(e)}
        />
        {signupData.error !== null ? (
          <div className="error-msg">{signupData.error}</div>
        ) : null}
        <Button value="Signup" />
        <div className="other">
          <span>
            Already have an account? <Link to={"/login"}>Signin</Link>
          </span>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    signupData: state.signup_signin
  };
};

export default connect(
  mapStateToProps,
  {
    usernameChanged,
    emailChanged,
    passwordChanged,
    confPasswordChanged,
    signUpUser
  }
)(Signup);
