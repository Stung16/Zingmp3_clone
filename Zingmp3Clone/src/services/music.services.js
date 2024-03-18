import Client from "../config/Client";
export const getInforSong = async (id) => {
  try {
    const { data } = await Client.get(`/infosong?id=${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getSong = async (id) => {
  try {
    const { data } = await Client.get(`/song?id=${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getDetailPlaylist = async (id) => {
  try {
    const { data } = await Client.get(`/DetailPlaylist?id=${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getHome = async () => {
  try {
    const { data } = await Client.get(`/home`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getTop100 = async (id) => {
  try {
    const { data } = await Client.get(`/Top100?id=${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getChartHome = async () => {
  try {
    const { data } = await Client.get(`/ChartHome`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getNewReleaseChart = async () => {
  try {
    const { data } = await Client.get(`/NewReleaseChart`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getArtist = async (name) => {
  try {
    const { data } = await Client.get(`/Artist${name}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getLyric = async (id) => {
  try {
    const { data } = await Client.get(`/Lyric${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const search = async (keyWord) => {
  try {
    const { data } = await Client.get(`/search${keyWord}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
