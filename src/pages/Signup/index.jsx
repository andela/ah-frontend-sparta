import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SignupForm from '../../components/SignupForm';
import { FaceBook, Google, Twitter } from '../../assets/icons';
import logo from '../../assets/images/logo.png';
import '../../assets/scss/Login.scss';
import { signUpUser } from '../../actions/signupSigninActions';

export class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
      error: '',
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { registerCurrentUser, history } = this.props;
    const {
      username, email, password, confirmPassword,
    } = this.state;
    if (password !== confirmPassword) {
      this.setState({
        error: 'Your passwords do not match',
      });
    } else if (
      username === ''
      || email === ''
      || password === ''
      || confirmPassword === ''
    ) {
      this.setState({
        error: 'Please populate all the fields',
      });
    } else {
      const signupData = {
        user: {
          email,
          password,
          username,
        },
      };
      registerCurrentUser(signupData, history);
    }
  };

  render() {
    const { error } = this.state;
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
                Continue with
                {' '}
                <FaceBook />
                {' '}
                <Twitter />
                {' '}
                <Google />
              </div>
              <div className="signStr">Or</div>
              <SignupForm
                error={error}
                handleSubmit={this.handleSubmit}
                onChange={this.onChange}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Signup.propTypes = {
  registerCurrentUser: PropTypes.func,
  history: PropTypes.func,
};

Signup.defaultProps = {
  registerCurrentUser: () => {},
  history: () => {},
};

export default withRouter(
  connect(
    null,
    { registerCurrentUser: signUpUser },
  )(Signup),
);
