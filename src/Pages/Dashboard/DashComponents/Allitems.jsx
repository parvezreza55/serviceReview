import React, { useEffect, useState } from "react";

const Allitems = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://service-review-server-lovat-seven.vercel.app/allService")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div className=" mb-10">
      <h1 className="text-3xl text-center font-bold my-14">All Items</h1>
      <div className="overflow-x-auto  mx-auto border rounded-2xl">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-sm">
              <th>Sl.</th>
              <th>User Name</th>
              <th className="hidden md:flex mt-2">Profile</th>
              <th className="text-center">Email</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {items.map((item, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{item.companyName}</td>
                <td className="hidden md:flex">{item.serviceTitle}</td>
                <td className="text-center">{item.userEmail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Allitems;
