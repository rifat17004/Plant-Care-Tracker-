import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-base-200 py-12 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1470058869958-2a77a61712a2?auto=format&fit=crop&q=80&w=2000)",
        backgroundSize: "cover",
      }}
    >
      <div className="card w-full max-auto max-w-md shadow-2xl bg-base-100/95 backdrop-blur-sm">
        <div className="card-body">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-success">Welcome Back</h2>
            <p className="text-sm opacity-60">
              Log in to check on your plants 🌿
            </p>
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Email Address</span>
            </label>
            <input
              type="email"
              placeholder="email@example.com"
              className="input input-bordered focus:input-success w-full"
            />
          </div>

          <div className="form-control w-full mt-4">
            <label className="label">
              <span className="label-text font-semibold">Password</span>
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="input input-bordered focus:input-success w-full"
            />
          </div>

          <div className="form-control mt-8 flex justify-between ">
            <button className="btn btn-success  text-white">
              Login to LeafLog
            </button>
            <button className="btn btn-success text-white">
              Login with google
            </button>
          </div>

          <div className="divider">OR</div>

          <p className="text-center text-sm">
            New to the garden?
            <Link
              to="/auth/register"
              className="link link-success font-bold ml-1"
            >
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
