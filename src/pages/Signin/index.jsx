import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SigninForm from '../../components/SigninForm';
import { FaceBook, Google, Twitter } from '../../assets/icons';
import { signInUser } from '../../actions/signupSigninActions';
import logo from '../../assets/images/logo.png';
import '../../assets/scss/Login.scss';

export class Signin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { loginUser, history } = this.props;
    const { email, password } = this.state;
    const data = {
      user: {
        email,
        password,
      },
    };
    loginUser(data, history);
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { email, password } = this.state;
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
                Continue with
                <FaceBook />
                {' '}
                <Twitter />
                {' '}
                <Google />
              </div>
              <div className="signStr">Or</div>
              <SigninForm
                onChange={this.onChange}
                handleSubmit={this.handleSubmit}
                email={email}
                password={password}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Signin.propTypes = {
  loginUser: PropTypes.func,
  history: PropTypes.func,
};

Signin.defaultProps = {
  loginUser: () => {},
  history: () => {},
};

export default withRouter(
  connect(
    null,
    {
      loginUser: signInUser,
    },
  )(Signin),
);
