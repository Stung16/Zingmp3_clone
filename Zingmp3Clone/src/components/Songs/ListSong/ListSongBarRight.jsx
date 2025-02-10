import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { songSlices } from "../../../stores/slices/songSlices";
import SongItemBarRightItem from "../SongItem/SongItemBarRightItem";
import { getDetailPlaylist } from "../../../services/music.services";
const { getListSong, updateLoading, updateCurrentAlbumData } =
  songSlices.actions;

const ListSongBarRight = () => {
  const [titleAlbum, setTitleAlbum] = useState("");
  const codeAlbum = localStorage?.getItem("codeAlbum") || null;
  const dispatch = useDispatch();

  useEffect(() => {
    if (codeAlbum) {
      const fetchData = async () => {
        try {
          dispatch(updateLoading(true));
          const dataRespone = await getDetailPlaylist(codeAlbum);
          console.log(dataRespone);

          dispatch(getListSong(dataRespone?.data?.song));
          dispatch(updateCurrentAlbumData(dataRespone?.data?.song?.items));
          setTitleAlbum(
            `${dataRespone?.data?.sectionId} ${dataRespone?.data?.title}`
          );
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          dispatch(updateLoading(false));
        }
      };

      fetchData();
    }
  }, [codeAlbum, dispatch]);
  // console.log(playListData);
  return <SongItemBarRightItem titleAlbum={titleAlbum} />;
};

export default ListSongBarRight;
