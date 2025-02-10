/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { Fragment, memo } from "react";
import { options } from "../../../utils/fn";
// eslint-disable-next-line no-unused-vars
import Chart from "chart.js/auto";
import ChartZm from "../../../components/ChartZm/ChartZm";
import { Link } from "react-router-dom";

const ChartSection = ({ dataTrendding }) => {
  const listTrendding = dataTrendding?.items;
  //   const [data, setData] = useState(null);
  //   const chart = useSelector((state) => state.songValues.chart);
  //   const rank = useSelector((state) => state.songValues.rank);
  //   console.log(rank);
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

  return (
    <div className="zm-section relative">
      <img
        src="./img/gb-chart.jpg"
        alt="bg-chart"
        className="w-full object-cover rounded-md h-[420px]"
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[rgba(20,8,27,0.9)] to-[rgba(175,79,235,0.8)]"></div>
      <div className="absolute top-0 z-20 left-0 p-5 right-0 bottom-0">
        <h3 className="text-2xl text-white font-bold">#zingchart</h3>
        <div className="flex gap-4 h-[90%]">
          <div className="flex-4 flex flex-col item-cemter justify-center">
            {listTrendding
              ?.filter((i, index) => index < 3)
              ?.map((item, index) => {
                return (
                  <Fragment key={index}>
                    <div className="px-[15px] w-full">
                      <div className="group">
                        <div className=" media-item rounded-md  group-hover:bg-[#ffffff1a]">
                          <div className=" media">
                            <span
                              className={`mr-4 text-3xl ${
                                index === 0
                                  ? "text-[#4A90E2]"
                                  : index === 1
                                  ? "text-[#27BD9C]"
                                  : "text-[#E35050]"
                              }`}
                            >
                              {index + 1}
                            </span>
                            <div className="media-left flex items-center">
                              <div className="song-thumb">
                                <figure className=" is-60x60">
                                  <img
                                    src={item?.thumbnailM}
                                    alt={item?.thumbnailM}
                                  />
                                </figure>
                                <div className="group-hover:visible opacityy"></div>
                                <div className="zm-actions group-hover:visible">
                                  <span>
                                    <i className="fa-solid fa-play fa-lg"></i>
                                  </span>
                                </div>
                              </div>
                              <div className="card-info">
                                <div className="title-wrapper">
                                  <span>{item?.title}</span>
                                </div>
                                <h3 className="is-one-line is-truncate subtitle">
                                  {item?.artistsNames}
                                </h3>
                              </div>
                            </div>
                            <div className="media-right ">
                              <span>
                                {Math.round(
                                  (+item?.score * 100) /
                                    +dataTrendding?.chart?.totalScore
                                )}
                                %
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Fragment>
                );
              })}
            <Link
              to="/zing-chart"
              className="text-white text-center mt-8 w-fit mx-auto border border-white border-solid rounded-full px-4 py-2"
            >
              Xem thêm
            </Link>
          </div>
          <div className="flex-6">
            {data && <ChartZm options={options} data={data} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ChartSection);
