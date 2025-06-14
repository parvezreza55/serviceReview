import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import UseAuth from "../../Hook/UseAuth";
import { Bounce, toast } from "react-toastify";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const { createUser, updateUser, setUser } = UseAuth();
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { email, password, name, photoURL } = Object.fromEntries(
      formData.entries()
    );
    const regExpression = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

    if (!password.match(/[A-Z]/)) {
      toast.warn("Use upercase", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    } else if (!password.match(/[a-z]/)) {
      toast.warn("Use lowercase", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    } else if (regExpression.test(password) == false) {
      toast.warn("Password must be at least 6 character", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    }
    createUser(email, password)
      .then((result) => {
        const results = result.user;
        updateUser({ displayName: name, photoURL: photoURL })
          .then(() => {
            setUser({ ...results, displayName: name, photoURL: photoURL });
          })
          .catch((error) => {
            console.log(error);
          });

        if (result.user) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Register Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <form onSubmit={handleRegister} className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-3xl font-bold text-center py-5">Register Please</h1>
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="label">Name </label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Name"
            />
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
            />
            <label className="label">photoURL</label>
            <input
              type="text"
              name="photoURL"
              className="input"
              placeholder="photoURL"
            />
            <label className="label">Password</label>
            <div className="relative">
              <input
                type={showPass ? "text" : "password"}
                name="password"
                className="input"
                placeholder="Password"
              />
              <p
                onClick={() => setShowPass(!showPass)}
                className="absolute top-3 right-8"
              >
                {showPass ? <FaEye /> : <FaEyeSlash></FaEyeSlash>}
              </p>
            </div>
            <div>
              <h1>
                Already Have an Account?
                <Link
                  className="text-blue-500 font-semibold"
                  to={"/auth/login"}
                >
                  Login
                </Link>
              </h1>
            </div>
            <button
              type="submit"
              className="btn bg-blue-400 text-white hover:bg-blue-500 mt-4"
            >
              Register
            </button>
          </fieldset>
        </div>
      </div>
    </form>
  );
};

export default Register;
