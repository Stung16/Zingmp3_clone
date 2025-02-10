import { Routes } from "react-router-dom";
import { publicRoutes } from "../routes/publicRoutes";

const Layout = () => {
  return <Routes>{publicRoutes}</Routes>;
};

export default Layout;
