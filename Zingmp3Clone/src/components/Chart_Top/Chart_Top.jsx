/* eslint-disable react/prop-types */
import { useState } from "react";
import "./chart_top.css";
import { getTime } from "../../utils/fn";
import { songSlices } from "../../stores/slices/songSlices";
import { useDispatch } from "react-redux";
const { updateCurrentSong, checkPlay } = songSlices.actions;
import { FaPlay } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { GiMicrophone } from "react-icons/gi";
import { MdOutlineMoreHoriz } from "react-icons/md";

const Chart_Top = ({ data }) => {
  const arrSuggest = data?.promotes;
  const [option, setOptions] = useState(false);
  let number;
  if (option === true) {
    number = 100;
  } else {
    number = 10;
  }
  const top10 = data?.items?.slice(0, number);
  const lengthArr = arrSuggest?.length;
  const randomIndex = Math.floor(Math.random() * lengthArr);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="suggest group">
        <div className="border_b">
          <div className="media group-hover:bg-[#ffffff1a]">
            <div className="media-leftt">
              <div className="chart-suggest">
                <span>Gợi ý</span>
              </div>
              <div className="song-thumb">
                <img src={arrSuggest?.[randomIndex]?.thumbnailM} alt="" />
                <div className="hidden overlayy group-hover:block">
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden group-hover:block">
                    <FaPlay className="text-white text-[20px]" />
                  </span>
                </div>
              </div>
              <div className="cart-info">
                <div className="name-song break-words line-clamp-1 pr-3">
                  <span>{arrSuggest?.[randomIndex]?.title}</span>
                </div>
                <div className="name-atirt">
                  <span>{arrSuggest?.[randomIndex]?.artistsNames}</span>
                </div>
              </div>
            </div>
            <div className="media-content">
              <div className="album-info">
                <span className="cursor-pointer break-words line-clamp-1">
                  {arrSuggest?.[randomIndex]?.album?.title}
                </span>
              </div>
            </div>
            <div className="media-rightt">
              <div className="gap-8 mr-4 hidden group-hover:flex">
                <span>
                  <GiMicrophone className="text-white text-[18px] cursor-pointer" />
                </span>
                <span>
                  <FaRegHeart className="text-white text-[18px] cursor-pointer" />
                </span>
                <span>
                  <MdOutlineMoreHoriz className="text-white text-[19px] cursor-pointer" />
                </span>
              </div>
              <span className="group-hover:hidden">
                {getTime(arrSuggest?.[randomIndex]?.duration)}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="list_chart">
        {top10 &&
          top10?.map((item, index) => {
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
                            <FaPlay className="text-white text-[18px]" />
                          </span>
                        </div>
                      </div>
                      <div className="cart-info">
                        <div className="name-song break-words line-clamp-1 pr-4">
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
                          <GiMicrophone className="text-white text-[18px] cursor-pointer" />
                        </span>
                        <span>
                          <FaRegHeart className="text-white text-[18px] cursor-pointer" />
                        </span>
                        <span>
                          <MdOutlineMoreHoriz className="text-white text-[19px] cursor-pointer" />
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
        <div className="mt-5 mb-5 w-full flex justify-center items-center">
          <button
            className="btn-top100 hover:bg-[hsla(0,0%,100%,0.1)]"
            onClick={() => {
              setOptions(!option);
            }}
          >
            {option === 100 ? "ẩn bớt" : "Xem top 100"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chart_Top;
