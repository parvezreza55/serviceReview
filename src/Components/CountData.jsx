import React from "react";
import CountUp from "react-countup";

const CountData = ({ userData, serviceData, userReview }) => {
  return (
    <div data-aos="zoom-in-up" className="w-9/12 mx-auto my-24">
      <h1 className="text-xl md:text-4xl space-y-3 font-bold my-10 text-center">
        Our Impact
      </h1>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:justify-around bg-base-100 shadow-sm rounded-2xl px-9 py-14">
        <div className="text-xl md:text-4xl space-y-3 font-bold text-center">
          <h1>Users</h1>
          <div className="text-blue-400">
            <CountUp end={userData.length} duration={10}></CountUp>
          </div>
        </div>
        <div className="text-xl md:text-4xl space-y-3 font-bold text-center">
          <h1>Reviews</h1>
          <div className="text-blue-400">
            <CountUp end={userReview.length} duration={10}></CountUp>
          </div>
        </div>
        <div className="text-xl md:text-4xl space-y-3 font-bold text-center">
          <h1>Services </h1>
          <div className="text-blue-400">
            <CountUp end={serviceData.length} duration={10}></CountUp>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountData;
