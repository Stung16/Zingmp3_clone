/* eslint-disable react/prop-types */
import { Fragment } from "react";
import SongItem from "../Songs/SongItem/SongItem";
const ListTrend = ({ trends }) => {
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
