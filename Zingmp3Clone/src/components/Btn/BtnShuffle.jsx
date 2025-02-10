import { FaShuffle } from "react-icons/fa6";
import { songSlices } from "../../stores/slices/songSlices";
import { useDispatch, useSelector } from "react-redux";
const { updateShuffle } = songSlices.actions;

export default function BtnShuffle() {
  const isShuffle = useSelector((state) => state.songValues.isShuffle);
  const dispatch = useDispatch();
  return (
    <FaShuffle
      onClick={() => {
        if (isShuffle) {
          return dispatch(updateShuffle(false));
        }
        dispatch(updateShuffle(true));
      }}
      className={`size-5 ${
        isShuffle ? "text-[#9b4de0]" : "text-white"
      } cursor-pointer`}
    />
  );
}
