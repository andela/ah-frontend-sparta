import React from 'react';
import PropTypes from 'prop-types';
import InputBox from '../InputBox';
import Button from '../SignupButton';

const PasswordResetForm = ({
  onChange, handleSubmit, newPassword, confirmPassword,
}) => (
  <div>
    <div className="signStr spacebottom">
      <h4>Authors Haven Password Reset</h4>
    </div>
    <form onSubmit={handleSubmit}>
      <InputBox
        type="password"
        value={newPassword}
        name="newPassword"
        placeholder="Enter New password"
        onChangeInput={onChange}
      />
      <InputBox
        type="password"
        value={confirmPassword}
        name="confirmPassword"
        placeholder="Confirm New password"
        onChangeInput={onChange}
      />
      <Button value="Reset" />
    </form>
  </div>
);

PasswordResetForm.propTypes = {
  newPassword: PropTypes.string.isRequired,
  confirmPassword: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default PasswordResetForm;
