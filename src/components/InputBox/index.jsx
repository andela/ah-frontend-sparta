import React from 'react';
import PropTypes from 'prop-types';

import './InputBox.scss';

const InputBox = ({
  name, placeholder, type, onChangeInput, value,
}) => (
  <div className="inputContain">
    <input
      id="loginInput"
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
      className="input"
      onChange={onChangeInput}
    />
  </div>
);

InputBox.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChangeInput: PropTypes.func,
};

InputBox.defaultProps = {
  name: '',
  placeholder: '',
  type: '',
  value: '',
  onChangeInput: () => {},
};

export default InputBox;
