import React, { memo, useEffect, useState } from "react";
import "./trendding.css";
import { songSlices } from "../../stores/slices/songSlices";
const { updateListTrend } = songSlices.actions;
import { useDispatch } from "react-redux";
import ListTrend from "../listtrend/ListTrend";

const Trendding = ({ dataTrendding }) => {
  const dispatch = useDispatch();
  const [trend, setTrend] = useState("all");
  useEffect(()=>{
    dispatch(updateListTrend(dataTrendding?.items?.all?.slice(0, 12)))
  },[dataTrendding])
  return (
    <div className="zm-section">
      <h3 className="title-playlist">{dataTrendding?.title}</h3>
      <div className="mb-[16px] flex justify-between">
        <div className="flex">
          <button
            className={`hover:text-[#eee] zm-bt ${
              trend === "all" ? "active" : ""
            } `}
            onClick={() => {
              dispatch(
                updateListTrend(dataTrendding?.items?.all?.slice(0, 12))
              );
              setTrend("all");
            }}
          >
            Tất cả
          </button>
          <button
            className={`hover:text-[#eee] zm-bt ${
              trend === "vPop" ? "active" : ""
            } `}
            onClick={() => {
              dispatch(
                updateListTrend(dataTrendding?.items?.vPop?.slice(0, 12))
              );
              setTrend("vPop");
            }}
          >
            Việt Nam
          </button>
          <button
             className={`hover:text-[#eee] zm-bt ${
              trend === "others" ? "active" : ""
            } `}
            onClick={() => {
              dispatch(
                updateListTrend(dataTrendding?.items?.others?.slice(0, 12))
              );
              setTrend("others");
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
          <ListTrend />
        </div>
      </div>
    </div>
  );
};

export default memo(Trendding);
