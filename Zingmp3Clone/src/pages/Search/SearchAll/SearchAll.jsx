import React, { useEffect, useState } from "react";
import "./searchAll.css";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

const SearchAll = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState({});

  const dataSearch = useSelector((state) => state.searchData.data);
  useEffect(() => {
    setData(dataSearch[0] || JSON.parse(localStorage.getItem("dataSearch")));
  }, []);
  console.log(data);
  return (
    <div>
      <section className="text-white">
        <h3 className="search-title">Nổi bật</h3>
        <div className="flex w-full">
          <div className="w-1/3 outstanding-item">
            <div className="w-full cursor-pointer hover:bg-[rgba(254,255,255,0.1)]">
              <div className="bg-[rgba(254,255,255,0.05)] flex p-[10px]">
                <div className="media-left">
                  <div className="rounded-full">
                    <img
                      className="rounded-full w-[84px] h-[84px]"
                      src={data?.top?.thumbnail}
                      alt="img"
                    />
                    {/* <div className="opacity-img"></div> */}
                  </div>
                </div>
                <div className="media-right">
                  <p className="artist">
                    {data?.top?.objectType === "artist" ? "Nghệ sĩ" : ""}
                  </p>
                  <div className="artist-name">{data?.top?.title || data?.top?.name}</div>
                  <div className="subtitle">2.4M quan tâm</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SearchAll;
