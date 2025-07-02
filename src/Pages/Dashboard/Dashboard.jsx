import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { MdOutlineRateReview } from "react-icons/md";
import UserInfo from "./DashComponents/UserInfo";

const Dashboard = () => {
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
    <div className="">
      <UserInfo userData={userData}></UserInfo>
    </div>
  );
};

export default Dashboard;
