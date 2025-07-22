import React from "react";
import fbImg from "../assets/images/firebase.png";
import verImg from "../assets/images/vercel.png";
import jwImg from "../assets/images/jwt.png";
import Marquee from "react-fast-marquee";

const MeetOurPartner = () => {
  return (
    <div data-aos="zoom-in-up" className="mt-24 w-11/12 mx-auto">
      <h1 className="text-2xl md:text-4xl font-bold my-10 md:mb-16 text-center">
        Meet our partners
      </h1>
      <Marquee>
        <div className="grid grid-cols-3 gap-20 mx-28">
          <div className=" flex-col bg-base-200 shadow-sm p-4 rounded-2xl">
            <div className="mb-3">
              <img className="w-20 rounded-full" src={fbImg} alt="" />
            </div>
            <div>
              <p className="text-xl font-bold">Firebase</p>
              <p className="opacity-50 w-[50vw] md:w-[30vw] ">
                Firebase Authentication to handle user sign-in and issue
                Firebase ID Tokens, which securely identify users across the
                app. Firebase also supports real-time databases, and secure
                hosting for static content.
              </p>
            </div>
          </div>
          <div className=" flex flex-col bg-base-200 shadow-sm p-4 rounded-2xl">
            <div className="mb-3">
              <img className="w-20 rounded-full" src={verImg} alt="" />
            </div>
            <div>
              <p className="text-xl font-bold">Vercel</p>
              <p className="opacity-50 w-[50vw] md:w-[30vw]">
                Vercel used to host and deploy our frontend application. Known
                for its seamless integration with frameworks like Next.js and
                React, Vercel provides ultra-fast global content delivery and
                scalable performance with zero configuration.
              </p>
            </div>
          </div>
          <div className=" flex flex-col bg-base-200 shadow-sm p-4 rounded-2xl">
            <div className="mb-3">
              <img className="w-20 rounded-full" src={jwImg} alt="" />
            </div>
            <div>
              <p className="text-xl font-bold">JWT (JSON Web Token)</p>
              <p className="opacity-50 w-[50vw] md:w-[30vw]">
                JWT ensures secure, stateless user sessions. By encoding user
                identity in signed tokens, we can verify authentication and
                protect private routes without relying on traditional session
                storage.
              </p>
            </div>
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default MeetOurPartner;
