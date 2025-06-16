import React from "react";
import useAxiosToken from "../Hook/useAxiosToken";

const useServiceApi = () => {
  const axiosSecure = useAxiosToken();
  const myServices = (email) => {
    return axiosSecure
      .get(`/myServices/?email=${email}`)
      .then((res) => res.data);
  };
  return {
    myServices,
  };
};

export default useServiceApi;
