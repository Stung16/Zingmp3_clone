import React from "react";
import SlideAlbum from "../../components/SlideAlbum/SlideAlbum";
import Trendding from "../../components/Trendding/Trendding";
import ListSection from "../../components/ListSection/ListSection";
import { useSelector } from "react-redux";
import Footer from "../../layouts/DefaultLayout/Footer/Footer";
import ChartSection from "../Zing_chart/ChartSection/ChartSection";

const Home = () => {
  const homeData = useSelector((state) => state.songValues.dataHome);
  return (
    <>
      <SlideAlbum dataSlice={homeData?.[0]?.items} />
      <Trendding dataTrendding={homeData?.[2]} />
      <ListSection playList={homeData?.[3]} number={5} />
      <ListSection playList={homeData?.[4]} number={5} />
      <ListSection playList={homeData?.[5]} number={5} />
      <ListSection playList={homeData?.[6]} number={5} />
      <ListSection playList={homeData?.[9]} number={5} />
      <ChartSection dataTrendding={homeData?.[2]} />
      <ListSection playList={homeData?.[11]} number={5} />
      <Footer />
    </>
  );
};

export default Home;
