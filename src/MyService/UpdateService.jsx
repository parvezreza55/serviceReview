import axios from "axios";
import React from "react";
import { useNavigate, useParams } from "react-router";
import Swal from "sweetalert2";
import UseAuth from "../Hook/UseAuth";

const UpdateService = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id);
  const date = new Date();
  const { user } = UseAuth();
  const newDate = date.toLocaleDateString("en-CA");
  const handleUpdateService = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const serviceData = Object.fromEntries(formData.entries());
    serviceData.addedDate = newDate;
    console.log(user);
    axios
      .put(`http://localhost:3000/myServices/${id}`, serviceData, {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      })
      .then((res) => {
        if (res.data.modifiedCount) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        navigate("/myServices");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="mt-20  w-11/12 mx-auto">
      <h1 className="text-xl md:text-4xl text-center font-bold mb-5">
        Update Service
      </h1>
      <form onSubmit={handleUpdateService}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <fieldset className="fieldset bg-base-300 border-base-300 rounded-box  border p-4">
            <legend className="fieldset-legend">Service Image</legend>
            <input
              type="text"
              name="Service Image"
              className="input w-full"
              placeholder="Service Image"
              required
            />
          </fieldset>
          <fieldset className="fieldset bg-base-300 border-base-300 rounded-box  border p-4">
            <legend className="fieldset-legend">Service Title</legend>
            <input
              type="text"
              name="serviceTitle"
              className="input w-full"
              placeholder="Service Title"
              required
            />
          </fieldset>
          <fieldset className="fieldset bg-base-300 border-base-300 rounded-box  border p-4">
            <legend className="fieldset-legend">Company Name</legend>
            <input
              type="text"
              name="companyName"
              className="input w-full"
              placeholder="Company Name"
              required
            />
          </fieldset>
          <fieldset className="fieldset bg-base-300 border-base-300 rounded-box  border p-4">
            <legend className="fieldset-legend">Website</legend>
            <input
              type="text"
              name="website"
              className="input w-full"
              placeholder="Website"
              required
            />
          </fieldset>
          <fieldset className="fieldset bg-base-300 border-base-300 rounded-box  border p-4">
            <legend className="fieldset-legend">Description</legend>
            <input
              type="text"
              name="description"
              className="input w-full"
              placeholder="Description"
              required
            />
          </fieldset>
          <fieldset className="fieldset bg-base-300 border-base-300 rounded-box  border p-4">
            <legend className="fieldset-legend">Category</legend>
            <input
              type="text"
              name="category"
              className="input w-full"
              placeholder="Category"
              required
            />
          </fieldset>
          <fieldset className="fieldset bg-base-300 border-base-300 rounded-box  border p-4">
            <legend className="fieldset-legend">Price</legend>
            <input
              type="text"
              name="price"
              className="input w-full"
              placeholder="Price"
              required
            />
          </fieldset>
          <fieldset className="fieldset bg-base-300 border-base-300 rounded-box  border p-4">
            <legend className="fieldset-legend">Email</legend>
            <input
              type="email"
              name="userEmail"
              className="input w-full"
              placeholder="Email"
              required
              value={user.email}
            />
          </fieldset>
        </div>
        <button
          type="submit"
          className="btn w-full bg-blue-400 text-white hover:bg-blue-300 mt-10"
        >
          Update Service
        </button>
      </form>
    </div>
  );
};

export default UpdateService;
