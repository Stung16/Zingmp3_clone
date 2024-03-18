import React from "react";
import { getTime } from "../../utils/fn";
import { useDispatch } from "react-redux";

import { songSlices } from "../../stores/slices/songSlices";
const { updateCurrentSong, updateNext, checkPlay, updatePrev, pushHistory } =
  songSlices.actions;

const SongMedia = ({ song }) => {

  const dispatch = useDispatch();
  return (
    <div
      className={`flex relative select-item group`}
      onClick={() => {
          dispatch(updateCurrentSong(song?.encodeId));
          dispatch(checkPlay(true));
          dispatch(updateNext(true));
          dispatch(updatePrev(true));

          
      }}
    >
      <div className="checkbox-w hidden group-hover:flex">
        <label className="checkbox">
          <input className="w-[15px] h-[15px]" type="checkbox" />
        </label>
      </div>
      <div className="media-item">
        <div className="media">
          <div className="media-left-album">
            <div className="song-prfix group-hover:visible">
              <i className="fa-solid fa-music"></i>
            </div>
            <div className="song-thumb">
              <figure className="image is-40x40 relative" title="Tết Ổn Rồi">
                <img className="w-10 h-10" src={song?.thumbnailM} alt="" />
                <div className="absolute inset-0 bg-[#33333385] hidden group-hover:block ">
                  <span className="flex absolute top-1/2 left-1/2 -translate-x-1/2">
                    <i className="fa-solid fa-play fa-lg"></i>
                  </span>
                </div>
              </figure>
              <div className="opcityyy invisible"></div>
            </div>
            <div className="cart-inffor">
              <h3 className="text-white">{song?.title}</h3>
              <div className="artists">
                <p className="is-ghost">{song?.artists}</p>
              </div>
            </div>
          </div>
          <div className="media-content">
            <div className="album-info">
              <span>{song?.album?.title}</span>
            </div>
          </div>
          <div className="media-right-album ">
            <span className="duration flex group-hover:hidden">
              {getTime(song?.duration)}
            </span>
            <div className="gap-8 mr-4 hidden group-hover:flex">
              <span>
                <i className="text-white fa-solid fa-microphone"></i>
              </span>
              <span>
                <i className="text-white fa-regular fa-heart"></i>
              </span>
              <span>
                <i className="text-white fa-solid fa-ellipsis"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SongMedia;
