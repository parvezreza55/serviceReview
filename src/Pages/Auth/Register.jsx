import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div class="hero bg-base-200 min-h-screen">
      <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 class="text-3xl font-bold text-center py-5">Register Please</h1>
        <div class="card-body">
          <fieldset class="fieldset">
            <label class="label">Name </label>
            <input type="text" name="name" class="input" placeholder="Name" />
            <label class="label">Email</label>
            <input
              type="email"
              name="email"
              class="input"
              placeholder="Email"
            />
            <label class="label">photoURL</label>
            <input
              type="text"
              name="photoURL"
              class="input"
              placeholder="photoURL"
            />
            <label class="label">Password</label>
            <input type="password" class="input" placeholder="Password" />
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
            <button class="btn bg-blue-400 text-white hover:bg-blue-500 mt-4">
              Register
            </button>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Register;
