import React from "react";
import { Link, NavLink } from "react-router";
import logImg from "../../assets/images/service.png";

const DashNav = () => {
  const link = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "hover:bg-blue-400 hover:text-white px-2 py-1 rounded-sm "
              : "hover:bg-blue-400 hover:text-white px-2 py-1 rounded-sm "
          }
          to={"/dashboard"}
        >
          Overview
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "hover:bg-blue-400 hover:text-white px-2 py-1 rounded-sm "
              : "hover:bg-blue-400 hover:text-white px-2 py-1 rounded-sm "
          }
          to={"/dashboard/all-items"}
        >
          All Items
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "hover:bg-blue-400 hover:text-white px-2 py-1 rounded-sm "
              : "hover:bg-blue-400 hover:text-white px-2 py-1 rounded-sm "
          }
          to={"/dashboard/myReviews"}
        >
          My Reviews
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "underline text-white bg-blue-400 hover:text-white"
              : "hover:bg-blue-400 hover:text-white"
          }
          to={"/dashboard/myServices"}
        >
          My Services
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "hover:bg-blue-400 hover:text-white px-2 py-1 rounded-sm "
              : "hover:bg-blue-400 hover:text-white px-2 py-1 rounded-sm "
          }
          to={"/addService"}
        >
          Add Service
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "hover:bg-blue-400 hover:text-white px-2 py-1 rounded-sm "
              : "hover:bg-blue-400 hover:text-white px-2 py-1 rounded-sm "
          }
          to={"/"}
        >
          Go Home
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="relative">
      <div className="dropdown absolute top-0">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost mr-1 lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {" "}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-y-2 left-2"
        >
          {link}
        </ul>
      </div>
      <div className="w-[50vw] md:w-[25vw] mx-auto  flex-col px-10  text-center items-center mt-[25vh] space-y-5 bg-blue-100 rounded-2xl h-fit py-10 sticky top-[25vh] hidden lg:flex">
        <div>
          <Link to={"/"} className="flex items-center gap-2">
            <img className="w-7 rounded-full" src={logImg} alt="Logo" />
            <h1 className="text-2xl font-bold hidden md:flex">
              Service<span className="text-[#1191D0]">Review</span>
            </h1>
          </Link>
        </div>
        <ul className="space-y-3 text-sm md:text-lg">{link}</ul>
      </div>
    </div>
  );
};

export default DashNav;
