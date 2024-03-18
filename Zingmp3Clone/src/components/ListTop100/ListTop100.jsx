import React, { Fragment } from "react";
import "../ListSection/listSection.css";
import Album from "../Album/Album";

const ListTop100 = ({ playList }) => {
  let listMusic;
  if (playList) {
    if (playList?.title === "Nổi bật") {
      listMusic = playList?.items?.slice(0, 5);
    } else {
      listMusic = playList?.items;
    }
  }
  return (
    <div className="zm-section mt-[48px]">
      <div className="zm-container flex justify-between items-center">
        <h3 className="title-playlist">{playList?.title}</h3>
      </div>
      <div className="relative">
        <div className="zm-carousel">
          <div className="carousel-inner flex pb-2 flex-wrap ">
            {listMusic?.map((item, index) => {
              return (
                <Fragment key={index}>
                  <Album item={item} />
                </Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListTop100;
