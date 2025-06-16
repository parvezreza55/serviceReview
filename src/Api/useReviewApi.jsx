import React from "react";
import useAxiosToken from "../Hook/useAxiosToken";

const useReviewApi = () => {
  const axiosSecure = useAxiosToken();
  const myReviews = (email) => {
    return axiosSecure.get(`/review/?email=${email}`).then((res) => res.data);
  };
  return {
    myReviews,
  };
};

export default useReviewApi;
