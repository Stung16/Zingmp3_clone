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
  maintainAspectRatio: false,
  pointRadius: 0,
  scales: {
    x: {
      type: "category",
      ticks: {
        color: "gray",
        font: {
          size: 12,
        },
        callback: function (value) {
          return value < 10 ? `0${value}:00` : `${value}:00`;
        },
      },
      grid: {
        display: false,
      },
    },
    y: {
      ticks: { display: false },
      grid: {
        color: "gray",
        drawTicks: false,
      },
      min: 0,
      max: 26822.4,
      border: { dash: [3, 4] },
    },
  },
  plugins: {
    title: {
      display: false,
    },
    legend: false,
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
export const handleUpdateValue = function (ref, value) {
  ref.style.width = `${value}%`;
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
  const respone = await fetch(
    "https://api-zingmp3-public-rust.vercel.app/api/NewReleaseChart"
  );
  const data = await respone.json();
  console.log(data);
};

export function customText(text, nb) {
  if (text) {
    if (text?.length <= nb) {
      return text;
    } else {
      return text.substring(0, nb - 1) + "...";
    }
  }
  return;
}
export function formatTimestamp(timestamp) {
  const targetDate = new Date(timestamp * 1000);
  const today = new Date();
  const timeDifference = today - targetDate;
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  return daysDifference === 0 ? "Hôm nay" : `${daysDifference} ngày trước`;
}
export const GetdataSection = (data, sectionType, sectionId) => {
  if (sectionId) {
    if (Array.isArray(data) && data.length) {
      return data.find(
        (item) =>
          item?.sectionType === sectionType && item?.sectionId === sectionId
      );
    }
  }
  if (Array.isArray(data) && data.length) {
    return data.find((item) => item?.sectionType === sectionType);
  }
  return [];
};
