import React from "react";

import { songSlices } from "../../../stores/slices/songSlices";
const { updateCurrentSong,checkPlay } = songSlices.actions;
import { useDispatch,useSelector } from "react-redux";
import { customText } from "../../../utils/fn";

const SongItemBarRightItem = ({ data }) => {
  if (!data) return null;
  const currentSongID = useSelector((state) => state.songValues.currentSongID);
  const dispatch = useDispatch()
  const listSong = data?.items;
  return (
    <>
      {listSong?.map((item, index) => {
        return (
          <div key={index} className="songnow group">
            <div className={`song-item ${currentSongID === item?.encodeId ? "bg-[#2f2739]" : "group-hover:bg-[hsla(0,0%,100%,0.1)]"}`}>
              <div className="media-left flex items-center">
                <div className="song-thumb" onClick={() => {
                  dispatch(updateCurrentSong(item?.encodeId))
                  dispatch(checkPlay(true));
                }}>
                  <img className="w-10 h-10" src={item?.thumbnailM} alt="" />
                  <div className="group-hover:visible opacityy"></div>
                  <div className="zm-actions group-hover:visible">
                    <span>
                      <i className="text-white fa-solid fa-play fa-lg"></i>
                    </span>
                  </div>
                </div>
                <div className="card-info">
                  <div className="name-song">{customText(item?.title,20)}</div>
                  <div className="subtitle">{item?.artistsNames}</div>
                </div>
              </div>
              <div className="media-right  gap-3 mr-3 hidden group-hover:flex">
                <span className="flex justify-center items-center p-[5px] rounded-full hover:bg-[#d1cfd48d]">
                  <i className="text-white fa-regular fa-heart"></i>
                </span>
                <span className="flex justify-center items-center p-[5px] rounded-full hover:bg-[#d1cfd48d]">
                  <i className="text-white fa-solid fa-ellipsis"></i>
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default SongItemBarRightItem;
