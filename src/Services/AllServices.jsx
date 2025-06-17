import React, { useEffect, useState } from "react";
import AllServiceCard from "./AllServiceCard";
import { FaSearch } from "react-icons/fa";

const AllServices = () => {
  const [allServiceData, setAllServiceData] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch(`http://localhost:3000/allService?searchParams=${search}`)
      .then((res) => res.json())
      .then((data) => setAllServiceData(data));
  }, [search]);
  return (
    <div className="w-11/12 mx-auto mt-24">
      <div className="flex justify-center items-center py-5">
        <label className="input w-9/12">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            className="grow"
            placeholder="Search"
          />
        </label>
      </div>
      <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-center mb-5">
        All services
      </h1>
      <p className="mt-3 opacity-50 text-center mb-5">
        Our platform offers a wide range of personalized services tailored to
        meet your unique needs, from creative design to professional consulting.
        Each service is carefully crafted by experienced providers, ensuring
        quality, reliability, and customer satisfaction. Whether you're looking
        to enhance your brand or simplify daily tasks, our services are here to
        help you succeed.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {allServiceData.map((services) => (
          <AllServiceCard
            key={services._id}
            services={services}
          ></AllServiceCard>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
