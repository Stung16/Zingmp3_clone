import { useSelector } from "react-redux";
// import { customText } from "../../utils/fn";
import { customText } from "../../../utils/fn";

const SongItemBarRightNow = () => {
  const isPlay = useSelector((state) => state.songValues.status);
  const currentSongInfo = useSelector((state) => state.songValues.currentSong);

  return (
    <div>
      <div className="songnow">
        {currentSongInfo ? (
          <div className="song-item active group relative">
            <div className="media-left flex items-center">
              <div className="song-thumb">
                <img
                  className="w-10 h-10"
                  src={currentSongInfo?.thumbnailM}
                  alt=""
                />
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
                <div className="name-song">
                  {customText(currentSongInfo?.title, 20)}
                </div>
                <div className="subtitle ">
                  {customText(currentSongInfo?.artistsNames, 20)}
                </div>
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
        ) : (
          <div className="h-10 bg-gray-200 animate-pulse rounded-md" />
        )}
      </div>
    </div>
  );
};

export default SongItemBarRightNow;
