import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useLocation, useNavigate } from "react-router";
import UseAuth from "../Hook/UseAuth";
import axios from "axios";
import Swal from "sweetalert2";

const ServiceDetails = () => {
  const [reviewData, setReviewData] = useState([]);
  const detailsData = useLoaderData();
  const location = useLocation();
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const { user } = UseAuth();
  const Refech = () => {
    fetch(
      `https://service-review-server-lovat-seven.vercel.app/allService/review/${detailsData._id}`
    )
      .then((res) => res.json())
      .then((data) => setReviewData(data));
  };
  useEffect(() => {
    Refech();
  }, [detailsData]);
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
    _id,
  } = detailsData;
  const handleReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const textarea = form.textarea.value;
    const date = new Date();
    const newDate = date.toLocaleDateString("en-CA");
    const photoURL = user?.photoURL;
    const userEmail = user?.email;
    const name = user.displayName;
    const revId = _id;
    const reviewsData = {
      textarea,
      newDate,
      rating,
      photoURL,
      name,
      userEmail,
      serviceTitle,
      revId,
    };
    axios
      .post(
        "https://service-review-server-lovat-seven.vercel.app/review",
        reviewsData,
        {
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
          },
        }
      )
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your review has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        Refech();
      })
      .catch(() => {});
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
              <div className="md:text-lg grid grid-cols-1 md:grid-cols-2 mt-3 font-semibold space-y-3">
                <div className="space-y-2">
                  <p className="text-sm ">Company : {companyName}</p>
                  <p className="text-sm ">Category : {category}</p>
                  <p className="text-sm ">
                    Website :
                    <Link className="text-sm ml-2 font-normal text-blue-400">
                      {website}
                    </Link>{" "}
                  </p>{" "}
                </div>
                <div className="space-y-2">
                  <p className="text-sm ">Price : $ {price}</p>
                  <p className="text-sm ">Created : {addedDate}</p>
                </div>
              </div>
              <p className="font-bold my-3">Review: {reviewData.length}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {reviewData.map((reviews, index) => (
                <div key={index} className="card-body border rounded-2xl">
                  <h2 className="card-title">
                    <div className="flex flex-col">
                      <img
                        className="w-16 rounded-full"
                        src={reviews.photoURL}
                        alt=""
                      />
                      <p className="font-normal">{reviews.newDate}</p>
                    </div>
                    <p className="ml-3">{reviews.name}</p>
                  </h2>
                  <div>
                    <div className="rating">
                      {[1, 2, 3, 4, 5].map((number, index) => (
                        <input
                          key={index}
                          type="radio"
                          className="mask mask-star-2 bg-orange-400"
                          aria-label="1 star"
                          defaultChecked={reviews.rating == number}
                        />
                      ))}
                    </div>
                    <p>{reviews.textarea}</p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <form onSubmit={handleReview} className="fieldset">
                <legend className="fieldset-legend">Write a review</legend>
                <textarea
                  className="textarea h-24 w-full"
                  name="textarea"
                  placeholder="Write a Review"
                  required
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetails;
