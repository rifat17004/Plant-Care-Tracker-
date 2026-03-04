import React from "react";
import { NavLink } from "react-router";

const NewPlants = ({ plant }) => {
  const { image } = plant;
  return (
    <div className="card bg-base-100 w-full max-w-sm shadow-md hover:shadow-xl transition-shadow duration-300 border border-base-200">
      <figure className="relative h-64 w-full overflow-hidden">
        <img
          src={plant.image}
          alt={plant.plantName}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />

        <div className="absolute top-3 left-3">
          <span className="badge badge-success text-white font-semibold shadow-sm">
            {plant.category}
          </span>
        </div>
      </figure>

      <div className="card-body p-5 text-justify">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="card-title text-xl font-bold text-neutral">
              {plant.plantName}
            </h2>
            <p className="text-xs text-success font-medium uppercase tracking-wider">
              Care: {plant.careLevel}
            </p>
          </div>
          <div
            className={`badge badge-outline ${plant.healthStatus === "Excellent" ? "badge-success" : "badge-warning"}`}
          >
            {plant.healthStatus}
          </div>
        </div>

        <p className="text-sm text-gray-600 line-clamp-2 mt-2">
          {plant.description}
        </p>

        <div className="mt-4 flex flex-col gap-1">
          <div className="flex justify-between text-xs">
            <span className="opacity-60">Next Water:</span>
            <span className="font-bold text-info">
              {plant.nextWateringDate}
            </span>
          </div>
          <progress
            className="progress progress-info w-full"
            value="70"
            max="100"
          ></progress>
        </div>

        <div className="card-actions justify-end mt-6">
          <NavLink
            to="/plant-details"
            className="btn btn-success btn-sm text-white"
          >
            View Details
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NewPlants;
