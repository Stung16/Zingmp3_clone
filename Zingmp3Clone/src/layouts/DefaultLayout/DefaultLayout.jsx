import { useEffect } from "react";
import "./defaulayot.css";
import Sidebar from "./Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Header/Header";
import ControllPlay from "../../components/ControllPlay/ControllPlay";
import { useSelector, useDispatch } from "react-redux";
import { songSlices } from "../../stores/slices/songSlices";
const { updateLoading, updateDataHome, updateListSongNext } =
  songSlices.actions;
// import Bar_RightMusic from "../../components/Bar_RightMusic/Bar_RightMusic";
import { getHome } from "../../services/music.services";
import { GetdataSection } from "../../utils/fn";

function DefaultLayout() {
  const currentSongID = useSelector((state) => state.songValues.currentSongID);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      dispatch(updateLoading(true));
      try {
        const homeData = await getHome();

        if (homeData?.err === 0) {
          dispatch(updateDataHome(homeData?.data?.items));
          dispatch(
            updateListSongNext(
              GetdataSection(
                homeData?.data?.items,
                "newReleaseChart",
                "hNewrelease"
              )?.items
            )
          );
        }
      } catch (error) {
        console.log(error);
      } finally {
        dispatch(updateLoading(false));
      }
    };
    fetchData();
  }, [dispatch]);
  return (
    <main className="overflow-hidden flex flex-col h-full">
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
      {currentSongID && <ControllPlay />}
      <ToastContainer autoClose={2500} />
    </main>
  );
}

export default DefaultLayout;
