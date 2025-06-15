import React, { use } from "react";
import Cards from "./Cards";

const MyReviewCard = ({ myReviews }) => {
  const reviews = use(myReviews);
  return (
    <div className="md:w-11/12 mx-auto flex flex-col justify-center items-center">
      {reviews.map((review) => (
        <Cards key={review._id} review={review}></Cards>
      ))}
    </div>
  );
};

export default MyReviewCard;
