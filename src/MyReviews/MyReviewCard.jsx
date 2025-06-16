import React, { use, useState } from "react";
import Cards from "./Cards";

const MyReviewCard = ({ myReviews }) => {
  const reviews = use(myReviews);
  const [reviewsData, setReviewsData] = useState(reviews);
  return (
    <div className="w-11/12 mx-auto flex flex-col justify-center items-center">
      {reviewsData.map((review) => (
        <Cards
          key={review._id}
          review={review}
          reviews={reviews}
          setReviewsData={setReviewsData}
          reviewsData={reviewsData}
        ></Cards>
      ))}
    </div>
  );
};

export default MyReviewCard;
