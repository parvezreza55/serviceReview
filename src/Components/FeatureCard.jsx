import React from "react";
import { Link } from "react-router";

const FeatureCard = ({ service }) => {
  const { price, description, serviceTitle, serviceImage, _id } = service;
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <img className="h-[19em]" src={serviceImage} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-xl">{serviceTitle}</h2>
        <p className="opacity-90">{description}</p>
        <p className="font-semibold">Price: $ {price}</p>
        <div className="card-actions justify-end">
          <button className="btn bg-blue-400 text-white hover:bg-blue-300">
            <Link to={`/serviceDetails/${_id}`}>See Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
