import React from "react";

const MyRevTable = ({ myReviewData }) => {
  console.log(myReviewData);
  return (
    <div>
      <h1 className="text-3xl text-center font-bold my-14">My Reviews</h1>
      <div className="overflow-x-auto  mx-auto border rounded-2xl">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Sl.</th>
              <th>User Name</th>
              <th className="hidden md:flex mt-2">Profile</th>
              <th className="text-center">Email</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {myReviewData.map((review, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{review.name}</td>
                <td className="hidden md:flex">
                  <div>
                    {" "}
                    <img
                      className="rounded-2xl w-10"
                      src={review.photoURL}
                      alt=""
                    />
                  </div>
                </td>
                <td className="text-center">{review.userEmail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyRevTable;
