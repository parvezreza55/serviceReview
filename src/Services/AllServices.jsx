import React from "react";
import { useLoaderData } from "react-router";
import AllServiceCard from "./AllServiceCard";

const AllServices = () => {
  const allServiceData = useLoaderData();
  return (
    <div className="w-11/12 mx-auto mt-24">
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
