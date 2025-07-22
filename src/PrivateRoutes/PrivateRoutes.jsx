import React from "react";
import UseAuth from "../Hook/UseAuth";
import { Navigate, useLocation } from "react-router";

const PrivateRoutes = ({ children }) => {
  const { user, loader } = UseAuth();
  const location = useLocation();
  if (loader) {
    return (
      <>
        <div className="text-center h-[100vh]">
          <span className="loading loading-spinner text-neutral"></span>
        </div>
      </>
    );
  }
  if (!user)
    return <Navigate state={location?.pathname} to={"/auth/login"}></Navigate>;

  return children;
};

export default PrivateRoutes;
