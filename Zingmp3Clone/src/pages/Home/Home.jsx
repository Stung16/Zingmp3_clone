import Trendding from "../../components/Trendding/Trendding";
import ListSection from "../../components/ListSection/ListSection";
import { useSelector } from "react-redux";
import Footer from "../../layouts/DefaultLayout/Footer/Footer";
import ChartSection from "../Zing_chart/ChartSection/ChartSection";
import SkeletonAlbumList from "../../components/Loading/SkeletonLoading/SkeletonAlbumList";
import { GetdataSection } from "../../utils/fn";

const Home = () => {
  const homeData = useSelector((state) => state.songValues.dataHome);

  return (
    <>
      <Trendding dataTrendding={GetdataSection(homeData, "new-release")} />
      {homeData?.length ? (
        <ListSection
          playList={GetdataSection(homeData, "playlist")}
          number={5}
        />
      ) : (
        <SkeletonAlbumList />
      )}
      {homeData?.length ? (
        <ListSection
          playList={GetdataSection(homeData, "newReleaseChart")}
          number={5}
        />
      ) : (
        <SkeletonAlbumList />
      )}
      {homeData?.length ? (
        <ListSection
          playList={GetdataSection(homeData, "playlist", "hAlbum")}
          number={5}
        />
      ) : (
        <SkeletonAlbumList />
      )}
      {homeData?.length ? (
        <ChartSection dataTrendding={GetdataSection(homeData, "RTChart")} />
      ) : (
        <div className="w-full h-[20rem] bg-gray-200 animate-pulse mt-6 rounded-lg">
          <div className="flex flex-col items-center justify-center h-full">
            <div className="w-[95%] h-6 bg-gray-300 rounded"></div>
            <div className="w-[95%] h-6 bg-gray-300 rounded mt-4"></div>
            <div className="w-[95%] h-6 bg-gray-300 rounded mt-4"></div>
          </div>
        </div>
      )}

      {homeData?.length ? (
        <ListSection
          playList={GetdataSection(homeData, "playlist")}
          number={5}
        />
      ) : (
        <SkeletonAlbumList />
      )}
      <Footer />
    </>
  );
};

export default Home;
