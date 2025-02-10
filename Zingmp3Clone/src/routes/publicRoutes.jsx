import { Route } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout/DefaultLayout";
import Album from "../pages/Album/Album";
import ChartNewSong from "../pages/ChartNewSong/ChartNewSong";
import Home from "../pages/Home/Home";
import Hub from "../pages/Hub/Hub";
import Mymusic from "../pages/Mymusic/Mymusic";
import Radio from "../pages/Radio/Radio";
import Top100 from "../pages/Top100/Top100";
import Zing_chart from "../pages/Zing_chart/Zing_chart";
import Search from "../pages/Search/Search";
import SearchAll from "../pages/Search/SearchAll/SearchAll";
import SearchSong from "../pages/Search/SearchSong/SearchSong";
import SearchPlaylist from "../pages/Search/SearchPlaylist/SearchPlaylist";
import SearchArtist from "../pages/Search/SearchArtist/SearchArtist";
import SearchVideo from "../pages/Search/SearchVideo/SearchVideo";
import ErrorPage from "../pages/ErrorPage.js/ErrorPage";
export const publicRoutes = (
  <>
    <Route path="/" element={<DefaultLayout />}>
      <Route index element={<Home />} />
      <Route path="/zing-chart" element={<Zing_chart />} />
      <Route path="/radio" element={<Radio />} />
      <Route path="/mymusic" element={<Mymusic />} />
      <Route path="/moi-phat-hanh" element={<ChartNewSong />} />
      <Route path="/hub" element={<Hub />} />
      <Route path="/top100" element={<Top100 />} />
      <Route path="/album/:slug/:id" element={<Album />} />
      <Route path="/tim-kiem" element={<Search />}>
        <Route path="/tim-kiem/tat-ca" element={<SearchAll />} />
        <Route path="/tim-kiem/bai-hat" element={<SearchSong />} />
        <Route path="/tim-kiem/playlist" element={<SearchPlaylist />} />
        <Route path="/tim-kiem/artist" element={<SearchArtist />} />
        <Route path="/tim-kiem/video" element={<SearchVideo />} />
      </Route>
    </Route>
    <Route path="*" element={<ErrorPage />} />
  </>
);
