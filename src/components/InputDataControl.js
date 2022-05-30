import React from 'react';
import '../styles/InputControl.css';

const InputDataControl = ({inputChangeHandler, inputValue, placeholder, label}) => {
  return (
    <div className='input-block'>
      <label>{label}</label>
      <input 
        className="input-data"
        type="text"
        placeholder={placeholder}
        onChange={inputChangeHandler}
        value={inputValue}
        required
      />
    </div>
  )
}

export default InputDataControl