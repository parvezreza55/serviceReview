import React, { Suspense } from "react";
import UseAuth from "../Hook/UseAuth";
import MyReviewCard from "./MyReviewCard";
import { myReviews } from "../Api/myReviews";

const MyReviews = () => {
  const { user } = UseAuth();
  return (
    <div>
      <Suspense
        fallback={
          <>
            <div className="text-center">
              <span className="loading loading-spinner text-neutral"></span>
            </div>
          </>
        }
      >
        <MyReviewCard myReviews={myReviews(user.email)}></MyReviewCard>
      </Suspense>
    </div>
  );
};

export default MyReviews;
