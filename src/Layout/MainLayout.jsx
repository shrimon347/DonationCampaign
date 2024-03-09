import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Home/Navbar";

const MainLayout = () => {
  return (
    <div className="container mx-auto ">
      <Navbar />
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
