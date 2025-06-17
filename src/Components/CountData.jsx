import React from "react";
import CountUp from "react-countup";

const CountData = ({ userData, serviceData, userReview }) => {
  return (
    <div className="w-11/12 mx-auto my-24">
      <h1 className="text-xl md:text-4xl font-bold my-10 text-center">
        Platform Statistics
      </h1>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:justify-around bg-base-100 shadow-xl rounded-2xl px-9 py-14">
        <div className="text-xl md:text-4xl font-bold text-center">
          <h1>Users</h1>
          <CountUp end={userData.length} duration={10}></CountUp>
        </div>
        <div className="text-xl md:text-4xl font-bold text-center">
          <h1>Reviews</h1>
          <CountUp end={userReview.length} duration={10}></CountUp>
        </div>
        <div className="text-xl md:text-4xl font-bold text-center">
          <h1>Services </h1>
          <CountUp end={serviceData.length} duration={10}></CountUp>
        </div>
      </div>
    </div>
  );
};

export default CountData;
