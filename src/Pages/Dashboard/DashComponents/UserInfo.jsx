import React from "react";

const UserInfo = ({ userData }) => {
  return (
    <div className="mt-24 mb-10 w-11/12 mx-auto">
      <h1 className="text-3xl text-center font-bold mb-10">User Data</h1>
      <div className="overflow-x-auto md:w-9/12 mx-auto border rounded-2xl">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Sl.</th>
              <th>Name</th>
              <th className="hidden md:flex">Profile</th>
              <th className="text-center">Email</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {userData.map((user, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{user.displayName}</td>
                <td className="hidden md:flex">
                  <div className="mask mask-squircle h-12 w-12">
                    <img src={user.photoURL} alt="" />
                  </div>
                </td>
                <td className="text-center">{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserInfo;
