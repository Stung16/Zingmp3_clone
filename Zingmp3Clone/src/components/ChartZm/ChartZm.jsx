/* eslint-disable react/prop-types */
import { Line } from "react-chartjs-2";
import "./chart.css";
const ChartZm = ({ options, data }) => {
  return (
    <div className="chart-zm max-w-[100vw]">
      <Line options={options} data={data} />
    </div>
  );
};

export default ChartZm;
