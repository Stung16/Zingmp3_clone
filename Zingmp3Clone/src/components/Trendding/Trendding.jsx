import React, { memo, useEffect, useState } from "react";
import "./trendding.css";
import { songSlices } from "../../stores/slices/songSlices";
const { updateListTrend } = songSlices.actions;
import { useDispatch } from "react-redux";
import ListTrend from "../listtrend/ListTrend";
import SkeletonTRending from "../Loading/SkeletonLoading/SkeletonTRending";

const Trendding = ({ dataTrendding }) => {
  if (!dataTrendding) return null;

  const [option, setOPtion] = useState("all");
  const dataTrends = dataTrendding?.items[option].slice(0, 12);
  return (
    <div className="zm-section">
      <h3 className="title-playlist">{dataTrendding?.title}</h3>
      <div className="mb-[16px] flex justify-between">
        <div className="flex">
          <button
            className={`hover:text-[#eee] zm-bt ${
              option === "all" ? "active" : ""
            } `}
            onClick={() => {
              setOPtion("all");
            }}
          >
            Tất cả
          </button>
          <button
            className={`hover:text-[#eee] zm-bt ${
              option === "vPop" ? "active" : ""
            } `}
            onClick={() => {
              setOPtion("vPop");
            }}
          >
            Việt Nam
          </button>
          <button
            className={`hover:text-[#eee] zm-bt ${
              option === "others" ? "active" : ""
            } `}
            onClick={() => {
              setOPtion("others");
            }}
          >
            Quốc tế
          </button>
        </div>
        <a href="#" className="showall block hover:text-[#c273ed] align-middle">
          Tất cả
          <i className="fa-solid fa-angle-right fa-lg ml-2 " />
        </a>
      </div>
      <div className="zm-list-trendding">
        <div id="list" className="zm-trendding-inner flex flex-wrap">
          <ListTrend trends={dataTrends} />
        </div>
        {!dataTrendding && <SkeletonTRending />}
      </div>
    </div>
  );
};

export default memo(Trendding);
