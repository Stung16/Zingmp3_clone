import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { songSlices } from "../../stores/slices/songSlices";
import SongItemBarRightItem from "../SongItem/SongItemBarRightItem";
import { getDetailPlaylist } from "../../services/music.services";
const { getListSong, updateLoading } = songSlices.actions;

const ListSongBarRight = () => {
  const codeAlbum = localStorage?.getItem("codeAlbum");
  const dispatch = useDispatch();
  const [playListData, setPlayListData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(updateLoading(true));
        const dataRespone = await getDetailPlaylist(codeAlbum);
        dispatch(getListSong(dataRespone?.data?.song));
        setPlayListData(dataRespone?.data?.song);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        dispatch(updateLoading(false));
      }
    };
    fetchData();
  }, [codeAlbum]);
  return <SongItemBarRightItem data={playListData} />;
};

export default ListSongBarRight;
