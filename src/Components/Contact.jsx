import React from "react";

const Contact = () => {
  return (
    <div data-aos="zoom-in-up" className="w-11/12 mx-auto mt-24">
      <div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold heading-font text-center">
          Contact Us
        </h1>
        <p className="opacity-50 text-center mt-3">
          Feel free to contact with us to get better response
        </p>
        <div className="flex justify-center items-center mt-10">
          <div className="card bg-base-100 w-9/12 mx-auto shrink-0 shadow-sm border border-gray-50">
            <div className="card-body">
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input w-full"
                  placeholder="Email"
                />
                <label className="label">Message</label>
                <textarea
                  type="text"
                  className="input w-full"
                  placeholder="Message"
                />
                <button className="btn bg-blue-400 hover:bg-blue-300 text-white mt-4">
                  Submit
                </button>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
