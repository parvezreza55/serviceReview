import React from "react";

const Faq = () => {
  return (
    <div data-aos="zoom-in-up" className="w-11/12 md:w-9/12 mx-auto mt-24">
      <h1 className="text-xl md:text-4xl font-bold text-center my-16">FAQ</h1>
      <div className="collapse collapse-plus bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title font-semibold">
          How do I add a service?
        </div>
        <div className="collapse-content text-sm">
          After logging in, navigate to the "Add Service" page. Fill in the
          service details and submit. Your service will appear on the All
          Services page
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold">
          Who can post reviews?
        </div>
        <div className="collapse-content text-sm">
          Only logged-in users can post, edit, or delete reviews. This ensures
          reviews are tied to real users for authenticity.
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold">
          Can I update or delete my services or reviews?
        </div>
        <div className="collapse-content text-sm">
          Yes! You can visit My Services or My Reviews to update or delete any
          content you have added.
        </div>
      </div>
    </div>
  );
};

export default Faq;
