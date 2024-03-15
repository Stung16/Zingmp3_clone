import Client from "../config/Client";
export const getSongItem = async (currid) => {
  const response = await Client.get("/songs");
  const listSong = response.data;
  const songDetail = listSong.filter((item) => item?.encodeId === currid);
  return songDetail[0];
};
