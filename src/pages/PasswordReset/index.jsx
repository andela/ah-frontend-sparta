import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PasswordResetForm from '../../components/PasswordResetForm';
import { ChangePasswordActions } from
  '../../actions/resetActions/changePasswordActions';
import logo from '../../assets/images/logo.png';
import '../../assets/scss/Login.scss';

export class PasswordReset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPassword: '',
      confirmPassword: '',
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { newPassword, confirmPassword } = this.state;
    const { changePassword, match } = this.props;
    changePassword(
      newPassword,
      confirmPassword,
      match.params.token,
    );
  }

  render() {
    const { newPassword, confirmPassword } = this.state;

    return (
      <div className="outer">
        <div className="inner1">
          <img src={logo} alt="Logo" className="logo" />
          <div className="message">Welcome Back.</div>
        </div>
        <div className="inner2">
          <div>
            <div className="innerHalfContent">
              <PasswordResetForm
                onChange={this.onChange}
                handleSubmit={this.handleSubmit}
                confirmPassword={confirmPassword}
                newPassword={newPassword}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
PasswordReset.propTypes = {
  changePassword: PropTypes.func,
  match: PropTypes.shape(PropTypes.object.isRequired),
};

PasswordReset.defaultProps = {
  changePassword: () => { },
  match: () => { },
};
export default connect(null, { changePassword: ChangePasswordActions })(PasswordReset);
