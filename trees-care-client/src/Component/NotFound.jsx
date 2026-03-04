import React from "react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-base-100 flex items-center justify-center px-4 overflow-hidden relative">
      <div className="absolute top-[-10%] left-[-5%] text-[15rem] opacity-5 select-none rotate-12">
        🌿
      </div>
      <div className="absolute bottom-[-10%] right-[-5%] text-[15rem] opacity-5 select-none -rotate-12">
        🍃
      </div>

      <div className="max-w-2xl text-center z-10">
        <div className="relative inline-block mb-8">
          <h1 className="text-9xl font-black text-success/20">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl animate-bounce">🥀</span>
          </div>
        </div>

        <h2 className="text-4xl font-black text-neutral mb-4">
          Oops! This path is overgrown.
        </h2>

        <p className="text-lg text-gray-500 mb-10 max-w-md mx-auto leading-relaxed">
          The page you are looking for has either been moved, pruned, or never
          sprouted in the first place.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="btn btn-success text-white px-8 shadow-lg hover:shadow-success/40 border-none uppercase tracking-widest font-bold"
          >
            Back to Garden
          </Link>
          <Link
            to="/all-plants"
            className="btn btn-outline btn-neutral px-8 uppercase tracking-widest font-bold"
          >
            Browse All Plants
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
