import React from 'react';
import SignupForm from '../../components/SignupForm';
import { FaceBook, Google, Twitter } from '../../assets/icons'
import logo from '../../assets/images/logo.png';
import '../../assets/scss/Login.scss';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      signinStateButton: 'active',
      signupStateButton: 'inactive'
    };
  }

  onSigninToggle() {
    this.setState({
      signinStateButton: 'active',
      signupStateButton: 'inactive'
    });
  }

  onSignupToggle() {
    this.setState({
      signinStateButton: 'inactive',
      signupStateButton: 'active'
    });
  }

  render() {

    return (
      <div className="outer">
        <div className="innerHalf1">
          <img src={logo} alt="Logo" className="logo" />
          <div className="intro">
            We create a community of like minded authors to foster inspiration
            and innovation by leveraging the modern web.
          </div>
        </div>
        <div className="innerHalf2">
          <div>
            <div className="innerHalfContent">
              <div className="socialDiv">
                Continue with {' '}
                <FaceBook />{' '}
                <Twitter />{' '}
                <Google />
              </div>
              <div className="signStr">Or</div>
              <SignupForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
