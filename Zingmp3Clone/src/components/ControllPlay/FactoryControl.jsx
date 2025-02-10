/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Fragment, useEffect, useRef } from "react";
import LoadingAudio from "../Loading/LoadingAudio";
import { useDispatch } from "react-redux";
import { getTime, handleUpdateValue } from "../../utils/fn";
import { FaRegPlayCircle } from "react-icons/fa";
import { FaRegPauseCircle } from "react-icons/fa";
import { songSlices } from "../../stores/slices/songSlices";
const { checkPlay } = songSlices.actions;
import { GiPreviousButton } from "react-icons/gi";
import { GiNextButton } from "react-icons/gi";
import OtherControl from "./OtherControl";
import BtnShuffle from "../Btn/BtnShuffle";
import BtnRepeat from "../Btn/BtnRepeat";

export default function FactoryControl({ loading, isPlay, source }) {
  const dispatch = useDispatch();
  const isDragRef = useRef(false);
  const initialClientXRef = useRef(0);
  const initialValueRef = useRef(0);
  const valueRef = useRef(0);
  const audioRef = useRef(null);
  const progressBar_Ref = useRef();
  const progress_Ref = useRef();
  const currentTime_Ref = useRef();
  const progressDot_Ref = useRef();
  const duration_Ref = useRef();

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = source;
      audioRef.current.load();
    }
  }, [source]);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlay) {
        audioRef.current.pause();
        dispatch(checkPlay(false));
      } else {
        audioRef.current.play().catch((error) => {
          console.error("Error playing audio:", error);
        });
        dispatch(checkPlay(true));
      }
    }
  };

  useEffect(() => {
    const audioEl = audioRef.current;

    if (audioEl) {
      audioEl.src = source;
      audioEl.load();

      audioEl.addEventListener("loadeddata", function () {
        duration_Ref.current.innerText = getTime(audioEl.duration);
      });

      audioEl.addEventListener("timeupdate", function () {
        const currentTime = audioEl.currentTime;
        const duration = audioEl.duration;
        valueRef.current = (currentTime * 100) / duration;

        if (!isDragRef.current) {
          currentTime_Ref.current.innerText = getTime(currentTime);
          handleUpdateValue(progress_Ref.current, valueRef.current);
        }
      });

      //  audioEl.addEventListener("play", () => dispatch(checkPlay(true)));
      //  audioEl.addEventListener("pause", () => dispatch(checkPlay(false)));
      audioEl.addEventListener("ended", () => {
        //    dispatch(checkPlay(false));
        handleUpdateValue(progress_Ref.current, 0);
        currentTime_Ref.current.innerText = "00:00";
      });
    }

    // Xử lý sự kiện cho thanh tiến trình
    const progressBarWidth = progressBar_Ref.current.clientWidth;

    const handleMouseDown = (e) => {
      if (e.which === 1) {
        const offsetX = e.offsetX;
        valueRef.current = (offsetX * 100) / progressBarWidth;
        initialValueRef.current = valueRef.current;
        initialClientXRef.current = e.clientX;
        isDragRef.current = true;

        const currentTime = (valueRef.current / 100) * audioEl.duration;
        audioEl.currentTime = currentTime;
        currentTime_Ref.current.innerText = getTime(currentTime);
        handleUpdateValue(progress_Ref.current, valueRef.current);
      }
    };

    const handleMouseMove = (e) => {
      if (isDragRef.current) {
        const moveWidth = e.clientX - initialClientXRef.current;
        valueRef.current =
          initialValueRef.current + (moveWidth * 100) / progressBarWidth;

        if (valueRef.current < 0) valueRef.current = 0;
        if (valueRef.current > 100) valueRef.current = 100;

        const currentTime = (valueRef.current / 100) * audioEl.duration;
        audioEl.currentTime = currentTime;
        currentTime_Ref.current.innerText = getTime(currentTime);
        handleUpdateValue(progress_Ref.current, valueRef.current);
      }
    };
    const handleProgressDotMousedown = (e) => {
      e.stopPropagation();
      if (e.which === 1) {
        isDragRef.current = true;
        initialClientXRef.current = e.clientX;
      }
    };
    progressDot_Ref.current.addEventListener("mousemove", function (e) {
      e.stopPropagation();
    });
    const handleMouseUp = () => {
      isDragRef.current = false;
      initialValueRef.current = valueRef.current;
    };

    progressBar_Ref.current.addEventListener("mousedown", handleMouseDown);
    progressDot_Ref.current.addEventListener(
      "mousedown",
      handleProgressDotMousedown
    );
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      progressBar_Ref.current.removeEventListener("mousedown", handleMouseDown);
      progressDot_Ref.current.removeEventListener(
        "mousedown",
        handleProgressDotMousedown
      );
      progressDot_Ref.current.removeEventListener("mousemove", function (e) {
        e.stopPropagation();
      });
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [source]);

  return (
    <Fragment>
      <div className="player-controls-play">
        <audio ref={audioRef} />
        <div className="flex justify-center items-center flex-col">
          <div className={`${loading && "pointer-events-none"} actions`}>
            <BtnShuffle />
            <GiPreviousButton className="size-5 text-white cursor-pointer" />

            <button
              className="btn-controls"
              id="btnPlay_Ref"
              onClick={handlePlayPause}
            >
              {!isPlay ? (
                <FaRegPlayCircle className="size-8 text-white outline-none focus:border-none" />
              ) : (
                <FaRegPauseCircle className="size-8 text-white outline-none focus:border-none" />
              )}
            </button>
            <GiNextButton className="size-5 text-white cursor-pointer" />
            <BtnRepeat />
          </div>
          <div className="zm-timer_control">
            <div className="time_left" ref={currentTime_Ref}>
              00:00
            </div>
            <div className="group container_progress">
              <div className="propress-bar" ref={progressBar_Ref}>
                <div className="propress" ref={progress_Ref}>
                  <span
                    className="propress_dot hidden group-hover:block"
                    ref={progressDot_Ref}
                  />
                </div>
              </div>
            </div>
            <div className="time_right" ref={duration_Ref}>
              00:00
            </div>
          </div>
        </div>
      </div>
      <OtherControl audioRef={audioRef.current} loading={loading} />
    </Fragment>
  );
}
