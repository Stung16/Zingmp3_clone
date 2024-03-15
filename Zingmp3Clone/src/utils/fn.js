import { useSelector, useDispatch } from "react-redux";

export const getArrSlider = (start, end, number) => {
  const limit = start > end ? number : end;
  let output = [];
  for (let i = start; i <= limit; i++) {
    output.push(i);
  }
  if (start > end) {
    for (let i = 0; i <= end; i++) {
      output.push(i);
    }
  }
  return output;
};

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
  hover: {
    mode: "dataset",
    intersect: false,
  },
};

export const getTime = function (seconds) {
  //Giây => Phút và giây
  var mins = Math.floor(seconds / 60);
  seconds -= mins * 60;
  seconds = Math.floor(seconds);

  return `${mins < 10 ? `0${mins}` : mins}:${
    seconds < 10 ? `0${seconds}` : seconds
  }`;
};

// export const getindexNow = () => {
//   const songs = useSelector((state) => state.songValues.songs);
//   const currentSongID = useSelector((state) => state.songValues.currentSongID);
//   let listSong = songs?.items;

//   let index = listSong.indexOf(
//     listSong?.find((item) => item?.encodeId === currentSongID)
//   );
//   return index;
// dispatch(updateCurrentSong(listSong[+index + 1]?.encodeId))

// };

export const getzm = async () => {
  const respone = await fetch("https://api-zingmp3-public-rust.vercel.app/api/NewReleaseChart");
  const data = await respone.json();
  console.log(data);
};

export function customText(text,nb) {
  if (text) {
    if (text?.length <= nb) {
      return text;
    } else {
      return text.substring(0, nb - 1) + "...";
    }
  }
  return;
}
