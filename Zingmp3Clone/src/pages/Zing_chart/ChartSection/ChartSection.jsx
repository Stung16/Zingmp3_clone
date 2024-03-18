import React, { Fragment, memo, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js/auto";
import { useSelector } from "react-redux";
import { options } from "../../../utils/fn";
import ChartZm from "../../../components/ChartZm/ChartZm";

const ChartSection = ({ dataTrendding }) => {

  const listTrendding = dataTrendding?.trendding_VN;
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
        <div className="flex gap-4">
          <div className="flex-4">
            {listTrendding
              ?.filter((i, index) => index < 3)
              ?.map((item, index) => {
                const singers = item?.singer;
                return (
                  <Fragment key={index}>
                    <div className="px-[15px] w-full">
                      <div className="group">
                        <div className=" media-item rounded-md  group-hover:bg-[#ffffff1a]">
                          <div className=" media">
                            <div className="media-left">
                              <div
                                data-value={item.audio}
                                className="song-thumb"
                              >
                                <figure
                                  className=" is-60x60"
                                  title={item?.nameSong}
                                >
                                  <img src={item?.img} alt={item?.nameSong} />
                                </figure>
                                <div
                                  className="group-hover:visible opacityy"
                                  data-value={item.audio}
                                ></div>
                                <div className="zm-actions group-hover:visible">
                                  <span>
                                    <i
                                      className="fa-solid fa-play fa-lg"
                                      data-value={item.audio}
                                    ></i>
                                  </span>
                                </div>
                              </div>
                              <div className="card-info">
                                <div className="title-wrapper">
                                  <span>{item?.nameSong}</span>
                                </div>
                                <h3 className="is-one-line is-truncate subtitle">
                                  {Object.keys(singers).map((i, c) => {
                                    return (
                                      <a
                                        key={c}
                                        className="singer-name hover:text-[#9b4de0]"
                                        href="#"
                                      >
                                        {`${singers[i]}, `}
                                      </a>
                                    );
                                  })}
                                </h3>

                                <div className="time-release">
                                  <span>{item?.time}</span>
                                </div>
                              </div>
                            </div>
                            <div className="media-right invisible group-hover:visible">
                              <i className=" text-white cursor-pointer fa-solid fa-ellipsis fa-sm mr-3 flex justify-center items-center w-9 h-9 hover:bg-[#ffffff1a] rounded-full "></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Fragment>
                );
              })}
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
