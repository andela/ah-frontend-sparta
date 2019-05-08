import React from 'react';
import { Link } from 'react-router-dom';
import InputBox from '../InputBox';
import Button from '../SignupButton';

const Signin = () => {
  const onChangeEmail = e => {
  
  };

  const onChangePassword = e => {

  };

  return (
    <React.Fragment>
      <div className="signStr spacebottom">Login to your account</div>
      <form>
        <InputBox
          type="email"
          name="email"
          placeholder="EMAIL"
          onChangeInput={e => onChangeEmail(e)}
        />
        <InputBox
          type="password"
          name="password"
          placeholder="PASSWORD"
          onChangeInput={e => onChangePassword(e)}
        />
        <div className="forgot">
          <span onClick={() => alert("Open dialog")}>Forgot password?</span>
        </div>
        <Button value="Signin" />
        <div className="other">
          <span>
            Don’t have an account? <Link to={"/register"}>Signup</Link>
          </span>
        </div>
      </form>
    </React.Fragment>
  );
};

export default Signin;
