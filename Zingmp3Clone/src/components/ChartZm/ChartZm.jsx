import React from "react";
import { Line } from "react-chartjs-2";
import "./chart.css";
const ChartZm = ({ options, data }) => {

  return (
    <div className="chart-zm h-[400px]">
      <Line options={options} data={data} />
    </div>
  );
};

export default ChartZm;
