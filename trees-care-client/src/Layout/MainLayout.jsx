import React from "react";
import Header from "../Component/Header";
import { Outlet } from "react-router";
import Footer from "../Component/Footer";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
