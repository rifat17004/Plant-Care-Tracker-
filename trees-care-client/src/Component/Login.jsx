import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../AuthContext/AuthContext";

const Login = () => {
  const { signInUSer, googleSignIn } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const [error, setError] = useState("");
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const fromData = new FormData(e.target);
    const fromObject = Object.fromEntries(fromData.entries());
    signInUSer(fromObject.email, fromObject.pass)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
    e.target.reset();
    navigate(location.state ? location.state : "/");
  };
  const handleGoogoleSignin = () => {
    googleSignIn()
      .then((result) => {
        alert("loged in");
      })
      .catch((error) => {
        setError(error);
      });
    if (!error) {
      navigate(location.state ? location.state : "/");
    }
  };
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
          <form onSubmit={handleLoginSubmit}>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold">Email Address</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email@example.com"
                className="input input-bordered focus:input-success w-full"
              />
            </div>
            <div className="form-control w-full mt-4">
              <label className="label">
                <span className="label-text font-semibold">Password</span>
              </label>
              <input
                type="password"
                name="pass"
                placeholder="••••••••"
                className="input input-bordered focus:input-success w-full"
              />
            </div>
            <div className="mt-2">
              <a href="#" className="label-text-alt link  link-hover">
                Forgot password?
              </a>
            </div>
            <div className="form-control mt-4">
              <button type="submit" className="btn btn-success  text-white">
                Login to LeafLog
              </button>
            </div>
          </form>
          <div className="divider">OR</div>
          <button
            onClick={handleGoogoleSignin}
            className="btn btn-success text-white"
          >
            Login with google
          </button>
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
