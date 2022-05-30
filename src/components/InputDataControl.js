import React from 'react';
import '../styles/InputControl.css';

const InputDataControl = ({
    inputValue, 
    placeholder, 
    label, 
    onInputChange
  }) => {

    const enterHandler = (event) => {
  
      if (event.key === 'Enter') {
        event.target.value ? 
          onInputChange(event.target.value.split(',')) : 
          onInputChange([])
      }
    }
  
    const focusHandler = (event) => {
          event.target.value ? 
          onInputChange(event.target.value.split(',')) : 
          onInputChange([])
    }

  return (
    <div className='input-block'>
      <label>{label}</label>
      <input 
        className="input-data"
        type="text"
        placeholder={placeholder}
        defaultValue={inputValue}
        onKeyPress={enterHandler}
        onBlur={focusHandler}
        required
      />
    </div>
  )
}

export default InputDataControl