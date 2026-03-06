import React, { use, useState } from "react";
import { Link, Navigate } from "react-router";
import { AuthContext } from "../AuthContext/AuthContext";
import { updateProfile } from "firebase/auth";
import { auth } from "../../Firebase/Firebase.init";

const Register = () => {
  const { createUser } = use(AuthContext);
  const [error, setError] = useState("");

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    const fromData = new FormData(e.target);
    const fromObject = Object.fromEntries(fromData.entries());
    const userProfile = {
      displayName: fromObject.name,
      photoURL: fromObject.Url,
    };

    createUser(fromObject.email, fromObject.pass)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(auth.currentUser, userProfile);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
    Navigate("/", { replace: true });
  };
  const [open, setOpen] = useState(true);
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <div className="hidden lg:flex lg:w-1/2 bg-success items-center justify-center p-12 text-white relative overflow-hidden">
        <div className="z-10 max-w-md">
          <h1 className="text-5xl font-bold mb-6">Start Your Digital Garden</h1>
          <p className="text-lg opacity-90 leading-relaxed">
            Join thousands of plant parents who use LeafLog to track watering,
            monitor health, and keep their indoor jungle thriving.
          </p>
        </div>

        <img
          src="https://images.unsplash.com/photo-1517191434949-5e90cd67d2b6?auto=format&fit=crop&q=80&w=800"
          className="absolute opacity-20 bottom-[-10%] right-[-10%] w-2/3"
          alt="decor"
        />
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-base-100">
        <div className="w-full max-w-md">
          <div className="mb-10 text-center lg:text-left">
            <h2 className="text-3xl font-bold">Register</h2>
            <p className="opacity-60">Create your free account today.</p>
          </div>
          <form onSubmit={handleRegisterSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">First Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Jane"
                  className="input input-bordered"
                  name="name"
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
                  name="Url"
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
                name="email"
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
                  name="pass"
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

            <div className="form-control mt-8">
              <button type="submit" className="btn btn-success text-white">
                Sign Up
              </button>
            </div>
          </form>
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
