import React, { useEffect, useState } from "react";
import SlideAlbum from "../../components/SlideAlbum/SlideAlbum";
import Trendding from "../../components/Trendding/Trendding";
import ListSection from "../../components/ListSection/ListSection";
import Footer from "../../components/Footer/Footer";
import ChartSection from "../../components/ChartSection/ChartSection";
import { songSlices } from "../../stores/slices/songSlices";
import { useDispatch, useSelector } from "react-redux";
import { getHome } from "../../api/music";
const { updateListTrend, updateLoading } = songSlices.actions;

const Home = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(updateLoading(true));
        const apidata = await getHome();
        console.log(apidata);
        setData(apidata?.data?.items);
      } catch (error) {
        console.log(error);
      } finally {
        dispatch(updateLoading(false));
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <SlideAlbum dataSlice={data?.[0]?.items} />
      <Trendding dataTrendding={data?.[2]} />
      <ListSection playList={data?.[3]} />
      <ListSection playList={data?.[4]} />
      <ListSection playList={data?.[5]} />
      <ListSection playList={data?.[6]} />
      <ListSection playList={data?.[9]} />
      <ChartSection dataTrendding={data?.[2]} />
      <ListSection playList={data?.[11]} />
      {/* <ListSection playList={data?.[11]} /> */}
      <Footer />
    </>
  );
};

export default Home;
