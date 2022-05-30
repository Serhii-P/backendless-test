import React from 'react';
import '../styles/RadioButton.css';

const RadioButton = ({value, setChartMark, chartMark}) => {

const radioCheckHandler = (event) => {
  if (event.target.value !== chartMark) {
    setChartMark(event.target.value)
  }
}

  return (
    <div className='radio-button'>
      <input
        className="foo"
        type="radio"
        name="chart"
        value={value}
        checked={chartMark === value}
        onChange={radioCheckHandler}
      />
      {`${value[0].toUpperCase() + value.slice(1)} chart`}
    </div>
  )
}

export default RadioButton