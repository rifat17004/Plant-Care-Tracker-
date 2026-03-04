import React from "react";
import Header from "../Component/Header";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;
