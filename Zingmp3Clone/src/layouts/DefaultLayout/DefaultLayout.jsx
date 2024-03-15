import React, { useEffect, useState } from "react";
import "./defaulayot.css";
import Sidebar from "./Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../../components/Header/Header";
import ControllPlay from "../../components/ControllPlay/ControllPlay";
import { useSelector } from "react-redux";
import Loading from "../../components/Loading/Loading";
import Bar_RightMusic from "../../components/Bar_RightMusic/Bar_RightMusic";

function DefaultLayout() {
  const currentSongID = useSelector((state) => state.songValues.currentSongID);
  const isLoading = useSelector((state) => state.songValues.isLoading);
  const [right, setRight] = useState(null);
  useEffect(() => {
    setRight(localStorage.getItem("isBarRight"));
  }, [right]);
  return (
    <main className="overflow-hidden flex flex-col h-full">
      {isLoading && <Loading />}
      <div
        className={`w-full flex ${
          currentSongID !== null ? "isProgesbar" : "h-screen "
        }`}
      >
        <Sidebar />
        <div className="2xl:flex-[7.5] xl:flex-[7.5] overflow-x-hidden lg:flex-[9] md:flex-[9] w-full bg-[#170f23] px-[59px]  flex">
          <div className="w-full">
            <Header />
            <div className={`mt-[70px]`}>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
      <ToastContainer autoClose={2500} />
      {currentSongID !== null ? <ControllPlay /> : ""}
    </main>
  );
}

export default DefaultLayout;
