import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import UseAuth from "../../Hook/UseAuth";
import Swal from "sweetalert2";
import { Bounce, toast } from "react-toastify";

const Login = () => {
  const { signInGoogle, signIn, setUser } = UseAuth();
  const [showPass, setShowPass] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "LogIn Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(location.state || "/");
      })
      .catch(() => {
        toast.warn("Invalid email or password", {
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
      });
  };
  const handleGoogle = () => {
    signInGoogle()
      .then((result) => {
        const results = result.user;
        setUser(results);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "LogIn Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(location.state || "/");
      })
      .catch(() => {});
  };
  return (
    <form onSubmit={handleLogin} className="hero mt-24">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-3xl font-bold text-center py-5">LogIn</h1>
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
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
              <div onClick={handleGoogle}>
                <h1 className="input justify-center cursor-pointer">
                  <FcGoogle size={20}></FcGoogle>
                  <span className="text-xs font-semibold">
                    Continue With Google
                  </span>
                </h1>
              </div>
              <h1>
                Already Have an Account?
                <Link
                  className="text-blue-500 font-semibold"
                  to={"/auth/register"}
                >
                  Register
                </Link>
              </h1>
            </div>
            <button
              type="submit"
              className="btn bg-blue-400 text-white hover:bg-blue-500 mt-4"
            >
              LogIn
            </button>
          </fieldset>
        </div>
      </div>
    </form>
  );
};

export default Login;
