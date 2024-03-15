export const getInforSong = async (id) => {
  const response = await fetch(`https://api-zingmp3-public-rust.vercel.app/api/infosong?id=${id}`);
  const data = await response.json();
  return data;
};

export const getSong = async (id) => {
  const response = await fetch(`https://api-zingmp3-public-rust.vercel.app/api/song?id=${id}`);
  const data = await response.json();
  return data;
};

export const getDetailPlaylist = async (id) => {
  const response = await fetch(
    `https://api-zingmp3-public-rust.vercel.app/api/DetailPlaylist?id=${id}`
  );
  const data = await response.json();
  return data;
};

export const getHome = async (id) => {
  const response = await fetch(`https://api-zingmp3-public-rust.vercel.app/api/home?id=${id}`);
  const data = await response.json();
  return data;
};

export const getTop100 = async (id) => {
  const response = await fetch(`https://api-zingmp3-public-rust.vercel.app/api/Top100?id=${id}`);
  const data = await response.json();
  return data;
};

export const getChartHome = async () => {
  const response = await fetch(`https://api-zingmp3-public-rust.vercel.app/api/ChartHome`);
  const data = await response.json();
  return data;
};
export const getNewReleaseChart = async () => {
  const response = await fetch(`https://api-zingmp3-public-rust.vercel.app/api/NewReleaseChart`);
  const data = await response.json();
  return data;
};

export const getArtist = async (name) => {
  const response = await fetch(`https://api-zingmp3-public-rust.vercel.app/api/Artist${name}`);
  const data = await response.json();
  return data;
};

export const getLyric = async (id) => {
  const response = await fetch(`https://api-zingmp3-public-rust.vercel.app/api/Lyric${id}`);
  const data = await response.json();
  return data;
};

export const search = async (keyWord) => {
  try {
    const response = await fetch(`https://api-zingmp3-public-rust.vercel.app/api/search${keyWord}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
