/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { FaRegCirclePlay } from "react-icons/fa6";
import { MdOutlineMoreHoriz } from "react-icons/md";
const Album = ({ item }) => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="w-1/5 px-[14px] mb-5" role="list">
      <div
        className="group/item bg-cover w-full overflow-hidden cursor-pointer relative"
        onClick={() => {
          let parts = item.link.split("/");
          let result = parts.slice(2, 3).join("");
          navigate(`/album/${result}/${item?.encodeId}`);
          localStorage.setItem("codeAlbum", item?.encodeId);
        }}
      >
        <img
          className="group/edit group-hover/item:scale-110 ease-out duration-700 w-full zm-img"
          src={item?.thumbnailM}
          alt="image"
        />
        <div className="group/edit invisible group-hover/item:visible hover:bg-[#33333374] absolute w-full h-full inset-0 z-10">
          <div className="absolute flex justify-between items-center right-[18%] left-[18%] top-1/2 -translate-y-1/2">
            <FaRegHeart className="hover:scale-105 hover:text-slate-50 text-white text-[20px]" />
            <FaRegCirclePlay className="hover:text-[50px] text-white text-[45px]" />
            <MdOutlineMoreHoriz className="hover:scale-105 hover:text-slate-50 text-white text-[28px]" />
          </div>
        </div>
      </div>
      <div className="w-full mt-3">
        <h3 className="text-title text-[14px] leading-[19px] text-left font-[400] break-words line-clamp-2">
          {item.title}
        </h3>
      </div>
    </div>
  );
};

export default Album;
