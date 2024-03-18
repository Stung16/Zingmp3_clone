import React,{Fragment} from "react";
import SongItem from "../Songs/SongItem/SongItem";
const ListTrend = ({trends}) => {
  if (!trends) return null;

  return (
    <>
      {trends?.map((item, index) => {
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
