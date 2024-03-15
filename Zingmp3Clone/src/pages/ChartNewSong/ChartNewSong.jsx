import React from "react";
import { useState, useEffect } from "react";
import { getNewReleaseChart } from "../../api/music";
import { useDispatch, useSelector } from "react-redux";
import { songSlices } from "../../stores/slices/songSlices";
const { updateLoading,updateCurrentSong,checkPlay } = songSlices.actions;
import { getTime } from "../../utils/fn";
import "./chartnewsong.css";

const ChartNewSong = () => {
  const [dataChart, setDataChart] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      dispatch(updateLoading(true));
      const data = await getNewReleaseChart();
      if (data) {
        setDataChart(data?.data?.items);
        dispatch(updateLoading(false));
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <div className="mb-[32px] title-newchart pt-10 ml-2">
        <h1 className="text-white mr-2">BXH Nhạc Mới</h1>
        <span>
          <i className="text-white text-[35px] fa-solid fa-circle-play"></i>
        </span>
      </div>
      <div className="list_chart">
        {dataChart &&
          dataChart?.map((item, index) => {
            return (
              <div key={index} className="overflow-hidden rounded p-[10px]">
                <div className="border_b group">
                  <div className="media group-hover:bg-[#ffffff1a]">
                    <div className="media-leftt">
                      <div className="flex justify-center items-center mr-[15px] gap-5 w-[104px]">
                        <span
                          className={`text-white ml-2 number top${index + 1}`}
                        >
                          {index + 1}
                        </span>
                        <div className="block bg-white w-5 h-[2px]"></div>
                      </div>
                      <div
                        className="song-thumb"
                        onClick={() => {
                          dispatch(updateCurrentSong(item?.encodeId));
                          dispatch(checkPlay(true));
                        }}
                      >
                        <img src={item?.thumbnailM} alt="" />
                        <div className="hidden overlayy group-hover:block">
                          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden group-hover:block">
                            <i className="text-white fa-solid fa-play fa-lg"></i>
                          </span>
                        </div>
                      </div>
                      <div className="cart-info">
                        <div className="name-song">
                          <span>{item?.title}</span>
                        </div>
                        <div className="name-atirt">
                          <span>{item?.artistsNames}</span>
                        </div>
                      </div>
                    </div>
                    <div className="media-content">
                      <div className="album-info">
                        <span className="cursor-pointer">
                          {item?.album?.title}
                        </span>
                      </div>
                    </div>
                    <div className="media-rightt">
                      <div className="gap-8 mr-4 hidden group-hover:flex">
                        <span>
                          <i className="text-white fa-solid fa-microphone cursor-pointer"></i>
                        </span>
                        <span>
                          <i className="text-white fa-regular fa-heart cursor-pointer"></i>
                        </span>
                        <span>
                          <i className="text-white fa-solid fa-ellipsis cursor-pointer"></i>
                        </span>
                      </div>
                      <span className="group-hover:hidden">
                        {getTime(item?.duration)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ChartNewSong;
