import React from "react";
import { useParams, Link, useLoaderData } from "react-router";

const PlantDetails = ({ plant }) => {
  const data = useLoaderData();
  const {
    _id,
    plantName,
    category,
    careLevel,
    description,
    healthStatus,
    image,
    lastWateredDate,
    nextWateringDate,
    wateringFrequency,
  } = data;

  return (
    <div className="min-h-screen bg-base-200 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-sm breadcrumbs mb-6">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/my-plants">My Plants</Link>
            </li>
            <li>{plantName}</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-base-100 rounded-3xl shadow-xl overflow-hidden">
          <div className="relative h-64">
            <img
              src={image}
              alt={plantName}
              className="w-full h-full object-cover min-h-[400px] lg:min-h-[600px]"
            />
            <div className="absolute top-5 left-5 flex gap-2">
              <span className="badge badge-success p-4 font-bold text-white shadow-lg">
                {category}
              </span>
              <span className="badge badge-neutral p-4 font-bold shadow-lg">
                {careLevel}
              </span>
            </div>
          </div>

          <div className="p-8 lg:p-12 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-4">
                <h1 className="text-4xl font-extrabold text-neutral">
                  {plantName}
                </h1>
                <div className="badge badge-outline badge-lg">
                  {healthStatus}
                </div>
              </div>

              <p className="text-lg opacity-70 mb-8 leading-relaxed italic">
                "{description}"
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-blue-50 p-4 rounded-2xl border border-blue-100">
                  <p className="text-xs uppercase font-bold text-blue-500 mb-1">
                    Watering
                  </p>
                  <p className="text-md font-semibold">{wateringFrequency}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-2xl border border-green-100">
                  <p className="text-xs uppercase font-bold text-green-500 mb-1">
                    Added By
                  </p>
                  <p className="text-md font-semibold">Emon</p>
                </div>
              </div>

              <div className="overflow-x-auto bg-base-200 rounded-xl p-4">
                <table className="table w-full">
                  <tbody>
                    <tr className="border-none">
                      <td className="font-bold py-2">Last Watered</td>
                      <td className="text-right py-2 text-gray-500">
                        {lastWateredDate}
                      </td>
                    </tr>
                    <tr className="border-none">
                      <td className="font-bold py-2">Next Watering</td>
                      <td className="text-right py-2 text-error font-bold italic underline">
                        {nextWateringDate}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button className="btn btn-success flex-1 text-white gap-2">
                💧 Mark as Watered
              </button>
              <button className="btn btn-outline btn-neutral flex-1">
                ✏️ Edit Details
              </button>
            </div>

            <p className="text-center mt-6 text-xs opacity-40">
              Plant ID: {_id} • Registered to "User email"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantDetails;
