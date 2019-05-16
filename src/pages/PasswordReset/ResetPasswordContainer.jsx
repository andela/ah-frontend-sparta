import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { resetPasswordActions } from
  '../../actions/resetActions/resetPasswordActions';
import ResetPassword from '../../components/resetPassword';

export class ResetPasswordContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };

    this.onChange = this.onChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleClick = () => {
    const { resetPassword } = this.props;
    const { email } = this.state;
    resetPassword(email);
  }

  render() {
    const { email } = this.state;
    return (
      <div>
        <ResetPassword
          onChange={this.onChange}
          handleClick={this.handleClick}
          email={email}
        />
      </div>
    );
  }
}

export const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  resetPassword: (email) => {
    dispatch(resetPasswordActions(email));
  },
});

ResetPasswordContainer.propTypes = {
  resetPassword: PropTypes.func,
};

ResetPasswordContainer.defaultProps = {
  resetPassword: () => { },
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResetPasswordContainer);
