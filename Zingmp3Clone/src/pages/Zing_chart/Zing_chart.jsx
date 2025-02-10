import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import Chart from "chart.js/auto";
import ChartZm from "../../components/ChartZm/ChartZm";
import { options } from "../../utils/fn";
import { songSlices } from "../../stores/slices/songSlices";
import { useDispatch } from "react-redux";
import { getChartHome } from "../../services/music.services";
import Chart_Top from "../../components/Chart_Top/Chart_Top";
const { updateLoading } = songSlices.actions;

const Zing_chart = () => {
  const dispatch = useDispatch();
  const [dataChart, setDataChart] = useState(null);
  const [dataChartZm, setDataChartZm] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(updateLoading(true));
        const dataChartApi = await getChartHome();
        if (dataChartApi?.err === 0) {
          const chartDataa = dataChartApi?.data?.RTChart;
          setDataChart(chartDataa);
          const labels = chartDataa?.chart?.times
            ?.filter((item) => item?.hour % 2 === 0)
            ?.map((item) => item?.hour);
          const datasets = [];
          if (chartDataa?.chart?.items) {
            for (let i = 0; i < 3; i++) {
              datasets.push({
                data: chartDataa?.chart?.items[
                  Object?.keys(chartDataa?.chart?.items)[i]
                ]
                  ?.filter((item) => item?.hour % 2 === 0)
                  ?.map((item) => item?.counter),
                borderColor:
                  i === 0
                    ? "#28b799"
                    : i === 1
                    ? "rgb(255, 99, 132)"
                    : "rgb(53, 162, 235)",
                tension: 0.3,
                borderWidth: 2,
                pointHoverRadius: 5,
                pointHoverBorderWidth: 5,
                animation: false,
                pointHitRadius: 5,
                backgroundColor:
                  i === 0
                    ? "#28b7998f"
                    : i === 1
                    ? "rgba(255, 99, 132, 0.5)"
                    : "rgba(53, 162, 235, 0.5)",
              });
            }

            setDataChartZm({ labels, datasets });
          }
        }
      } catch (error) {
        console.log(error);
      } finally {
        dispatch(updateLoading(false));
      }
    };
    fetchData();
  }, [dispatch]);
  console.log(dataChartZm);
  console.log(dataChart);

  return (
    <>
      <div className="h-full flex  flex-col mt-12">
        {dataChart && ChartZm ? (
          <ChartZm options={options} data={dataChartZm} />
        ) : (
          <div className="w-full h-[10rem] bg-gray-200 animate-pulse mt-6 rounded-lg">
            <div className="flex flex-col items-center justify-center h-full">
              <div className="w-[95%] h-6 bg-gray-300 rounded"></div>
              <div className="w-[95%] h-6 bg-gray-300 rounded mt-4"></div>
              <div className="w-[95%] h-6 bg-gray-300 rounded mt-4"></div>
            </div>
          </div>
        )}

        {dataChart ? (
          <Chart_Top data={dataChart} />
        ) : (
          <div className="w-full h-auto bg-gray-200 animate-pulse mt-6 rounded-lg">
            <div className="flex flex-col items-center justify-center h-full">
              <div className="w-[95%] h-6 bg-gray-300 rounded"></div>
              <div className="w-[95%] h-6 bg-gray-300 rounded mt-4"></div>
              <div className="w-[95%] h-6 bg-gray-300 rounded mt-4"></div>
              <div className="w-[95%] h-6 bg-gray-300 rounded mt-4"></div>
              <div className="w-[95%] h-6 bg-gray-300 rounded mt-4"></div>
              <div className="w-[95%] h-6 bg-gray-300 rounded mt-4"></div>
              <div className="w-[95%] h-6 bg-gray-300 rounded mt-4"></div>
              <div className="w-[95%] h-6 bg-gray-300 rounded mt-4"></div>
              <div className="w-[95%] h-6 bg-gray-300 rounded mt-4"></div>
              <div className="w-[95%] h-6 bg-gray-300 rounded mt-4"></div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Zing_chart;
