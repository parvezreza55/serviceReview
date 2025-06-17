import React from "react";
import { Link, NavLink } from "react-router";
import { FaFacebook, FaGithub, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const linksMore = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "underline hover:text-white hover:bg-blue-400 rounded-2xl p-2"
              : "hover:bg-blue-400 hover:text-white rounded-2xl p-2"
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
              ? "underline hover:text-white hover:bg-blue-400 rounded-2xl p-2"
              : "hover:bg-blue-400 hover:text-white rounded-2xl p-2"
          }
          to={"/services"}
        >
          All Services
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "underline hover:text-white hover:bg-blue-400 rounded-2xl p-2"
              : "hover:bg-blue-400 hover:text-white rounded-2xl p-2"
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
              ? "underline hover:text-white hover:bg-blue-400 rounded-2xl p-2"
              : "hover:bg-blue-400 hover:text-white rounded-2xl p-2"
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
              ? "underline hover:text-white hover:bg-blue-400 rounded-2xl p-2"
              : "hover:bg-blue-400 hover:text-white rounded-2xl p-2"
          }
          to={"/myReviews"}
        >
          My Reviews
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="pt-20 md:pt-30">
      <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
        <nav className="grid grid-flow-col gap-4">
          <ul className="flex flex-col md:flex-row gap-3"> {linksMore}</ul>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <Link to={"https://www.facebook.com/parvez.reza.312357"}>
              <FaFacebook size={30}></FaFacebook>
            </Link>
            <Link to={"https://github.com/parvezreza55"}>
              <FaGithub size={30}></FaGithub>
            </Link>
            <Link to={"https://www.youtube.com/"}>
              <FaYoutube size={30}></FaYoutube>
            </Link>
          </div>
        </nav>
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            Service Review
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
