/* eslint-disable react/prop-types */
import { songSlices } from "../../../stores/slices/songSlices";
const { updateCurrentSong, checkPlay } = songSlices.actions;
import { useDispatch, useSelector } from "react-redux";
import { customText } from "../../../utils/fn";
import { Fragment } from "react";

const SongItemBarRightItem = ({ titleAlbum }) => {
  const currentSongID = useSelector((state) => state.songValues.currentSongID);
  const listSongNext = useSelector((state) => state.songValues.listSongNext);
  const listSongNextAlubm = useSelector(
    (state) => state.songValues.currentAlbum
  );

  const dispatch = useDispatch();
  const LoadingList = () => {
    return (
      <div className="grid grid-cols-1 gap-y-2">
        <div className="h-10 bg-gray-200 animate-pulse rounded-md mx-2" />
        <div className="h-10 bg-gray-200 animate-pulse rounded-md mx-2" />
        <div className="h-10 bg-gray-200 animate-pulse rounded-md mx-2" />
        <div className="h-10 bg-gray-200 animate-pulse rounded-md mx-2" />
        <div className="h-10 bg-gray-200 animate-pulse rounded-md mx-2" />
        <div className="h-10 bg-gray-200 animate-pulse rounded-md mx-2" />
        <div className="h-10 bg-gray-200 animate-pulse rounded-md mx-2" />
        <div className="h-10 bg-gray-200 animate-pulse rounded-md mx-2" />
        <div className="h-10 bg-gray-200 animate-pulse rounded-md mx-2" />
        <div className="h-10 bg-gray-200 animate-pulse rounded-md mx-2" />
      </div>
    );
  };
  return (
    <>
      {listSongNextAlubm && listSongNextAlubm?.length && titleAlbum !== "" && (
        <Fragment>
          <div className="title sticky top-0 bg-[#120822] z-20">
            <h3 className="mb-1">Tiếp theo</h3>
            <span>
              Từ playlist <a href="#">{customText(titleAlbum, 28)}</a>
            </span>
          </div>
          {listSongNextAlubm?.length ? (
            listSongNext?.map((item, index) => (
              <div key={index} className="songnow group">
                <div
                  className={`song-item ${
                    currentSongID === item?.encodeId
                      ? "bg-[#2f2739]"
                      : "group-hover:bg-[hsla(0,0%,100%,0.1)]"
                  }`}
                >
                  <div className="media-left flex items-center">
                    <div
                      className="song-thumb"
                      onClick={() => {
                        dispatch(updateCurrentSong(item?.encodeId));
                        dispatch(checkPlay(true));
                      }}
                    >
                      <img
                        className="w-10 h-10"
                        src={item?.thumbnailM}
                        alt=""
                      />
                      <div className="group-hover:visible opacityy"></div>
                      <div className="zm-actions group-hover:visible">
                        <span>
                          <i className="text-white fa-solid fa-play fa-lg"></i>
                        </span>
                      </div>
                    </div>
                    <div className="card-info">
                      <div className="name-song">
                        {customText(item?.title, 20)}
                      </div>
                      <div className="subtitle">
                        {customText(item?.artistsNames, 20)}
                      </div>
                    </div>
                  </div>
                  <div className="media-right gap-3 mr-3 hidden group-hover:flex">
                    <span className="flex justify-center items-center p-[5px] rounded-full hover:bg-[#d1cfd48d]">
                      <i className="text-white fa-regular fa-heart"></i>
                    </span>
                    <span className="flex justify-center items-center p-[5px] rounded-full hover:bg-[#d1cfd48d]">
                      <i className="text-white fa-solid fa-ellipsis"></i>
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <LoadingList />
          )}
        </Fragment>
      )}

      {/* autoPlay */}
      <div>
        <div className="title sticky top-0 bg-[#120822] z-20">
          {listSongNext?.length ? (
            <h3 className="mb-1">Tự động phát</h3>
          ) : (
            <div className="h-6 w-[10rem] bg-gray-200 animate-pulse rounded-md" />
          )}
          {listSongNext?.length ? (
            <span>Danh sách gợi ý</span>
          ) : (
            <div className="h-6 w-[5rem] bg-gray-200 animate-pulse rounded-md" />
          )}
        </div>
        <div className="">
          {listSongNext?.length ? (
            listSongNext?.map((item, index) => {
              return (
                <div key={index} className="songnow group">
                  <div
                    className={`song-item ${
                      currentSongID === item?.encodeId
                        ? "bg-[#2f2739]"
                        : "group-hover:bg-[hsla(0,0%,100%,0.1)]"
                    }`}
                  >
                    <div className="media-left flex items-center">
                      <div
                        className="song-thumb"
                        onClick={() => {
                          dispatch(updateCurrentSong(item?.encodeId));
                          dispatch(checkPlay(true));
                        }}
                      >
                        <img
                          className="w-10 h-10"
                          src={item?.thumbnailM}
                          alt=""
                        />
                        <div className="group-hover:visible opacityy"></div>
                        <div className="zm-actions group-hover:visible">
                          <span>
                            <i className="text-white fa-solid fa-play fa-lg"></i>
                          </span>
                        </div>
                      </div>
                      <div className="card-info">
                        <div className="name-song">
                          {customText(item?.title, 20)}
                        </div>
                        <div className="subtitle">
                          {customText(item?.artistsNames, 20)}
                        </div>
                      </div>
                    </div>
                    <div className="media-right  gap-3 mr-3 hidden group-hover:flex">
                      <span className="flex justify-center items-center p-[5px] rounded-full hover:bg-[#d1cfd48d]">
                        <i className="text-white fa-regular fa-heart"></i>
                      </span>
                      <span className="flex justify-center items-center p-[5px] rounded-full hover:bg-[#d1cfd48d]">
                        <i className="text-white fa-solid fa-ellipsis"></i>
                      </span>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <LoadingList />
          )}
        </div>
      </div>
    </>
  );
};

export default SongItemBarRightItem;
