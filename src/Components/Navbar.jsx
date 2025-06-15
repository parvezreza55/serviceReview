import React from "react";
import { Link, NavLink } from "react-router";
import logImg from "../assets/images/service.png";
import UseAuth from "../Hook/UseAuth";
import Swal from "sweetalert2";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const { user, signOutUser } = UseAuth();
  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "underline text-white bg-blue-400 hover:text-white"
              : "hover:bg-blue-400 hover:text-white"
          }
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "underline text-white bg-blue-400 hover:text-white"
              : "hover:bg-blue-400 hover:text-white"
          }
          to={"/services"}
        >
          Services
        </NavLink>
      </li>
    </>
  );
  const linksMore = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "underline text-white bg-blue-400 hover:text-white"
              : "hover:bg-blue-400 hover:text-white"
          }
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "underline text-white bg-blue-400 hover:text-white"
              : "hover:bg-blue-400 hover:text-white"
          }
          to={"/services"}
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "underline text-white bg-blue-400 hover:text-white"
              : "hover:bg-blue-400 hover:text-white"
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
              ? "underline text-white bg-blue-400 hover:text-white"
              : "hover:bg-blue-400 hover:text-white"
          }
          to={"/myServices"}
        >
          My Services
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "underline text-white bg-blue-400 hover:text-white"
              : "hover:bg-blue-400 hover:text-white"
          }
          to={"/myreviews"}
        >
          My Reviews
        </NavLink>
      </li>
    </>
  );
  const handleLogOut = () => {
    signOutUser().then(() => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "LogOut Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    });
  };
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar md:w-11/12 mx-auto py-3">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-y-2"
            >
              {user ? linksMore : links}
            </ul>
          </div>
          <Link to={"/"} className="flex items-center gap-2">
            <img className="w-14" src={logImg} alt="Logo" />
            <h1 className="text-xl md:text-2xl font-bold hidden md:flex">
              Service<span className="text-[#1191D0]">Review</span>
            </h1>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            {user ? linksMore : links}
          </ul>
        </div>
        <div className="navbar-end gap-2 z-20">
          {user ? (
            <>
              <a
                data-tooltip-id="my-tooltip"
                data-tooltip-content={user?.displayName}
              >
                <img
                  className="w-10 rounded-full"
                  src={user?.photoURL}
                  alt=""
                />
              </a>
              <Tooltip id="my-tooltip" place="top" />
            </>
          ) : (
            ""
          )}
          {user ? (
            <>
              <button
                onClick={handleLogOut}
                className={
                  "btn hover:bg-blue-400 hover:text-white border border-black"
                }
              >
                LogOut
              </button>
            </>
          ) : (
            <>
              <NavLink
                className={
                  "btn hover:bg-blue-400 hover:text-white border border-black"
                }
                to={"/auth/login"}
              >
                LogIn
              </NavLink>
              <NavLink
                className={
                  "btn hover:bg-blue-400 hover:text-white border border-black"
                }
                to={"/auth/register"}
              >
                Register
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
