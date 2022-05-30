import { useState } from 'react';
import './styles/App.css';
import BarChart from './components/charts/BarChart';
import LineChart from './components/charts/LineChart';
import PieChart from './components/charts/PieChart';
import InputDataControl from './components/InputDataControl';
import RadioButton from './components/RadioButton';

const App = () => {
  const radioButtonValues = ["bar", "line", "pie"];

  const [monthes, setMonthes] = useState(['January', 'February', 'March', 'April', 'May']);
  const [userValues, setUserValues] = useState(['1', '5', '10', '1', '2']);
  const [chartMark, setChartMark] = useState(radioButtonValues[0]);

  const chartData = {
    labels: monthes,
    datasets: [
      {
        label: "The application",
        data: userValues,
        backgroundColor: [
          "#ecf0f1",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="App">
      <div className="app-container">
        <h1 className="app-title">The application</h1>
        <div className="input-data__control">
          <InputDataControl 
            label="X axis labels:"
            placeholder="Fill monthes for x axis"
            inputValue={monthes}
            onInputChange={setMonthes}
          />
          <InputDataControl 
            label="Y axis values:"
            placeholder="Fill values for y axis"
            inputValue={userValues}
            onInputChange={setUserValues}
          />
        </div>
        <div className='chart-screen' >
          {(chartMark === "bar") && <BarChart chartData={chartData} />}
          {(chartMark === "line") && <LineChart chartData={chartData} />}
          {(chartMark === "pie") && <PieChart chartData={chartData} />}
        </div>

        <div className="switch-chart__control">
          {radioButtonValues.map(btnValue => (
            <div key={btnValue}>
              <RadioButton 
                  value={btnValue} 
                  setChartMark={setChartMark} 
                  chartMark={chartMark}
              /> 
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
