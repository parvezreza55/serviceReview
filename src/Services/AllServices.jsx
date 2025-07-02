import React, { useEffect, useState } from "react";
import AllServiceCard from "./AllServiceCard";
import { FaSearch } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const AllServices = () => {
  const [allServiceData, setAllServiceData] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [filter, setFilter] = useState("");
  useEffect(() => {
    fetch(
      `https://service-review-server-lovat-seven.vercel.app/allService?searchParams=${search}&filter=${filter}&sort=${sort}`
    )
      .then((res) => res.json())
      .then((data) => setAllServiceData(data));
  }, [search, filter, sort]);
  return (
    <div className="w-11/12 mx-auto mt-7">
      <Helmet>
        <title>Service || All Service</title>
      </Helmet>
      <div className="flex flex-col md:flex-row justify-center items-center gap-2 mb-5">
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
        <div className=" flex gap-2 justify-end">
          <fieldset
            onChange={(e) => setSort(e.target.value)}
            className="fieldset w-[20vw] md:w-[10vw]"
          >
            <select defaultValue="Pick a browser" className="select">
              <option value="">Sort</option>
              <option value="asc">Low to High Price</option>
              <option value="desc">High to low price</option>
            </select>
          </fieldset>
          <fieldset
            onChange={(e) => setFilter(e.target.value)}
            className="fieldset w-[20vw] md:w-[11vw]"
          >
            <select className="select">
              <option value="">Filter</option>
              <option value="design">Design</option>
              <option value="pet">Pet care</option>
              <option value="marketing"> Marketing</option>
              <option value="printing">Printing</option>
              <option value="education">Education</option>
              <option value="Web">Web development</option>
              <option value="health">Health and Fitness</option>
            </select>
          </fieldset>
        </div>
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
