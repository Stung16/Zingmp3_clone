import React,{Fragment} from "react";
import { useSelector, useDispatch } from "react-redux";
import SongItem from "../SongItem/SongItem";
const ListTrend = () => {
  const trend = useSelector((state) => state.songValues.trendding);
  return (
    <>
      {trend?.map((item, index) => {
        return (
          <Fragment key={index}>
            <SongItem item={item} />
          </Fragment>
        );
      })}
    </>
  );
};

export default ListTrend;
