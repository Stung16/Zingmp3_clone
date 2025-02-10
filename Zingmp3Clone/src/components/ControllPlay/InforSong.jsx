/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import LoadingAudio from "../Loading/LoadingAudio";
import { MdOutlineMoreHoriz } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { useEffect, useState } from "react";
import { getInforSong } from "../../services/music.services";
import { useDispatch } from "react-redux";
import { songSlices } from "../../stores/slices/songSlices";
const { updateCurrentSongItem } = songSlices.actions;

export default function InforSong({ loading, currentSongID }) {
  const dispatch = useDispatch();
  const [songinfo, setSonginfo] = useState(null);
  useEffect(() => {
    if (currentSongID) {
      const fetchInfor = async () => {
        try {
          const res = await getInforSong(currentSongID);
          if (res.err === 0) {
            setSonginfo(res.data);
            dispatch(updateCurrentSongItem(res.data));
          }
        } catch (error) {
          console.log(error);
        }
      };
      fetchInfor();
    }
  }, [currentSongID, dispatch]);

  return (
    <div className="player-controls-left">
      <div className="player-controls-left_inner">
        <div className="zm-media_control">
          <div className="media-left">
            <a href="#" className="overflow-hidden relative">
              {loading ? (
                <div className="size-[4rem] bg-gray-200 animate-pulse rounded-lg" />
              ) : (
                <figure className="size-[4rem] rounded-[4px] overflow-hidden relative">
                  <img src={songinfo?.thumbnailM} alt="" />
                </figure>
              )}
            </a>
          </div>
          <div className="media-content">
            {loading ? (
              <div className="w-[10rem] h-5 bg-gray-200 animate-pulse rounded-lg" />
            ) : (
              <div className="name-song_now">
                <span className="name break-words line-clamp-1 pr-4">
                  {songinfo?.title}
                  {/* Nỗi Buồn Em Đánh Rơi (Soundtrack from Nụ Hôn Bạc Tỷ The Movie) */}
                </span>
              </div>
            )}
            {loading ? (
              <div className="w-[6rem] h-4 bg-gray-200 animate-pulse rounded-md mt-2" />
            ) : (
              <h3 className="text-white name-singer_now">
                <p className="mr-1">
                  {songinfo?.artistsNames}
                  {/* Trà My Idol */}
                </p>
              </h3>
            )}
          </div>
          <div className="media-right">
            <div className="flex justify-center items-center">
              <div className="flex-grow-[1] p-[3px] w-8 h-8 flex justify-center items-center">
                <FaRegHeart className="text-white" />
              </div>
              <div className="flex-grow-[1] p-[3px] w-8 h-8 flex justify-center items-center">
                <MdOutlineMoreHoriz className="text-white text-[18px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
