import React, { useEffect, useState } from "react";
import "./Bar_RightMusic.css";
import ListSongBarRight from "../ListSong/ListSongBarRight";
import SongItemBarRightNow from "../SongItem/SongItemBarRightNow";

const Bar_RightMusic = () => {
  return (
    <div className="relative">
      <input className="hidden" type="checkbox" id="check" defaultChecked />
      <label
        htmlFor="check"
        className="zm-list-music ml-1 mr-5 relative p-[5px] check-span flex justify-center items-center rounded-sm cursor-pointer"
      >
        <i className="text-white fa-solid fa-music"></i>
      </label>
      <div className="bar-right overflow-x-hidden">
        <div className="bar-right_header">
          <div className="bar-right_header_inner">
            <div className="inner-left">
              <input id="list" className="hidden" type="radio" name="isCheck" defaultChecked />
              <label htmlFor="list" className="lv-item ">
                <h6>Danh sách phát</h6>
              </label>
              <input
                id="history"
                className="hidden"
                type="radio"
                name="isCheck"
              />
              <label htmlFor="history" className="lv-item ">
                <h6 className="has-text-white">Nghe gần đây</h6>
              </label>
            </div>

            <div className="innner-right flex justify-center items-center gap-[5px]">
              <span className="flex justify-center items-center p-2 bg-overlay rounded-full">
                <i className="text-[#d1cfd4] fa-regular fa-clock"></i>
              </span>
              <span className="flex justify-center items-center p-2 bg-overlay  rounded-full">
                <i className="text-[#d1cfd4] fa-solid fa-ellipsis"></i>
              </span>
            </div>
          </div>
        </div>

        <div className="bar-right_body px-2">
          <SongItemBarRightNow />
          <div className="listSong">
            <ListSongBarRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bar_RightMusic;
