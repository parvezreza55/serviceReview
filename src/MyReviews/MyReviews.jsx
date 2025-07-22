import React, { Suspense, useEffect, useState } from "react";
import UseAuth from "../Hook/UseAuth";
import MyReviewCard from "./MyReviewCard";
import useReviewApi from "../Api/useReviewApi";
import { Helmet } from "react-helmet-async";

const MyReviews = () => {
  const { user } = UseAuth();
  const { myReviews } = useReviewApi();
  const [myReview, setMyReview] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchReview = () => {
    if (user?.email && user?.accessToken) {
      myReviews(user?.email, user?.accessToken).then((data) =>
        setMyReview(data)
      );
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchReview();
  }, [user?.email]);
  if (loading) {
    return (
      <>
        <div className="text-center">
          <span className="loading loading-spinner text-neutral"></span>
        </div>
      </>
    );
  }
  if (myReview.length === 0) {
    return (
      <>
        <div className="flex flex-col justify-center items-center h-[30vh]">
          <h1 className="text-3xl font-bold">Opps! No Reviews Found</h1>
        </div>
      </>
    );
  }
  return (
    <div className="w-11/12 md:w-9/12 mx-auto">
      <Helmet>
        <title>Sevice || My Review</title>
      </Helmet>

      <MyReviewCard
        myReview={myReview}
        setMyReview={setMyReview}
        fetchReview={fetchReview}
      ></MyReviewCard>
    </div>
  );
};

export default MyReviews;
