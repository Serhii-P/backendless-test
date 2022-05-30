import React from 'react';
import { Pie } from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto';


const PieChart = ({chartData}) => {

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    
  };
  return (
      <Pie data={chartData}  
        options={options}
        height="400px"
        width="400px"
      />  
    )
}

export default PieChart