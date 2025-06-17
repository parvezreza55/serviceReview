import axios from "axios";
import React from "react";
import UseAuth from "./UseAuth";

const axiosInstance = axios.create({
  baseURL: "https://service-review-server-lovat-seven.vercel.app",
});
const useAxiosToken = () => {
  const { user, signOutUser } = UseAuth();
  axiosInstance.interceptors.request.use((config) => {
    config.headers.authorization = `Bearer ${user.accessToken}`;
    return config;
  });

  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.status === 401 || error.status === 403) {
        signOutUser()
          .then(() => {})
          .catch(() => {});
      }
    }
  );

  return axiosInstance;
};

export default useAxiosToken;
