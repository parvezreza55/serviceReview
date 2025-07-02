import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { MdOutlineRateReview } from "react-icons/md";

const Overview = () => {
  const [userData, setUserData] = useState([]);
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("https://service-review-server-lovat-seven.vercel.app/users")
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, []);
  useEffect(() => {
    fetch("https://service-review-server-lovat-seven.vercel.app/allreview")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return (
    <div>
      <div className="md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center space-y-2 ">
        <div className="bg-base-200 px-10 py-3 rounded-2xl">
          {/* <div className="stat-figure text-secondary"></div> */}
          <div className="stat-title text-lg font-semibold">Total User</div>
          <div className="flex items-center justify-evenly text-blue-400">
            <div className="stat-value">{userData.length}</div>
            <h1>
              <FaUser size={25}></FaUser>
            </h1>
          </div>
          <div className="stat-desc">21% more than last month</div>
        </div>

        {/* card 2  */}
        <div className="bg-base-200 px-10 py-3 rounded-2xl">
          {/* <div className="stat-figure text-secondary"></div> */}
          <div className="stat-title text-lg font-semibold">Total Review</div>
          <div className="flex items-center justify-evenly text-blue-400">
            <div className="stat-value">{review.length}</div>
            <h1>
              <MdOutlineRateReview size={25}></MdOutlineRateReview>
            </h1>
          </div>
          <div className="stat-desc">21% more than last month</div>
        </div>
        {/* card 3  */}
        <div className="bg-base-200 px-10 py-3 rounded-2xl">
          {/* <div className="stat-figure text-secondary"></div> */}
          <div className="stat-title text-lg font-semibold">Review Added</div>
          <div className="flex items-center justify-evenly text-blue-400">
            <div className="stat-value">100+</div>
            <h1>
              <FaUser size={25}></FaUser>
            </h1>
          </div>
          <div className="stat-desc">21% more than last month</div>
        </div>
        {/* card 4  */}
        <div className="bg-base-200 px-10 py-3 rounded-2xl">
          {/* <div className="stat-figure text-secondary"></div> */}
          <div className="stat-title text-lg font-semibold">Good Review</div>
          <div className="flex items-center justify-evenly text-blue-400">
            <div className="stat-value">60+</div>
            <h1>
              <FaUser size={25}></FaUser>
            </h1>
          </div>
          <div className="stat-desc">21% more than last month</div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
