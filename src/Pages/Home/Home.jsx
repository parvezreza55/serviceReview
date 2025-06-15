import React from "react";
import Banner from "../../Components/Banner";
import { useLoaderData } from "react-router";
import Feature from "../../Components/Feature";

const Home = () => {
  const serviceData = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <Feature serviceData={serviceData}></Feature>
    </div>
  );
};

export default Home;
