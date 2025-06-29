import React, { Suspense } from "react";
import UseAuth from "../Hook/UseAuth";
import MyReviewCard from "./MyReviewCard";
import useReviewApi from "../Api/useReviewApi";
import { Helmet } from "react-helmet-async";

const MyReviews = () => {
  const { user } = UseAuth();
  const { myReviews } = useReviewApi();
  return (
    <div>
      <Helmet>
        <title>Sevice || My Review</title>
      </Helmet>
      <Suspense
        fallback={
          <>
            <div className="text-center">
              <span className="loading loading-spinner text-neutral"></span>
            </div>
          </>
        }
      >
        <MyReviewCard
          myReviews={myReviews(user?.email, user?.accessToken)}
        ></MyReviewCard>
      </Suspense>
    </div>
  );
};

export default MyReviews;
