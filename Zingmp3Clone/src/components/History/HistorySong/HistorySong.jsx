import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { songSlices } from "../../../stores/slices/songSlices";
const { updateLoading } = songSlices.actions;
import { getTime } from "../../../utils/fn";
import Update from "../../Helper/Update";

const HistorySong = () => {
  const dispatch = useDispatch();
  const historyMusics = useSelector((state) => state.songValues.history);
  const [historys, setHistorys] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      if (historyMusics?.length) {
        const datalocal = JSON.parse(localStorage.getItem("history"));
        dispatch(updateLoading(true));
        setHistorys(datalocal);
        dispatch(updateLoading(false));
      }
    };
    fetch();
  }, [historyMusics]);
  return (
    <div>
      {historyMusics?.length ? (
        <div>
          {historys?.reverse()?.map((item, index) => {
            return (
              <div className="group" key={index}>
                <div
                  className={`flex relative select-item group-hover:bg-[hsla(0,0%,100%,0.1)]`}
                  onClick={() => {
                    //   dispatch(updateCurrentSong(song?.encodeId));
                    //   dispatch(checkPlay(true));
                    //   dispatch(updateNext(true));
                    //   dispatch(updatePrev(true));
                    //   dispatch(pushHistory(song?.encodeId));
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
                          <figure
                            className="image is-40x40 relative"
                            title="Tết Ổn Rồi"
                          >
                            <img
                              className="w-10 h-10"
                              src={item?.thumbnailM}
                              alt=""
                            />
                            <div className="absolute inset-0 bg-[#33333385] hidden group-hover:block ">
                              <span className="flex absolute top-1/2 left-1/2 -translate-x-1/2">
                                <i className="text-white fa-solid fa-play fa-lg"></i>
                              </span>
                            </div>
                          </figure>
                          <div className="opcityyy invisible"></div>
                        </div>
                        <div className="cart-inffor">
                          <h3 className="text-white">{item?.nameSong}</h3>
                          <div className="artists">
                            <p className="is-ghost">{item?.artistsNames}</p>
                          </div>
                        </div>
                      </div>
                      <div className="media-content">
                        <div className="album-info">
                          <span>{item?.albumTitle}</span>
                        </div>
                      </div>
                      <div className="media-right-album ">
                        <span className="duration flex group-hover:hidden text-white">
                          {getTime(item?.duration)}
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
              </div>
            );
          })}
        </div>
      ) : (
        <Update />
      )}
    </div>
  );
};

export default HistorySong;
