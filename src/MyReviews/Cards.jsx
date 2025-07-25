import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";
import UseAuth from "../Hook/UseAuth";
import { Bounce, toast } from "react-toastify";

const Cards = ({ review, myReview, fetchReview }) => {
  console.log(myReview);
  const { user } = UseAuth();
  const [rating, setRating] = useState(0);
  const { serviceTitle, _id } = review;
  const handleReviews = (e) => {
    e.preventDefault();
    const form = e.target;
    const textarea = form.textarea.value;
    const reviewsData = {
      textarea,
      rating,
    };

    axios
      .patch(
        `https://service-review-server-lovat-seven.vercel.app/review/${_id}`,
        reviewsData,
        {
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
          },
        }
      )
      .then((res) => {
        if (res.data.modifiedCount) {
          toast.success("updated", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        }
        // const updateReview = myReview.map((rev) =>
        //   rev._id === _id ? { ...rev, textarea, rating } : rev
        // );
        // setMyReview(updateReview);
        fetchReview();
      })
      .catch(() => {});

    form.reset();
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `https://service-review-server-lovat-seven.vercel.app/review/${id}`,
            {
              headers: {
                Authorization: `Bearer ${user.accessToken}`,
              },
            }
          )
          .then(() => {})
          .catch(() => {});
        Swal.fire({
          title: "Deleted!",
          text: "Your review has been deleted.",
          icon: "success",
        });
        // remaining data
        fetchReview();
      }
    });
  };
  return (
    <div>
      <div className="card px-5 bg-base-100 shadow-sm mt-5">
        <div className="card-body justify-center items-center">
          <h2 className="">
            <div className="flex flex-col">
              <img className="w-16 rounded-full" src={review.photoURL} alt="" />
              <p>{review.name}</p>
            </div>
          </h2>
          <p className="text-2xl font-bold">{review.serviceTitle}</p>
          <div className="rating">
            {[1, 2, 3, 4, 5].map((number, index) => (
              <input
                key={index}
                type="radio"
                className="mask mask-star-2 bg-orange-400"
                aria-label="1 star"
                defaultChecked={review.rating == number}
              />
            ))}
          </div>
          <p className="text-center">{review.textarea}</p>
        </div>
        <div className="flex justify-between mb-3">
          <div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="btn bg-blue-400 text-white hover:bg-blue-300"
              onClick={() => document.getElementById(`${_id}`).showModal()}
            >
              Update now
            </button>
            <dialog id={_id} className="modal">
              <div className="modal-box w-11/12 max-w-5xl">
                <div>
                  <form onSubmit={handleReviews}>
                    <fieldset className="fieldset bg-base-300 border-base-300 rounded-box  border p-4">
                      <legend className="fieldset-legend">Service Title</legend>
                      <input
                        type="text"
                        defaultValue={serviceTitle}
                        name="serviceTitle"
                        className="input w-full"
                        placeholder="Service Title"
                        required
                      />
                    </fieldset>
                    <fieldset className="fieldset bg-base-300 border-base-300 rounded-box  border p-4">
                      <legend className="fieldset-legend">
                        Write a review
                      </legend>
                      <textarea
                        className="textarea h-24 w-full"
                        name="textarea"
                        placeholder="Write a Review"
                        required
                      ></textarea>
                    </fieldset>
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
                    <button className="btn bg-blue-400 text-white hover:bg-blue-300 mt-5">
                      Update
                    </button>
                  </form>
                </div>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
          <div>
            <button
              onClick={() => handleDelete(_id)}
              className="btn bg-blue-400 text-white hover:bg-blue-300"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
