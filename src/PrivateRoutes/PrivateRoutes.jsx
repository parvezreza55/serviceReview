import React from "react";
import UseAuth from "../Hook/UseAuth";
import { Navigate, useLocation } from "react-router";

const PrivateRoutes = ({ children }) => {
  const { user, loader } = UseAuth();
  const location = useLocation();
  if (loader) {
    return (
      <>
        <div className="text-center">
          <span className="loading loading-spinner text-neutral"></span>
        </div>
      </>
    );
  }
  if (!user)
    return <Navigate state={location?.pathname} to={"/auth/login"}></Navigate>;

  return <div></div>;
};

export default PrivateRoutes;
