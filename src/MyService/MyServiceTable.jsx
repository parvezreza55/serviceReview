import axios from "axios";
import React, { use, useState } from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";
import UseAuth from "../Hook/UseAuth";

const MyServiceTable = ({ myServices }) => {
  const { user } = UseAuth();
  const servicesData = use(myServices);
  const [myServiceData, setMyServiceData] = useState(servicesData);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `https://service-review-server-lovat-seven.vercel.app/myServices/${id}`,
            {
              headers: {
                Authorization: `Bearer ${user.accessToken}`,
              },
            }
          )
          .then(() => {})
          .catch(() => {});
        Swal.fire({
          title: "Deleted!",
          text: "Your Service has been deleted.",
          icon: "success",
        });
        // remaining data
        const remainingData = myServiceData.filter((rev) => rev._id !== id);
        setMyServiceData(remainingData);
      }
    });
  };
  if (myServiceData.length === 0) {
    return (
      <>
        <div className="flex flex-col justify-center items-center h-[30vh]">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold heading-font">
            Opps! No Added sevice
          </h1>
        </div>
      </>
    );
  }
  return (
    <div className="w-11/12 md:w-9/12 mx-auto mt-24">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold heading-font text-center mb-8">
        My Services
      </h1>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Function</th>
            </tr>
          </thead>
          <tbody>
            {myServiceData.map((service, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{service.serviceTitle}</td>
                <td>
                  <div className="join space-x-3 space-y-3 md:space-y-0">
                    <button className="btn join-item">
                      <Link to={`/myServices/${service._id}`}>Update</Link>
                    </button>
                    <button
                      onClick={() => handleDelete(service._id)}
                      className="btn join-item"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyServiceTable;
