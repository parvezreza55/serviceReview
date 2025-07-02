import React from "react";
import { Link, NavLink } from "react-router";
import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import logImg from "../assets/images/service.png";

const Footer = () => {
  const linksMore = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "underline  rounded-2xl p-2"
              : "hover:underline  rounded-2xl p-2"
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
              ? "underline  rounded-2xl p-2"
              : "hover:underline rounded-2xl p-2"
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
              ? "underline  rounded-2xl p-2"
              : "hover:underline  rounded-2xl p-2"
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
              ? "underline  rounded-2xl p-2"
              : "hover:underline  rounded-2xl p-2"
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
              ? "underline  rounded-2xl p-2"
              : "hover:underline  rounded-2xl p-2"
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
        <Link to={"/"} className="flex items-center gap-2">
          <img className="w-10 rounded-full" src={logImg} alt="Logo" />
          <h1 className="text-3xl font-bold">
            Service<span className="text-[#1191D0]">Review</span>
          </h1>
        </Link>
        <nav className="grid grid-flow-col gap-4">
          <ul className="flex flex-col md:flex-row gap-3 text-sm">
            {" "}
            {linksMore}
          </ul>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <Link to={"https://www.facebook.com/parvez.reza.312357"}>
              <FaFacebook size={30}></FaFacebook>
            </Link>
            <Link to={"https://github.com/parvezreza55"}>
              <FaGithub size={30}></FaGithub>
            </Link>
            <Link
              to={
                "https://www.linkedin.com/in/parvez-reza-9a78a42a8/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              }
            >
              <FaLinkedin size={30}></FaLinkedin>
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
