import React from "react";
import FeatureCard from "./FeatureCard";

const Feature = ({ serviceData }) => {
  return (
    <>
      <div data-aos="fade-right" className="w-11/12 md:w-9/12 mx-auto mt-24">
        <div className="text-center mb-7">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold heading-font">
            Featured Services
          </h1>
          <p className="mt-3 opacity-50">
            Featured Services highlights the most important and valuable
            offerings your business provides. It gives users a quick overview of
            key services that define your brand’s strengths. This section helps
            guide visitors toward what you do best and encourages deeper
            engagement.
          </p>
        </div>
        <div
          data-aos="zoom-in-down"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {serviceData.map((service) => (
            <FeatureCard key={service.id} service={service}></FeatureCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default Feature;
