import "./Bar_RightMusic.css";
import ListSongBarRight from "../Songs/ListSong/ListSongBarRight";
import SongItemBarRightNow from "../Songs/SongItem/SongItemBarRightNow";
import { FaRegClock } from "react-icons/fa";
import { MdOutlineMoreHoriz } from "react-icons/md";
import { BiSolidPlaylist } from "react-icons/bi";

// import SongItemBarRightNow from "../SongItem/SongItemBarRightNow";

const Bar_RightMusic = () => {
  return (
    <div className="relative">
      <input className="hidden" type="checkbox" id="check" defaultChecked />
      <label
        htmlFor="check"
        className="zm-list-music ml-1 mr-5 relative p-[5px] check-span flex justify-center items-center rounded-sm cursor-pointer"
      >
        <BiSolidPlaylist className="text-white text-[20px]" />
      </label>
      <div className="bar-right overflow-x-hidden">
        <div className="bar-right_header">
          <div className="bar-right_header_inner">
            <div className="inner-left">
              <input
                id="list"
                className="hidden"
                type="radio"
                name="isCheck"
                defaultChecked
              />
              <label htmlFor="list" className="lv-item ">
                <h6>Danh sách phát</h6>
              </label>
              <input
                id="history"
                className="hidden"
                type="radio"
                name="isCheck"
              />
              <label htmlFor="history" className="lv-item ">
                <h6 className="has-text-white">Nghe gần đây</h6>
              </label>
            </div>

            <div className="innner-right flex justify-center items-center gap-[5px]">
              <span className="flex justify-center items-center p-2 bg-overlay rounded-full">
                <FaRegClock className="text-[#d1cfd4] text-[15px]" />
              </span>
              <span className="flex justify-center items-center p-2 bg-overlay  rounded-full">
                <MdOutlineMoreHoriz className="hover:scale-105 hover:text-slate-50 text-[#d1cfd4] text-[14px]" />
              </span>
            </div>
          </div>
        </div>

        <div className="bar-right_body px-2">
          <SongItemBarRightNow />
          <div className="listSong">
            <ListSongBarRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bar_RightMusic;
