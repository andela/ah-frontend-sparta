import React from 'react';
import SigninForm from '../../components/SigninForm';
import { FaceBook, Google, Twitter } from '../../assets/icons';

import logo from '../../assets/images/logo.png';
import '../../assets/scss/Login.scss';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      signinStateButton: "active",
      signupStateButton: "inactive"
    };
  }

  onSigninToggle() {
    this.setState({
      signinStateButton: "active",
      signupStateButton: "inactive"
    });
  }

  onSignupToggle() {
    this.setState({
      signinStateButton: "inactive",
      signupStateButton: "active"
    });
  }

  render() {
    return (
      <div className="outer">
        <div className="innerHalf1">
          <img src={logo} alt="Logo" className="logo" />
          <div className="intro">Welcome Back.</div>
        </div>
        <div className="innerHalf2">
          <div>
            <div className="innerHalfContent">
              <div className="socialDiv">
                Continue with <FaceBook /> <Twitter /> <Google />{" "}
              </div>
              <div className="signStr">Or</div>
              <SigninForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
