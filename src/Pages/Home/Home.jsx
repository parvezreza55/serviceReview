import React, { useEffect, useState } from "react";
import Banner from "../../Components/Banner";
import { useLoaderData } from "react-router";
import Feature from "../../Components/Feature";
import MeetOurPartner from "../../Components/MeetOurPartner";
import Faq from "../../Components/Faq";
import Contact from "../../Components/Contact";
import CountData from "../../Components/CountData";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const [userData, setUserData] = useState([]);
  const [userReview, setuserReview] = useState([]);

  useEffect(() => {
    fetch("https://service-review-server-lovat-seven.vercel.app/users")
      .then((res) => res.json())
      .then((data) => {
        setUserData(data);
      });
  }, []);
  useEffect(() => {
    fetch("https://service-review-server-lovat-seven.vercel.app/allreview")
      .then((res) => res.json())
      .then((data) => {
        setuserReview(data);
      });
  }, []);

  const serviceData = useLoaderData();
  return (
    <div>
      <Helmet>
        <title>Service || Home</title>
      </Helmet>
      <Banner></Banner>
      <Feature serviceData={serviceData}></Feature>
      <MeetOurPartner></MeetOurPartner>
      <CountData
        userData={userData}
        serviceData={serviceData}
        // userReview={myReviews(user?.email, user?.accessToken)}
        userReview={userReview}
      ></CountData>
      <Faq></Faq>
      <Contact></Contact>
    </div>
  );
};

export default Home;
