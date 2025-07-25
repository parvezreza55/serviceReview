import React from "react";
import { Link } from "react-router";

const AllServiceCard = ({ services }) => {
  const { price, description, serviceTitle, serviceImage, category, _id } =
    services;
  return (
    <div data-aos="zoom-in-up" className="card bg-base-100 shadow-sm">
      <figure>
        <img
          className="h-[19em] w-full object-cover"
          src={serviceImage}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{serviceTitle}</h2>
        <p>{description}</p>
        <p>Category: {category}</p>
        <p className="font-bold">Price: $ {price}</p>
        <div className="card-actions justify-end">
          <button className="btn bg-blue-400 text-white hover:bg-blue-300">
            <Link to={`/serviceDetails/${_id}`}>See Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllServiceCard;
