/* eslint-disable react-refresh/only-export-components */
import { memo, useEffect, useState } from "react";
import "./controllplay.css";

import { useSelector, useDispatch } from "react-redux";

// import { getSong } from "../../services/music.services";
import InforSong from "./InforSong";
import FactoryControl from "./FactoryControl";
import { getSong } from "../../services/music.services";

const ControllPlay = () => {
  const dispatch = useDispatch();
  const [source, setSource] = useState(null);
  const currentSongID = useSelector((state) => state.songValues.currentSongID);
  const isPlay = useSelector((state) => state.songValues.status);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchSong = async () => {
      try {
        setLoading(true);
        const res = await getSong(currentSongID);

        if (res?.err === -1110) {
          const res1 = await fetch(res?.url);
          if (res1?.err === 0) {
            setSource(res1?.data?.["128"]);
          }
          return;
        }
        if (res?.err === 0) {
          setSource(res?.data?.["128"]);
        }

        //   // setSource(res?.url);
        //   return;
        // }
        // if (res?.err === 0) {
        //   setSource(res?.url);
        //   return;
        // }
        // setSource(
        //   "https://a128-z3.zmdcdn.me/353976efddeac0c908891b511ae19ac4?authen=exp=1739329339~acl=/353976efddeac0c908891b511ae19ac4*~hmac=b4f707a5e3a8139080c1a450cad1fe13"
        // );
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchSong();
  }, [currentSongID, dispatch]);

  return (
    <div className="zm-play-bar">
      <div className="play-controls">
        <div className="play-controls_container">
          <InforSong loading={loading} currentSongID={currentSongID} />
          <FactoryControl loading={loading} isPlay={isPlay} source={source} />
        </div>
      </div>
    </div>
  );
};

export default memo(ControllPlay);
