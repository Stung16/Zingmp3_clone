import React, { useEffect, useState } from "react";
import ChartZm from "../../components/ChartZm/ChartZm";
import { options } from "../../utils/fn";
import { songSlices } from "../../stores/slices/songSlices";
import { useDispatch, useSelector } from "react-redux";
import Chart_Top from "../../components/Chart_Top/Chart_Top";
import { getChartHome } from "../../services/music.services";
const { updateLoading } = songSlices.actions;

const Zing_chart = () => {
  const dispatch = useDispatch();

  const labels = [
    "04",
    "06",
    "08",
    "10",
    "12",
    "14",
    "16",
    "18",
    "20",
    "22",
    "00",
    "02",
  ];
  const datasets = [
    {
      label: "Dataset 1",
      data: [
        1504, 2057, 4661, 6102, 4957, 5551, 5201, 5333, 4118, 4182, 3332, 2385,
      ],
      tension: 0.3,
      borderWidth: 2,
      pointHoverRadius: 5,
      pointHoverBorderWidth: 5,
      animation: false,
      pointHitRadius: 5,
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: [
        1645, 1970, 3908, 4846, 3915, 4839, 4097, 3657, 2566, 2977, 3511, 2684,
      ],
      tension: 0.3,
      borderWidth: 2,
      pointHoverRadius: 5,
      pointHoverBorderWidth: 5,
      animation: false,
      pointHitRadius: 5,
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
    {
      label: "Dataset 3",
      data: [
        1386, 1522, 2665, 3330, 2631, 3414, 2931, 2604, 2007, 1975, 2593, 2205,
      ],
      tension: 0.3,
      borderWidth: 2,
      pointHoverRadius: 5,
      pointHoverBorderWidth: 5,
      animation: false,
      pointHitRadius: 5,
      borderColor: "#28b799",
      backgroundColor: "#28b7998f",
    },
  ];
  const data = { labels, datasets };
  const [dataChart, setDataChart] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      dispatch(updateLoading(true));
      const data = await getChartHome();
      if (data) {
        setDataChart(data);
        dispatch(updateLoading(false));
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="h-full flex justify-center  flex-col">
        <ChartZm options={options} data={data} />
        {data && <Chart_Top data={dataChart?.data?.RTChart}/>}
      </div>
    </>
  );
};

export default Zing_chart;
