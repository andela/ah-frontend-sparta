import React from 'react';

import './Inputbox.scss';

const InputBox = ({ name, placeholder, type, onChangeInput, value }) => {

  return (
    <div className="inputContain">
      <input type="text" type={type} value={value} name={name} placeholder={placeholder} className="input" onChange={val => onChangeInput(val)} />
    </div>
  )
}

export default InputBox;
