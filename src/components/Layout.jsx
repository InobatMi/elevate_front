import React from "react";

import { Navbar } from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div style={{ display: "flex flex-col" }}>
      <Navbar />
      <Outlet />
      <Footer/>
    </div>
  );
};
//fwe
export default Layout;
