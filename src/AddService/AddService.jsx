import React from "react";
import UseAuth from "../Hook/UseAuth";

const AddService = () => {
  const date = new Date();
  const { user } = UseAuth();
  const newDate = date.toLocaleDateString("en-CA");
  const handleAddService = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const serviceData = Object.fromEntries(formData.entries());
    serviceData.newDate = newDate;
    console.log(serviceData);
  };
  return (
    <div className="mt-20  w-11/12 mx-auto">
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
            />
          </fieldset>
          <fieldset className="fieldset bg-base-300 border-base-300 rounded-box  border p-4">
            <legend className="fieldset-legend">Service Title</legend>
            <input
              type="text"
              name="serviceTitle"
              className="input w-full"
              placeholder="Service Title"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-300 border-base-300 rounded-box  border p-4">
            <legend className="fieldset-legend">Company Name</legend>
            <input
              type="text"
              name="companyName"
              className="input w-full"
              placeholder="Company Name"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-300 border-base-300 rounded-box  border p-4">
            <legend className="fieldset-legend">Website</legend>
            <input
              type="text"
              name="website"
              className="input w-full"
              placeholder="Website"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-300 border-base-300 rounded-box  border p-4">
            <legend className="fieldset-legend">Description</legend>
            <input
              type="text"
              name="description"
              className="input w-full"
              placeholder="Description"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-300 border-base-300 rounded-box  border p-4">
            <legend className="fieldset-legend">Category</legend>
            <input
              type="text"
              name="category"
              className="input w-full"
              placeholder="Category"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-300 border-base-300 rounded-box  border p-4">
            <legend className="fieldset-legend">Price</legend>
            <input
              type="text"
              name="price"
              className="input w-full"
              placeholder="Price"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-300 border-base-300 rounded-box  border p-4">
            <legend className="fieldset-legend">Email</legend>
            <input
              type="email"
              name="userEmail"
              className="input w-full"
              placeholder="Email"
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
