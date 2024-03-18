import React, { useEffect, useState } from "react";
import moment from "moment";
import { useParams } from "react-router-dom";
import "./album.css";
import { useSelector, useDispatch } from "react-redux";
import { songSlices } from "../../stores/slices/songSlices";
import PlayMusic from "../../components/Helper/PlayMusic/PlayMusic";
import { customText } from "../../utils/fn";
import ListSong from "../../components/Songs/ListSong/ListSong";
import { getDetailPlaylist } from "../../services/music.services";
const { checkPlay, getListSong, updateLoading } = songSlices.actions;

const Album = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const isPlay = useSelector((state) => state.songValues.status);
  const [playListData, setPlayListData] = useState(null);
  const currentSongID = useSelector((state) => state.songValues.currentSongID);
  const codeAlbum = localStorage.getItem("codeAlbum");
  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(updateLoading(true));
        const dataRespone = await getDetailPlaylist(id);
        dispatch(getListSong(dataRespone?.data?.song));
        setPlayListData(dataRespone?.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        dispatch(updateLoading(false));
      }
    };
    fetchData();
    return () => {
      localStorage.removeItem("codeAlbum");
    };
  }, [id]);
  return (
    <div className="pt-5 text-white album-playlist">
      <div className="relative pt-5">
        <div className="absolute left-0 w-[300px] flex flex-col album-playlist-left">
          <div className="overflow-hidden rounded-md group relative">
            <img
              className="bg-cover w-[300px] h-[300px] group-hover:scale-110 ease-out duration-700"
              src={playListData?.thumbnailM}
              alt=""
            />
            <div className={`group-hover:visible opacityy`}></div>
            <div
              className={`zm-actions  ${
                codeAlbum === playListData?.encodeId
                  ? "visible"
                  : "group-hover:visible"
              }`}
            >
              <span>
                {codeAlbum === playListData?.encodeId && isPlay ? (
                  // <i className="text-white fa-solid fa-pause fa-xl"></i>
                  <PlayMusic />
                ) : (
                  <i className=" absolute  -translate-x-1/2 fa-solid fa-play fa-2xl"></i>
                )}
              </span>
            </div>
          </div>
          <div className="text-center mt-3 w-full">
            <h3 className="title-album">{playListData?.title}</h3>
            <div className="update">
              cập nhật:{" "}
              <span>
                {moment
                  .unix(playListData?.contentLastUpdate)
                  .format("DD/MM/YYYY")}
              </span>
            </div>
            <div className="artists">
              <p className="is-ghost">{playListData?.artistsNames}</p>
            </div>

            <div className="like">{`${Math.round(
              playListData?.like / 1000
            )}K người yêu thích`}</div>
          </div>
          <div className="mt-4 flex flex-col justify-center w-max mx-auto">
            <button
              className="btn-action"
              onClick={() => {
                dispatch(checkPlay(!isPlay));
              }}
            >
              {isPlay ? (
                <span>
                  <i className="fa-solid fa-pause fa-lg mr-3"></i>
                  TẠM DỪNG
                </span>
              ) : (
                <span>
                  <i className="fa-solid fa-play"></i>
                  TIẾP TỤC PHÁT
                </span>
              )}
            </button>
            <div className="flex mx-auto gap-3">
              <div className=" p-[3px] w-[35px] h-[35px] flex justify-center items-center rounded-full bg-[hsla(0,0%,100%,0.1)]">
                <i className="text-white fa-regular fa-heart"></i>
              </div>
              <div className=" p-[3px] w-[35px] h-[35px] flex justify-center items-center rounded-full bg-[hsla(0,0%,100%,0.1)]">
                <i className="text-white fa-solid fa-ellipsis"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="ml-[350px]">
          <div>
            <span className="text-[hsla(0,0%,100%,0.5)]">Lời tựa</span>{" "}
            <span className="mb-[10px]">
              <span className="text-white">
                {customText(playListData?.sortDescription, 90)}
              </span>
            </span>
          </div>

          <div className="songsAlbum">
            <div className="header-songalbum">
              <div className="head-left">
                <div className="flex items-center">
                  <div className="mr-[10px]">
                    <i className="text-[hsla(0,0%,100%,0.5)] fa-solid fa-retweet"></i>
                  </div>
                  <div className="header-name">Bài hát</div>
                </div>
              </div>
              <div className="head-center">
                <div className="album">ALBUM</div>
              </div>
              <div className="head-right">
                <div className="album">thời gian</div>
              </div>
            </div>
            <ListSong />
          </div>

          <div className="bootom-infor"></div>
        </div>
      </div>
    </div>
  );
};

export default Album;
