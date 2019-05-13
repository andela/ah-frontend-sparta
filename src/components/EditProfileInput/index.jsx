import React from 'react';
import PropTypes from 'prop-types';

import './profileInput.scss';

const EditProfileInput = ({
  label, id, type, value, onChange, disabled,
}) => (
  <div className="profileInputContainer">
    <div className="label">
      <span>{`${label}:`}</span>
    </div>
    <input
      className="col-6 profileInput"
      id={id}
      type={type}
      defaultValue={value}
      onChange={onChange}
      disabled={disabled === true}
    />
  </div>
);

EditProfileInput.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

EditProfileInput.defaultProps = {
  label: '',
  id: '',
  type: '',
  value: '',
  disabled: false,
  onChange: () => {},
};

export default EditProfileInput;
