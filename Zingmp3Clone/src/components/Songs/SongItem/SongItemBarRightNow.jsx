import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import { customText } from "../../utils/fn";
import { getInforSong } from "../../../services/music.services";
import { customText } from "../../../utils/fn";

const SongItemBarRightNow = () => {
  const currentSongID = useSelector((state) => state.songValues.currentSongID);
  const isPlay = useSelector((state) => state.songValues.status);
  const [songinfo, setSonginfo] = useState({});

  useEffect(() => {
    try {
      const fetch = async () => {
        const data = await getInforSong(currentSongID);
        if (data?.err === 0) {
          setSonginfo(data.data);
        }
      };
      fetch();
    } catch (error) {
      console.log(error);
    }
  }, [currentSongID]);
  return (
    <div>
      <div className="songnow">
        <div className="song-item active group relative">
          <div className="media-left flex items-center">
            <div className="song-thumb">
              <img className="w-10 h-10" src={songinfo?.thumbnailM} alt="" />
              <div className="visible opacityy"></div>
              <div className="zm-actions visible">
                <span>
                  {isPlay ? (
                    <i className="fa-solid fa-pause text-white fa-lg"></i>
                  ) : (
                    <i className="text-white fa-solid fa-play fa-lg"></i>
                  )}
                </span>
              </div>
            </div>
            <div className="card-info">
              <div className="name-song">{customText(songinfo?.title, 20)}</div>
              <div className="subtitle">{songinfo?.artistsNames}</div>
            </div>
          </div>
          <div className="media-right hidden group-hover:flex gap-3 mr-3">
            <span className="flex justify-center items-center p-[5px] rounded-full hover:bg-[#d1cfd48d]">
              <i className="text-white fa-regular fa-heart"></i>
            </span>
            <span className="flex justify-center items-center p-[5px] rounded-full hover:bg-[#d1cfd48d]">
              <i className="text-white fa-solid fa-ellipsis"></i>
            </span>
          </div>
        </div>
      </div>
      <div className="title">
        <h3 className="mb-1">Tiếp theo</h3>
        <span>
          Từ playlist <a href="#">{customText(songinfo?.album?.title, 20)}</a>
        </span>
      </div>
    </div>
  );
};

export default SongItemBarRightNow;
