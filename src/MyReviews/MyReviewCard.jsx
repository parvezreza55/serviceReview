import React from "react";
import Cards from "./Cards";

const MyReviewCard = ({ myReview, fetchReview, setMyReview }) => {
  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-extrabold heading-font my-10">
        My Reviews
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {myReview.map((review) => (
          <Cards
            key={review._id}
            review={review}
            myReview={myReview}
            setMyReview={setMyReview}
            fetchReview={fetchReview}
          ></Cards>
        ))}
      </div>
    </div>
  );
};

export default MyReviewCard;
