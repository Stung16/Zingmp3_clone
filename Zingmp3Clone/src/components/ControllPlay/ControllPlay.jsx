import React, { memo, useEffect, useState, useRef } from "react";
import "./controllplay.css";

import { useSelector, useDispatch } from "react-redux";
import { songSlices } from "../../stores/slices/songSlices";
import { toast } from "react-toastify";
import { MdOutlineMoreHoriz } from "react-icons/md";
import { FaRegCirclePlay } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";

import Bar_RightMusic from "../Bar_RightMusic/Bar_RightMusic";
import LoadingAudio from "../Loading/LoadingAudio";
import { getInforSong, getSong } from "../../services/music.services";
const {
  checkPlay,
  updateCurrentSong,
  updateNext,
  updateIsVip,
  updatePrev,
  updateRepeat,
  updateShuffle,
} = songSlices.actions;

const ControllPlay = () => {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.songValues.songs);
  const audioEl = useRef(new Audio());
  const [source, setSource] = useState(null);
  const currentSongID = useSelector((state) => state.songValues.currentSongID);
  const isPlay = useSelector((state) => state.songValues.status);
  const isVip = useSelector((state) => state.songValues.isVip);
  const isNext = useSelector((state) => state.songValues.isNext);
  const isPrev = useSelector((state) => state.songValues.isPrev);
  const isRepeat = useSelector((state) => state.songValues.isRepeat);
  const isShuffle = useSelector((state) => state.songValues.isShuffle);
  let isDrag = false;
  let initialClientX;
  let initialValue = 0;
  let value;
  const [loading, setLoading] = useState(false);

  // const audioEl = useRef(new Audio());
  const [songinfo, setSonginfo] = useState(null);
  const [volume, setVolume] = useState(100);

  const alertWarring = () => {
    audioEl.current.pause();
    dispatch(checkPlay(false));
    toast.warning("Bài hát chỉ dành cho tài khoản VIP");
  };
  var handleUpdateValue = function (value) {
    progress_Ref.style.width = `${value}%`;
  };
  useEffect(() => {
    const fetchSong = async () => {
      try {
        setLoading(true);
        const [res1, res2] = await Promise.all([
          getInforSong(currentSongID),
          getSong(currentSongID),
        ]);
        if (res1.err === 0) {
          setSonginfo(res1.data);
        }
        if (res2.err === 0) {
          audioEl.current.pause();
          dispatch(checkPlay(false));
          dispatch(updateIsVip(false));
          handleUpdateValue(0);
          setSource(res2.data["128"]);
        }
        if (res2.err !== 0) {
          dispatch(updateIsVip(true));
          handleUpdateValue(0);
          audioEl.current.pause();
          // setAudio(new Audio());
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchSong();
  }, [currentSongID]);

  useEffect(() => {
    if (isVip) {
      return alertWarring();
    }
    audioEl.current.pause();
    audioEl.current.src = source;
    audioEl.current.load();

    if (!isPlay) audioEl.current.play();
  }, [currentSongID, source]);

  useEffect(() => {
    var progressBarWidth = progressBar_Ref.clientWidth;

    progressBar_Ref.addEventListener("mousedown", function (e) {
      if (e.which === 1) {
        var offsetX = e.offsetX;
        value = (offsetX * 100) / progressBarWidth;
        initialValue = value;
        initialClientX = e.clientX;
        isDrag = true;
        handleUpdateValue(value);

        var currentTime = (value / 100) * audioEl.current.duration;
        if (isNaN(currentTime) || !isFinite(currentTime)) return currentTime;
        currentTime_Ref.innerText = getTime(currentTime);
        audioEl.current.currentTime = currentTime;
        return currentTime;
      }
    });

    progressDot_Ref.addEventListener("mousedown", function (e) {
      e.stopPropagation();
      if (e.which === 1) {
        isDrag = true;
        initialClientX = e.clientX;
      }
    });

    document.addEventListener("mousemove", function (e) {
      if (isDrag) {
        var moveWidth = e.clientX - initialClientX;
        value = (moveWidth * 100) / progressBarWidth;
        value = initialValue + value;

        if (value < 0) {
          value = 0;
        }

        if (value > 100) {
          value = 100;
        }

        handleUpdateValue(value);

        var currentTime = (value / 100) * audioEl.current.duration;

        currentTime_Ref.innerText = getTime(currentTime);
      }
    });

    document.addEventListener("mouseup", function () {
      if (isDrag) {
        isDrag = false;
        initialValue = value;

        var CurrentTime = (value / 100) * audioEl.current.duration;
        if (isNaN(CurrentTime) || !isFinite(CurrentTime)) {
          return (audioEl.current.currentTime = 0);
        }
        return (audioEl.current.currentTime = CurrentTime);
      }
    });

    progressDot_Ref.addEventListener("mousemove", function (e) {
      e.stopPropagation();
    });

    //   // play nghe nhạc
    var getTime = function (seconds) {
      //Giây => Phút và giây
      var mins = Math.floor(seconds / 60);
      seconds -= mins * 60;
      seconds = Math.floor(seconds);

      return `${mins < 10 ? `0${mins}` : mins}:${
        seconds < 10 ? `0${seconds}` : seconds
      }`;
    };

    audioEl.current.addEventListener("loadeddata", function () {
      duration_Ref.innerText = getTime(audioEl.current.duration);
    });

    audioEl.current.addEventListener("timeupdate", function () {
      //Lấy ra tỷ lệ phần trăm dựa vào currentTime và duration
      var value =
        (audioEl.current.currentTime * 100) / audioEl.current.duration;

      if (!isDrag) {
        currentTime_Ref.innerText = getTime(audioEl.current.currentTime);

        handleUpdateValue(value);
      }
    });

    progressBar_Ref.addEventListener("mousemove", function (e) {
      var rate = (e.offsetX * 100) / progressBarWidth;
      audioEl.currentTime = (rate / 100) * audioEl.current.duration;
    });

    audioEl.current.addEventListener("play", function () {
      dispatch(checkPlay(true));
    });
    audioEl.current.addEventListener("pause", function () {
      dispatch(checkPlay(false));
    });

    audioEl.current.addEventListener("ended", function () {
      dispatch(checkPlay(false));
      handleUpdateValue(0);
      currentTime_Ref.innerText = "00:00";
    });
  }, [currentSongID]);

  useEffect(() => {
    audioEl.current.volume = volume / 100;
  }, [volume]);

  const handletongglePlay = () => {
    if (isPlay) {
      audioEl.current.pause();
      dispatch(checkPlay(false));
    } else {
      audioEl.current.play();
      dispatch(checkPlay(true));
    }
  };

  const handleNextSong = () => {
    if (songs) {
      let indexSongNow;
      let listSong = songs?.items;
      indexSongNow = listSong.indexOf(
        listSong?.find((item) => item?.encodeId === currentSongID)
      );
      if (indexSongNow !== -1) {
        if (+indexSongNow + 1 === +listSong.length) {
          dispatch(updateNext(false));
          return;
        }
        dispatch(updateCurrentSong(listSong[indexSongNow + 1]?.encodeId));
        dispatch(checkPlay(true));
      }
    }
  };

  const handlePrevSong = () => {
    if (songs) {
      let indexSongNow;
      let listSong = songs?.items;
      indexSongNow = listSong.indexOf(
        listSong?.find((item) => item?.encodeId === currentSongID)
      );
      if (indexSongNow !== -1) {
        if (+indexSongNow === 0) {
          dispatch(updatePrev(false));
          return;
        }
        dispatch(updateCurrentSong(listSong[indexSongNow - 1]?.encodeId));
        dispatch(checkPlay(true));
      }
    }
  };

  useEffect(() => {
    if (isShuffle) {
      if (songs) {
        let listSong = songs?.items;
        var random_integer = Math.floor(
          Math.random() * (+listSong?.length + 1)
        );
        audioEl.current.addEventListener("ended", function () {
          if (listSong?.[random_integer]?.encodeId) {
            dispatch(updateCurrentSong(listSong?.[random_integer]?.encodeId));
            dispatch(checkPlay(true));
            handleUpdateValue(0);
          }
        });
      }
    }

    if (isRepeat) {
      if (currentSongID) {
        audioEl.current.addEventListener("ended", function () {
          audioEl.current.play();
          dispatch(checkPlay(true));
          handleUpdateValue(0);
        });
      }
    }
  }, [songs, isShuffle, isRepeat]);

  // const handleShuffle = () => {
  //   if (songs) {
  //     let indexSongNow;
  //     let listSong = songs?.items;
  //     indexSongNow = listSong.indexOf(
  //       listSong?.find((item) => item?.encodeId === currentSongID)
  //     );
  //     if (indexSongNow !== -1) {
  //       if (+indexSongNow === 0) {
  //         dispatch(updatePrev(false));
  //         return;
  //       }
  //       // if (+indexSongNow === +listSong.length - 1) {
  //       //   dispatch(updateNext(false))
  //       //   return;
  //       // }
  //     }
  //   }
  // }

  return (
    <div className="zm-play-bar">
      <div className="play-controls">
        <div className="play-controls_container">
          <div className="player-controls-left">
            <div className="player-controls-left_inner">
              <div className="zm-media_control">
                <div className="media-left">
                  <a href="#" className="overflow-hidden relative">
                    <figure className="w-[64px] h-[64px] rounded-[4px] overflow-hidden relative">
                      <img src={songinfo?.thumbnailM} alt="" />
                      {loading && <LoadingAudio />}
                    </figure>
                  </a>
                </div>
                <div className="media-content">
                  <div className="name-song_now">
                    <span className="name">{songinfo?.title}</span>
                  </div>
                  <h3 className="text-white name-singer_now">
                    <p className="mr-1">{songinfo?.artistsNames}</p>
                  </h3>
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

          <div className="player-controls-play">
            <div className="flex justify-center items-center flex-col">
              <div className="actions">
                <button
                  className="btn-controls"
                  onClick={() => {
                    dispatch(updateShuffle(!isShuffle));
                  }}
                >
                  <i
                    className={`text-white fa-xl fa-solid fa-shuffle ${
                      isShuffle === true && "text-[#9b4de0]"
                    }`}
                  ></i>
                </button>
                <button
                  className={`btn-next ${
                    !isPrev && "hover:cursor-not-allowed"
                  }`}
                  onClick={() => {
                    if (!isPrev) {
                      return;
                    } else {
                      handlePrevSong();
                    }
                  }}
                >
                  <i
                    className={`text-white fa-xl fa-solid fa-backward-step ${
                      !isPrev && "text-red-500"
                    }`}
                  ></i>
                </button>
                <button
                  className={`btn-controls`}
                  id="btnPlay_Ref"
                  onClick={() => {
                    if (isVip) {
                      return toast.warning(
                        "Bài hát chỉ dành cho tài khoản VIP"
                      );
                    } else {
                      handletongglePlay();
                    }
                  }}
                >
                  {isPlay ? (
                    <i
                      className={`text-white text-[35px] fa-solid fa-circle-pause ${
                        loading && "hidden"
                      }`}
                    ></i>
                  ) : (
                    <i
                      className={`text-white text-[35px] fa-regular fa-circle-play ${
                        loading && "hidden"
                      }`}
                    ></i>
                  )}
                  {loading && (
                    <div>
                      <i className="text-white text-[35px] fa-regular fa-circle"></i>
                    </div>
                  )}
                  {loading && <LoadingAudio />}
                </button>
                <button
                  className={`btn-next ${
                    !isNext && "hover:cursor-not-allowed"
                  }`}
                  onClick={() => {
                    if (!isNext) {
                      return;
                    } else {
                      handleNextSong();
                    }
                  }}
                >
                  <i
                    className={`text-white fa-xl fa-solid fa-forward-step 4 ${
                      !isNext && "text-[#ffffff33]"
                    }`}
                  ></i>
                </button>
                <button
                  className="btn-controls"
                  onClick={() => {
                    dispatch(updateRepeat(!isRepeat));
                  }}
                >
                  <i
                    className={`text-white fa-xl fa-solid fa-repeat ${
                      isRepeat && "text-[#9b4de0]"
                    }`}
                  ></i>
                </button>
              </div>
              <div className="zm-timer_control">
                <div className="time_left" id="currentTime_Ref">
                  00:00
                </div>
                <div className="group container_progress">
                  <div className="propress-bar" id="progressBar_Ref">
                    <div className="propress" id="progress_Ref">
                      <span
                        className="propress_dot hidden group-hover:block"
                        id="progressDot_Ref"
                      ></span>
                    </div>
                  </div>
                </div>
                <div className="time_right" id="duration_Ref">
                  00:00
                </div>
              </div>
            </div>
          </div>

          <div className="player-controls-right">
            <button>
              <i className="text-white fa-solid fa-microphone"></i>
            </button>
            <button>
              <i className="text-white fa-regular fa-window-restore"></i>
            </button>
            <button
              className="w-5 h-5"
              onClick={() => {
                setVolume((prev) => (+prev === 0 ? 50 : 0));
              }}
            >
              {+volume >= 50 ? (
                <i className="text-white fa-solid fa-volume-high"></i>
              ) : +volume === 0 ? (
                <i className="text-white fa-solid fa-volume-xmark"></i>
              ) : (
                <i className="text-white fa-solid fa-volume-low"></i>
              )}
              {/* <i className="text-white fa-solid fa-volume-xmark"></i> */}
            </button>
            <div className="w-24 flex justify-center items-center">
              <input
                className="h-1 w-full"
                // ref={volumeRef}
                id="volumeRef"
                onChange={(e) => setVolume(e.target.value)}
                type="range"
                value={volume}
                step={1}
                min={0}
                max={100}
              />
            </div>
            <Bar_RightMusic />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ControllPlay);
