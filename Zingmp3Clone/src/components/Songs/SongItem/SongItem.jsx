/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { songSlices } from "../../../stores/slices/songSlices";
import PlayMusic from "../../Helper/PlayMusic/PlayMusic";
import { formatTimestamp } from "../../../utils/fn";
const { updateCurrentSong, checkPlay } = songSlices.actions;

const SongItem = ({ item }) => {
  const dispatch = useDispatch();
  const currentSongID = useSelector((state) => state.songValues.currentSongID);
  const isPlay = useSelector((state) => state.songValues.status);

  return (
    <div className="px-[15px] w-1/3">
      <div className="group">
        <div
          className={` media-item rounded-md  group-hover:bg-[#ffffff1a] ${
            currentSongID === item?.encodeId ? "bg-[#ffffff1a]" : ""
          }`}
        >
          <div className=" media">
            <div className="media-left">
              <div
                data-value={item?.audio}
                className="song-thumb"
                onClick={() => {
                  dispatch(updateCurrentSong(item?.encodeId));
                  dispatch(checkPlay(true));
                }}
              >
                <figure className="w-[60px] h-[60px]" title={item?.title}>
                  <img
                    className="bg-cover"
                    src={item?.thumbnailM}
                    alt={item?.title}
                  />
                </figure>
                <div
                  className="group-hover:visible opacityy"
                  data-value={item.audio}
                ></div>
                <div
                  className={`zm-actions  ${
                    currentSongID === item?.encodeId
                      ? "visible"
                      : "group-hover:visible"
                  } ${
                    currentSongID === item?.encodeId && isPlay
                      ? ""
                      : "top-[50%]"
                  }`}
                >
                  <span>
                    {currentSongID === item?.encodeId && isPlay ? (
                      <PlayMusic />
                    ) : (
                      <i
                        className="fa-solid fa-play fa-lg"
                        data-value={item.audio}
                      ></i>
                    )}
                  </span>
                </div>
              </div>
              <div className="card-info">
                <div className="title-wrapper break-words line-clamp-1">
                  <span>{item?.title}</span>
                </div>
                <h3 className="is-one-line is-truncate subtitle">
                  <p
                    className="singer-name hover:text-[#9b4de0] break-words line-clamp-1"
                    href="#"
                  >
                    {`${item?.artistsNames}`}
                  </p>
                </h3>

                <div className="time-release">
                  <span>{formatTimestamp(item?.releaseDate)}</span>
                </div>
              </div>
            </div>
            <div className="media-right invisible group-hover:visible">
              <i className=" text-white cursor-pointer fa-solid fa-ellipsis fa-sm mr-3 flex justify-center items-center w-9 h-9 hover:bg-[#ffffff1a] rounded-full "></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SongItem;
