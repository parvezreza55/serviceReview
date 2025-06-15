import React, { useState } from "react";
import { Link, useLoaderData, useLocation, useNavigate } from "react-router";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import UseAuth from "../Hook/UseAuth";
import axios from "axios";

const ServiceDetails = () => {
  const detailsData = useLoaderData();
  const location = useLocation();
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [reviewsData, setReviewsData] = useState(null);
  const { user } = UseAuth();
  const handleAddRiview = () => {
    if (!user) {
      return navigate("/auth/login", { state: location?.pathname });
    }
  };

  const {
    website,
    serviceTitle,
    serviceImage,
    price,
    description,
    companyName,
    category,
    addedDate,
  } = detailsData;
  const handleReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const textarea = form.textarea.value;
    const date = new Date();
    const newDate = date.toLocaleDateString("en-CA");
    const photoURL = user.photoURL;
    const userEmail = user.email;
    const name = user.displayName;
    const reviewsData = {
      textarea,
      newDate,
      rating,
      photoURL,
      name,
      userEmail,
      serviceTitle,
    };
    setReviewsData(reviewsData);
    axios
      .post("http://localhost:3000/review", reviewsData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="md:w-11/12 mx-auto mt-10">
        <div className="card bg-base-100 w-9/12 mx-auto shadow-sm">
          <figure className="px-10 pt-10">
            <img
              src={serviceImage}
              alt="Shoes"
              className="rounded-xl md:h-[22em] w-full"
            />
          </figure>
          <div className="px-10 md:px-16 py-3">
            <h2 className="text-xl md:text-2xl space-y-3 font-bold">
              {serviceTitle}
            </h2>
            <div>
              <p>{description}</p>
              <div className="text-xs md:text-lg grid grid-cols-1 md:grid-cols-2 md:w-3/4 mx-auto mt-3 font-semibold mb-3">
                <p>Company : {companyName}</p>
                <p>Category : {category}</p>
                <p>
                  Website :
                  <Link className="text-xs ml-2 font-normal text-blue-400">
                    {website}
                  </Link>{" "}
                </p>
                <p>Price : $ {price}</p>
                <p>Created : {addedDate}</p>
              </div>
            </div>{" "}
            <div>
              <form onSubmit={handleReview} className="fieldset">
                <legend className="fieldset-legend">Write a review</legend>
                <textarea
                  className="textarea h-24 w-full"
                  name="textarea"
                  placeholder="Write a Review"
                ></textarea>
                <div className="flex items-center gap-2">
                  <h1>Rating:</h1>
                  <div
                    onChange={(e) => setRating(parseInt(e.target.value))}
                    className="rating"
                  >
                    <input
                      type="radio"
                      value="1"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                      aria-label="1 star"
                    />
                    <input
                      type="radio"
                      value="2"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                      aria-label="2 star"
                      defaultChecked
                    />
                    <input
                      type="radio"
                      value="3"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                      aria-label="3 star"
                    />
                    <input
                      type="radio"
                      value="4"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                      aria-label="4 star"
                    />
                    <input
                      type="radio"
                      value="5"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                      aria-label="5 star"
                    />
                  </div>
                </div>
                <div className="card-actions justify-end">
                  <button
                    type="submit"
                    onClick={handleAddRiview}
                    className="btn bg-blue-400 text-white hover:bg-blue-300"
                  >
                    Add Review
                  </button>
                </div>
              </form>
              {reviewsData ? (
                <>
                  <div className="card w-fit px-5 bg-base-100 card-xs shadow-sm mt-5">
                    <div className="card-body">
                      <h2 className="card-title">
                        <div className="flex flex-col">
                          <img
                            className="w-16 rounded-full"
                            src={reviewsData.photoURL}
                            alt=""
                          />
                          <p className="font-normal">{reviewsData.newDate}</p>
                        </div>
                        <p className="-ml-3">{reviewsData.name}</p>
                      </h2>
                      <div className="rating">
                        <input
                          type="radio"
                          value="1"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                          aria-label="1 star"
                          checked={rating === 1}
                        />
                        <input
                          type="radio"
                          value="2"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                          aria-label="2 star"
                          checked={rating === 2}
                        />
                        <input
                          type="radio"
                          value="3"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                          aria-label="3 star"
                          checked={rating === 3}
                        />
                        <input
                          type="radio"
                          value="4"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                          aria-label="4 star"
                          checked={rating === 4}
                        />
                        <input
                          type="radio"
                          value="5"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                          aria-label="5 star"
                          checked={rating === 5}
                        />
                      </div>
                      <p>{reviewsData.textarea}</p>
                    </div>
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetails;
