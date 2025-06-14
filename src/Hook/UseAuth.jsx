import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";

const UseAuth = () => {
  const authsInfo = use(AuthContext);
  return authsInfo;
};

export default UseAuth;
