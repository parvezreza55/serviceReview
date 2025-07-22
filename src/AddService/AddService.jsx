import React from "react";
import UseAuth from "../Hook/UseAuth";
import axios from "axios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const AddService = () => {
  const date = new Date();
  const { user } = UseAuth();
  const newDate = date.toLocaleDateString("en-CA");
  const handleAddService = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const serviceData = Object.fromEntries(formData.entries());
    serviceData.addedDate = newDate;

    axios
      .post(
        "https://service-review-server-lovat-seven.vercel.app/services",
        serviceData,
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
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch(() => {});
  };
  return (
    <div className="mt-20 w-11/12 md:w-9/12 mx-auto">
      <Helmet>
        <title>Service || Add Service</title>
      </Helmet>
      <h1 className="text-xl md:text-4xl text-center font-bold mb-5">
        Add Service
      </h1>
      <form onSubmit={handleAddService}>
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
          Add Service
        </button>
      </form>
    </div>
  );
};

export default AddService;
