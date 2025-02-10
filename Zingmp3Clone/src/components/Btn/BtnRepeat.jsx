import { FaRepeat } from "react-icons/fa6";
import { songSlices } from "../../stores/slices/songSlices";
import { useDispatch, useSelector } from "react-redux";
const { updateRepeat } = songSlices.actions;

export default function BtnRepeat() {
  const dispatch = useDispatch();
  const isRepeat = useSelector((state) => state.songValues.isRepeat);
  return (
    <FaRepeat
      onClick={() => {
        if (isRepeat) {
          return dispatch(updateRepeat(false));
        }
        dispatch(updateRepeat(true));
      }}
      className={`size-5 ${isRepeat ? "text-[#9b4de0]" : "text-white"}
       cursor-pointer`}
    />
  );
}
