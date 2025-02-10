/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { memo, useState } from "react";
import "./trendding.css";
import ListTrend from "../listtrend/ListTrend";
import SkeletonTRending from "../Loading/SkeletonLoading/SkeletonTRending";

// eslint-disable-next-line react-refresh/only-export-components
const Trendding = ({ dataTrendding }) => {
  const [option, setOption] = useState("all");
  const items = dataTrendding.items || {};

  const dataTrends = items[option]?.slice(0, 12) || [];

  return (
    <div className="zm-section pt-[2rem]">
      <h3 className="title-playlist">{dataTrendding.title}</h3>
      <div className="mb-[16px] flex justify-between">
        {/* <div className="flex">
          {["all", "vPop", "others"].map((type) => (
            <button
              key={type}
              className={`hover:text-[#eee] zm-bt ${
                option === type ? "active" : ""
              }`}
              onClick={() => setOption(type)}
            >
              {type === "all"
                ? "Tất cả"
                : type === "vPop"
                ? "Việt Nam"
                : "Quốc tế"}
            </button>
          ))}
        </div> */}
        {dataTrends.length !== 0 ? (
          <div className="flex">
            {["all", "vPop", "others"].map((type) => (
              <button
                key={type}
                className={`hover:text-[#eee] zm-bt ${
                  option === type ? "active" : ""
                }`}
                onClick={() => setOption(type)}
              >
                {type === "all"
                  ? "Tất cả"
                  : type === "vPop"
                  ? "Việt Nam"
                  : "Quốc tế"}
              </button>
            ))}
          </div>
        ) : (
          <div className="flex items-center space-x-4 ">
            <span className="w-[5rem] h-6 bg-gray-200 animate-pulse rounded-xl" />
            <span className="w-[5rem] h-6 bg-gray-200 animate-pulse rounded-xl" />
            <span className="w-[5rem] h-6 bg-gray-200 animate-pulse rounded-xl" />
          </div>
        )}
        {dataTrends.length !== 0 ? (
          <a
            href="#"
            className="showall block hover:text-[#c273ed] align-middle"
          >
            Tất cả
            <i className="fa-solid fa-angle-right fa-lg ml-2" />
          </a>
        ) : (
          <span className="w-[5rem] h-6 bg-gray-200 animate-pulse rounded-xl" />
        )}
      </div>
      <div className="zm-list-trendding">
        {dataTrends.length === 0 ? (
          <SkeletonTRending />
        ) : (
          <div id="list" className="zm-trendding-inner flex flex-wrap">
            <ListTrend trends={dataTrends} />
          </div>
        )}
      </div>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default memo(Trendding);
