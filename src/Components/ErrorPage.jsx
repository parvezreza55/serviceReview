import React from "react";
import errorImage from "../assets/images/errorpage.jpg";
import Navbar from "./Navbar";

const ErrorPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex flex-col justify-center items-center py-24">
        <img className="rounded-2xl" src={errorImage} alt="" />
        <h1 className="text-xl md:text-4xl text-center font-bold mt-10">
          404.Page not found
        </h1>
      </div>
    </div>
  );
};

export default ErrorPage;
