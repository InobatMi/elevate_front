import React from "react";
import SideBar from "./SideBar";
import { Navbar } from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div style={{ display: "flex" }}>
      <SideBar />
      <div style={{ flex: 1 }}>
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
