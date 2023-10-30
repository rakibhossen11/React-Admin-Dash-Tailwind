import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const DefaultLayout = () => {
  return (
    <div>
        <h1>default layout</h1>
      <div>
        <Sidebar />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default DefaultLayout;
