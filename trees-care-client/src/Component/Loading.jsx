import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-200">
      <span className="loading loading-spinner loading-lg text-success"></span>
      <p className="mt-4 text-success font-medium animate-pulse">
        Tending to the garden... 🌿
      </p>
    </div>
  );
};

export default Loading;
