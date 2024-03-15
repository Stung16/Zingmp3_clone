import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const History = () => {
  const activeSearch = ({ isActive }) => {
    return isActive ? "nav-search active" : "nav-search";
  };
  return (
    <div className="h-full mb-[300px] ">
        <div>
          <div>
            <div className="nav-search py-3">
              <div className="nav-inner">
                <h3 className="title_nav">Phát gần đây</h3>
                <ul className="ul-nav nav">
                  <li>
                    <NavLink
                      className={`${activeSearch} link-search `}
                      to={`/history/song`}
                    >
                      Bài hát
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={`${activeSearch} link-search `}
                      to={`/history/playlist`}
                    >
                      Playlist
                    </NavLink>
                  </li>
                  <li>
                    {" "}
                    <NavLink
                      className={`${activeSearch} link-search `}
                      to={`/history/mv`}
                    >
                      MV
                    </NavLink>
                  </li>
                  <li>
                    {" "}
                    <NavLink
                      className={`${activeSearch} link-search `}
                      to={`/history/radio`}
                    >
                      Radio
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Outlet />
    </div>
  );
};

export default History;
