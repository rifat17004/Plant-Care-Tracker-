import React, { useState } from "react";
import { Link } from "react-router";

const Register = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Side: Visual/Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-success items-center justify-center p-12 text-white relative overflow-hidden">
        <div className="z-10 max-w-md">
          <h1 className="text-5xl font-bold mb-6">Start Your Digital Garden</h1>
          <p className="text-lg opacity-90 leading-relaxed">
            Join thousands of plant parents who use LeafLog to track watering,
            monitor health, and keep their indoor jungle thriving.
          </p>
        </div>
        {/* Decorative background plant image */}
        <img
          src="https://images.unsplash.com/photo-1517191434949-5e90cd67d2b6?auto=format&fit=crop&q=80&w=800"
          className="absolute opacity-20 bottom-[-10%] right-[-10%] w-2/3"
          alt="decor"
        />
      </div>

      {/* Right Side: Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-base-100">
        <div className="w-full max-w-md">
          <div className="mb-10 text-center lg:text-left">
            <h2 className="text-3xl font-bold">Register</h2>
            <p className="opacity-60">Create your free account today.</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">First Name</span>
              </label>
              <input
                type="text"
                placeholder="Jane"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="https://i.ibb.co/CpfMGrBH"
                className="input input-bordered"
              />
            </div>
          </div>

          <div className="form-control w-full mb-4">
            <label className="label pb-2">
              <span className="label-text font-semibold text-gray-700">
                Email Address
              </span>
            </label>
            <input
              type="email"
              placeholder="jane@example.com"
              className="input input-bordered focus:outline-success focus:border-success w-full bg-base-100"
            />
          </div>

          <div className="form-control w-full mt-4">
            <label className="label pb-2">
              <span className="label-text font-semibold text-gray-700">
                Password
              </span>
            </label>
            <div className="relative">
              <input
                type={!open ? "text" : "password"}
                placeholder="••••••••"
                className="input input-bordered w-full focus:outline-success focus:border-success bg-base-100 pr-10"
              />

              <span className="absolute inset-y-0 right-3 flex items-center opacity-40">
                <button onClick={() => setOpen(!open)}>
                  {open ? "show" : "hide"}
                </button>
              </span>
            </div>
            <label className="label mt-1">
              <span className="label-text-alt link link-hover link-success">
                Forgot password?
              </span>
            </label>
          </div>

          <div className="form-control mt-6">
            <label className="label cursor-pointer justify-start gap-3">
              <input
                type="checkbox"
                className="checkbox checkbox-success checkbox-sm"
              />
              <span className="label-text">
                I agree to the Terms of Service
              </span>
            </label>
          </div>

          <div className="form-control mt-8">
            <button className="btn btn-success text-white">Sign Up</button>
          </div>

          <p className="mt-8 text-center text-sm opacity-70">
            Already have an account?
            <Link
              to="/auth/login"
              className="link link-success font-bold ml-1 text-base-content"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
