/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { memo } from "react";
import moment from "moment";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { songSlices } from "../../../stores/slices/songSlices";
import { getTime } from "../../../utils/fn";
const { updateCurrentSong, updateNext, checkPlay, updatePrev, pushHistory } =
  songSlices.actions;

const ListSong = ({ loading }) => {
  const currentSongID = useSelector((state) => state.songValues.currentSongID);
  const songs = useSelector((state) => state.songValues.songs);
  const isPlay = useSelector((state) => state.songValues.status);

  const listSOng = songs?.items;
  const dispatch = useDispatch();
  return (
    <div className="h-full mb-[300px] ">
      {listSOng?.map((song, index) => {
        return (
          <div key={index} className="group">
            <div
              className={`flex relative  ${
                currentSongID === song?.encodeId
                  ? "bg-[#2f2739]"
                  : "group-hover:bg-[#2f2739]"
              }`}
              onClick={() => {
                dispatch(updateCurrentSong(song?.encodeId));
                dispatch(checkPlay(true));
                // dispatch(updateNext(true));
                // dispatch(updatePrev(true));
                // dispatch(
                //   pushHistory({
                //     thumbnailM: song?.thumbnailM,
                //     artistsNames: song?.artistsNames,
                //     nameSong: song?.title,
                //     duration: song?.duration,
                //     albumTitle: song?.album?.title,
                //   })
                // );
              }}
            >
              <div className={`checkbox-w hidden group-hover:flex`}>
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
                        title={song?.thumbnail}
                      >
                        <img src={song?.thumbnail} alt="" />
                        <div
                          className={`absolute inset-0 bg-[#33333385]   ${
                            currentSongID === song?.encodeId
                              ? "block"
                              : "hidden group-hover:block"
                          } `}
                        >
                          <span className="flex absolute top-1/2 left-1/2 -translate-x-1/2 z-20">
                            {currentSongID === song?.encodeId && isPlay ? (
                              // <i className="text-white fa-solid fa-pause fa-xl"></i>
                              <i className="text-white fa-solid fa-pause fa-lg"></i>
                            ) : (
                              <i className="text-white fa-solid fa-play fa-lg"></i>
                            )}
                          </span>
                        </div>
                      </figure>
                      <div
                        className={`opcityyy visible ${
                          currentSongID === song?.encodeId
                            ? "visible"
                            : "invisible"
                        }`}
                      ></div>
                    </div>
                    <div className="cart-inffor">
                      <h3 className="break-words line-clamp-1">
                        {song?.title}
                      </h3>
                      <div className="artists">
                        <p className="break-words line-clamp-1">
                          {song?.artistsNames}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="media-content break-words line-clamp-1">
                    <span className="">{song?.album?.title}</span>
                  </div>
                  <div className="media-right-album ">
                    <span className="duration flex group-hover:hidden">
                      {getTime(song?.duration)}
                    </span>
                    <div className="gap-8 mr-4 hidden group-hover:flex">
                      <span>
                        <i className="text-white fa-solid fa-microphone"></i>
                      </span>
                      <span
                        className="cursor-pointer"
                        onClick={() => {
                          // dispatch(pushFavourite(song?.encodeId));
                          toast.warning("Chức sẽ sớm được hoàn thiện");
                          // handleCheckFavourite(song?.encodeId);
                        }}
                      >
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
      {loading ? (
        <div className="w-full h-auto mt-6 rounded-lg">
          <div className="flex flex-col items-center justify-center h-full">
            <div className="w-[95%] h-12 bg-gray-300 rounded animate-pulse mt-4" />
            <div className="w-[95%] h-12 bg-gray-300 rounded animate-pulse mt-4" />
            <div className="w-[95%] h-12 bg-gray-300 rounded animate-pulse mt-4" />
            <div className="w-[95%] h-12 bg-gray-300 rounded animate-pulse mt-4" />
            <div className="w-[95%] h-12 bg-gray-300 rounded animate-pulse mt-4" />
            <div className="w-[95%] h-12 bg-gray-300 rounded animate-pulse mt-4" />
            <div className="w-[95%] h-12 bg-gray-300 rounded animate-pulse mt-4" />
            <div className="w-[95%] h-12 bg-gray-300 rounded animate-pulse mt-4" />
            <div className="w-[95%] h-12 bg-gray-300 rounded animate-pulse mt-4" />
            <div className="w-[95%] h-12 bg-gray-300 rounded animate-pulse mt-4" />
            <div className="w-[95%] h-12 bg-gray-300 rounded animate-pulse mt-4" />
            <div className="w-[95%] h-12 bg-gray-300 rounded animate-pulse mt-4" />
          </div>
        </div>
      ) : (
        listSOng?.map((song, index) => {
          return (
            <div key={index} className="group">
              <div
                className={`flex relative  ${
                  currentSongID === song?.encodeId
                    ? "bg-[#2f2739]"
                    : "group-hover:bg-[#2f2739]"
                }`}
                onClick={() => {
                  dispatch(updateCurrentSong(song?.encodeId));
                  dispatch(checkPlay(true));
                  // dispatch(updateNext(true));
                  // dispatch(updatePrev(true));
                  // dispatch(
                  //   pushHistory({
                  //     thumbnailM: song?.thumbnailM,
                  //     artistsNames: song?.artistsNames,
                  //     nameSong: song?.title,
                  //     duration: song?.duration,
                  //     albumTitle: song?.album?.title,
                  //   })
                  // );
                }}
              >
                <div className={`checkbox-w hidden group-hover:flex`}>
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
                          title={song?.thumbnail}
                        >
                          <img src={song?.thumbnail} alt="" />
                          <div
                            className={`absolute inset-0 bg-[#33333385]   ${
                              currentSongID === song?.encodeId
                                ? "block"
                                : "hidden group-hover:block"
                            } `}
                          >
                            <span className="flex absolute top-1/2 left-1/2 -translate-x-1/2 z-20">
                              {currentSongID === song?.encodeId && isPlay ? (
                                // <i className="text-white fa-solid fa-pause fa-xl"></i>
                                <i className="text-white fa-solid fa-pause fa-lg"></i>
                              ) : (
                                <i className="text-white fa-solid fa-play fa-lg"></i>
                              )}
                            </span>
                          </div>
                        </figure>
                        <div
                          className={`opcityyy visible ${
                            currentSongID === song?.encodeId
                              ? "visible"
                              : "invisible"
                          }`}
                        ></div>
                      </div>
                      <div className="cart-inffor">
                        <h3 className="break-words line-clamp-1">
                          {song?.title}
                        </h3>
                        <div className="artists">
                          <p className="break-words line-clamp-1">
                            {song?.artistsNames}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="media-content break-words line-clamp-1">
                      <span className="">{song?.album?.title}</span>
                    </div>
                    <div className="media-right-album ">
                      <span className="duration flex group-hover:hidden">
                        {getTime(song?.duration)}
                      </span>
                      <div className="gap-8 mr-4 hidden group-hover:flex">
                        <span>
                          <i className="text-white fa-solid fa-microphone"></i>
                        </span>
                        <span
                          className="cursor-pointer"
                          onClick={() => {
                            // dispatch(pushFavourite(song?.encodeId));
                            toast.warning("Chức sẽ sớm được hoàn thiện");
                            // handleCheckFavourite(song?.encodeId);
                          }}
                        >
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
        })
      )}
      <div>
        {loading ? (
          <div className="w-[15rem] h-6 bg-gray-200 animate-pulse rounded-lg mt-2" />
        ) : (
          <p className="playlist-songs-info">
            <span>{`${songs?.total}bài hát`}</span> •{" "}
            <span>
              {moment.utc(songs?.totalDuration * 1000).format("h giờ m phút")}
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default memo(ListSong);
