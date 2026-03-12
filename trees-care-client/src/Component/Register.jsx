import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router"; // Use useNavigate for logic-based redirects
import { AuthContext } from "../AuthContext/AuthContext";
import { updateProfile } from "firebase/auth";
import { auth } from "../../Firebase/Firebase.init";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser } = use(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [open, setOpen] = useState(true);

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    const fromData = new FormData(e.target);
    const fromObject = Object.fromEntries(fromData.entries());

    // 1. Password Validation (One-liner check)
    if (!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(fromObject.pass)) {
      return setError(
        "Password must have uppercase, lowercase, and be at least 6 characters.",
      );
    }

    const userProfile = {
      displayName: fromObject.name,
      photoURL: fromObject.Url,
    };

    createUser(fromObject.email, fromObject.pass)
      .then(async (userCredential) => {
        await updateProfile(auth.currentUser, userProfile);

        Swal.fire({
          title: "Welcome to the Garden! 🌿",
          text: "Your account was created successfully.",
          icon: "success",
          confirmButtonColor: "#22c55e",
        });

        e.target.reset();
        navigate("/"); // Redirect to home
      })
      .catch((err) => {
        // Handle Firebase specific errors (like email already in use)
        if (err.code === "auth/email-already-in-use") {
          setError("This email is already registered.");
        } else {
          setError(err.message);
        }
      });
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-base-100">
      {/* LEFT SIDE: Branding Section */}
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
          className="absolute opacity-20 bottom-[-10%] right-[-10%] w-2/3 pointer-events-none"
          alt="decor"
        />
      </div>

      {/* RIGHT SIDE: Form Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-base-100">
        <div className="w-full max-w-md">
          <div className="mb-10 text-center lg:text-left">
            <h2 className="text-4xl font-bold text-neutral">Register</h2>
            <p className="opacity-60 mt-2">Create your free account today.</p>
          </div>

          <form onSubmit={handleRegisterSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Jane Doe"
                  className="input input-bordered focus:input-success"
                  name="name"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="https://image-link.com"
                  className="input input-bordered focus:input-success"
                  name="Url"
                  required
                />
              </div>
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold">Email Address</span>
              </label>
              <input
                type="email"
                placeholder="jane@example.com"
                className="input input-bordered focus:input-success w-full"
                name="email"
                required
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold">Password</span>
              </label>
              <div className="relative">
                <input
                  type={open ? "password" : "text"}
                  placeholder="••••••••"
                  className={`input input-bordered w-full focus:input-success pr-12 ${error && "border-error"}`}
                  name="pass"
                  required
                />
                {/* Fixed: type="button" prevents form submission */}
                <button
                  type="button"
                  onClick={() => setOpen(!open)}
                  className="absolute inset-y-0 right-3 flex items-center text-xs font-bold opacity-50 hover:opacity-100 uppercase transition-opacity"
                >
                  {open ? "show" : "hide"}
                </button>
              </div>

              {/* Error Message Display */}
              <label className="label min-h-[1.5rem] mt-1">
                {error && (
                  <span className="label-text-alt text-error font-medium animate-pulse">
                    {error}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn btn-success text-white text-lg shadow-lg shadow-success/20"
              >
                Sign Up
              </button>
            </div>
          </form>

          <p className="mt-8 text-center text-sm opacity-70">
            Already have an account?
            <Link to="/auth/login" className="link link-success font-bold ml-1">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
