/* eslint-disable react/prop-types */
import { Fragment } from "react";
import "./listSection.css";
import Album from "../Album/Album";

const ListSection = ({ playList, number }) => {
  let listMusic;
  if (playList) {
    listMusic = playList?.items?.slice(0, number);
  }
  return (
    <div className="zm-section mt-[48px]">
      <div className="zm-container flex justify-between items-center">
        <h3 className="title-playlist">{playList?.title}</h3>
        <a href="#" className="showall block hover:text-[#c273ed] align-middle">
          Tất cả
          <i className="fa-solid fa-angle-right fa-lg ml-2 " />
        </a>
      </div>
      <div className="relative">
        <div className="zm-carousel">
          <div className="carousel-inner flex pb-2">
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

export default ListSection;
