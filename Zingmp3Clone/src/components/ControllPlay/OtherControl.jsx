/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Bar_RightMusic from "../Bar_RightMusic/Bar_RightMusic";
import { FaMicrophone } from "react-icons/fa";
import { FaRegWindowRestore } from "react-icons/fa";
import { FaVolumeHigh } from "react-icons/fa6";
import { FaVolumeLow } from "react-icons/fa6";
import { FaVolumeXmark } from "react-icons/fa6";
export default function OtherControl({ audioRef, loading }) {
  const [volume, setVolume] = useState(
    +localStorage.getItem("audioVolume") || 100
  );
  useEffect(() => {
    if (audioRef) {
      audioRef.volume = volume / 100; // Chuyển đổi giá trị volume từ 0-100 thành 0-1
    }
  }, [volume, audioRef]);
  return (
    <div
      className={`player-controls-right ${loading && "pointer-events-none"}`}
    >
      <FaMicrophone className="size-4 text-white cursor-pointer" />
      <FaRegWindowRestore className="size-4 text-white cursor-pointer" />
      <button
        className="w-5 h-5"
        onClick={() => {
          setVolume(
            volume === 0 ? +localStorage.getItem("audioVolume") || 100 : 0
          );
        }}
      >
        {+volume >= 50 ? (
          <FaVolumeHigh className="size-4 text-white" />
        ) : +volume === 0 ? (
          <FaVolumeXmark className="size-4 text-white" />
        ) : (
          <FaVolumeLow className="size-4 text-white" />
        )}
        {/* <i className="text-white fa-solid fa-volume-xmark"></i> */}
      </button>
      <div className="w-24 flex justify-center items-center">
        <input
          className="h-1 w-full"
          // ref={volumeRef}
          id="volumeRef"
          onChange={(e) => {
            const volume = e.target.value;
            setVolume(volume);
            localStorage.setItem("audioVolume", volume);
          }}
          type="range"
          value={volume}
          step={1}
          min={0}
          max={100}
        />
      </div>
      <Bar_RightMusic />
    </div>
  );
}
