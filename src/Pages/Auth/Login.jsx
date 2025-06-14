import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };
  return (
    <form onSubmit={handleLogin} className="hero bg-base-200 min-h-screen">
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
