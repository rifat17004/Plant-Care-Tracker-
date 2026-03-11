import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../AuthContext/AuthContext";
import Swal from "sweetalert2";

const Login = () => {
  const { signInUSer, googleSignIn } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState("");
  const [open, setOpen] = useState(true); // State for password visibility

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setError(""); // Reset error

    const fromData = new FormData(e.target);
    const fromObject = Object.fromEntries(fromData.entries());

    signInUSer(fromObject.email, fromObject.pass)
      .then((userCredential) => {
        Swal.fire({
          title: "Welcome Back! 🌿",
          text: "Successfully logged into your garden.",
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        });

        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        // Friendly error messages based on Firebase codes
        const msg =
          error.code === "auth/invalid-credential"
            ? "Invalid email or password."
            : error.message;
        setError(msg);
      });
  };

  const handleGoogoleSignin = () => {
    googleSignIn()
      .then((result) => {
        Swal.fire({
          title: "Signed in with Google! 🌿",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-base-100">
      {/* LEFT SIDE: Visual Brand Section */}
      <div className="hidden lg:flex lg:w-1/2 bg-success items-center justify-center p-12 text-white relative overflow-hidden">
        <div className="z-10 max-w-md">
          <h1 className="text-6xl font-black mb-6 leading-tight">
            Welcome Back to LeafLog.
          </h1>
          <p className="text-xl opacity-90 leading-relaxed font-light">
            Your plants missed you! Log in to update their growth journals and
            check your watering schedule.
          </p>
          <div className="mt-10 flex gap-4 items-center">
            <div className="avatar-group -space-x-6 rtl:space-x-reverse font-bold">
              <div className="avatar border-white placeholder">
                <div className="bg-white/20 w-10 text-xs">R</div>
              </div>
              <div className="avatar border-white placeholder">
                <div className="bg-white/20 w-10 text-xs">E</div>
              </div>
              <div className="avatar border-white placeholder">
                <div className="bg-white/20 w-10 text-xs">I</div>
              </div>
            </div>
            <p className="text-sm font-medium italic">
              Join 2,000+ plant parents
            </p>
          </div>
        </div>

        {/* Decorative background element */}
        <div className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <img
          src="https://images.unsplash.com/photo-1470058869958-2a77a61712a2?auto=format&fit=crop&q=80&w=800"
          className="absolute opacity-30 bottom-[-5%] right-[-5%] w-3/4 object-cover mask mask-hexagon-2"
          alt="decor"
        />
      </div>

      {/* RIGHT SIDE: Login Form Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-16">
        <div className="w-full max-w-md">
          <div className="mb-10 text-center lg:text-left">
            <h2 className="text-4xl font-bold tracking-tight">Login</h2>
            <p className="text-base opacity-60 mt-2">
              Enter your credentials to access your garden.
            </p>
          </div>

          {error && (
            <div className="alert alert-error mb-6 text-white text-sm py-2 shadow-lg animate-bounce">
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold uppercase text-xs tracking-widest opacity-70">
                  Email Address
                </span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="rifat@example.com"
                className="input input-bordered focus:border-success focus:outline-success w-full bg-base-200/50"
                required
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold uppercase text-xs tracking-widest opacity-70">
                  Password
                </span>
              </label>
              <div className="relative">
                <input
                  type={open ? "password" : "text"}
                  name="pass"
                  placeholder="••••••••"
                  className="input input-bordered focus:border-success focus:outline-success w-full bg-base-200/50 pr-12"
                  required
                />
                <button
                  type="button"
                  onClick={() => setOpen(!open)}
                  className="absolute inset-y-0 right-3 flex items-center text-xs font-bold opacity-40 hover:opacity-100 uppercase transition-opacity"
                >
                  {open ? "show" : "hide"}
                </button>
              </div>
              <label className="label mt-1 justify-end">
                <a
                  href="#"
                  className="label-text-alt link link-hover link-success"
                >
                  Forgot password?
                </a>
              </label>
            </div>

            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn btn-success text-white shadow-lg shadow-success/20 hover:scale-[1.01] transition-transform"
              >
                Log In
              </button>
            </div>
          </form>

          <div className="divider my-8 opacity-50 font-bold text-xs">OR</div>

          <button
            onClick={handleGoogoleSignin}
            className="btn btn-outline btn-success w-full group transition-all hover:scale-[1.01]"
          >
            <svg
              className="w-5 h-5 mr-2 group-hover:fill-white transition-colors"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.908 3.152-1.928 4.172-1.224 1.224-3.136 2.592-7.112 2.592-6.104 0-10.824-4.952-10.824-11.056s4.72-11.056 10.824-11.056c3.304 0 5.624 1.304 7.4 3l2.304-2.304c-2.024-1.928-4.72-3.416-9.704-3.416-8.248 0-15.016 6.768-15.016 15.016s6.768 15.016 15.016 15.016c4.456 0 7.84-1.472 10.512-4.256 2.768-2.768 3.632-6.672 3.632-9.752 0-.936-.08-1.816-.24-2.592h-13.904z" />
            </svg>
            Continue with Google
          </button>

          <p className="text-center text-sm mt-10 text-base-content/70">
            New to the garden?
            <Link
              to="/auth/register"
              className="link link-success font-bold ml-2 no-underline hover:underline"
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
