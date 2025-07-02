import React from "react";
import { Outlet } from "react-router";
import DashNav from "../Pages/Dashboard/DashNav";
import Overview from "../Pages/Dashboard/DashComponents/Overview";

const DashBoardLayOut = () => {
  return (
    <div className="flex gap-3">
      <DashNav></DashNav>
      <div className="mt-10 w-full md:px-5">
        <Overview></Overview>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBoardLayOut;
