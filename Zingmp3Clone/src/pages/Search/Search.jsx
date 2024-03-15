import React from "react";
import { Outlet,useParams  } from "react-router-dom";
import {NavLink } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeSearch = ({ isActive }) => {
    return isActive ? "nav-search active" : "nav-search";
  };
  return (
    <div>
      <div className="nav-search py-3">
        <div className="nav-inner">
          <h3 className="title_nav">Kết Quả Tìm Kiếm</h3>
          <ul className="ul-nav nav" >
            <li>
                <NavLink
                  className={`${activeSearch} link-search `}
                  to={`/tim-kiem/tat-ca?q=${searchParams.get("q")}`}
                >
                  Tất cả
                </NavLink>
            </li>
            <li>
                <NavLink
                  className={`${activeSearch} link-search `}
                  to={`/tim-kiem/bai-hat?q=${searchParams.get("q")}`}
                >
                  Bài hát
                </NavLink>
            </li>
            <li>
              {" "}
                <NavLink
                  className={`${activeSearch} link-search `}
                  to={`/tim-kiem/playlist?q=${searchParams.get("q")}`}
                >
                  PLAYLIST/ALBUM
                </NavLink>
            </li>
            <li>
              {" "}
                <NavLink
                  className={`${activeSearch} link-search `}
                  to={`/tim-kiem/artist?q=${searchParams.get("q")}`}
                >
                  NGHỆ SĨ/OA
                </NavLink>
            </li>
            <li>
              {" "}
                <NavLink
                  className={`${activeSearch} link-search `}
                  to={`/tim-kiem/video?q=${searchParams.get("q")}`}
                >
                  MV
                </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Search;
