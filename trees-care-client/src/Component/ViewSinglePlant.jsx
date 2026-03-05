import React from "react";
import { Link } from "react-router";

const ViewSinglePlant = ({ plant, index }) => {
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
  } = plant;

  return (
    <tr className="hover:bg-base-200/50 transition-colors">
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={image} alt={plantName} />
            </div>
          </div>
          <div>
            <div className="font-bold text-neutral">{plantName}</div>
            <div className="text-xs opacity-50 uppercase font-semibold">
              ID: # {index + 1}
            </div>
          </div>
        </div>
      </td>
      <td>
        <span className="badge badge-ghost font-medium">{category}</span>
      </td>
      <td>
        <div className="flex items-center gap-2">
          <span className="text-info">💧</span> {wateringFrequency}
        </div>
      </td>
      <td>
        <span
          className={`font-mono font-bold ${new Date(nextWateringDate) < new Date() ? "text-error" : "text-neutral"}`}
        >
          {nextWateringDate}
        </span>
      </td>
      <td>
        <div className={`badge`}>{healthStatus}</div>
      </td>
      <th className="text-center">
        <Link
          to={`/plant-details/${_id}`}
          className="btn btn-ghost btn-xs text-success hover:bg-success/10"
        >
          View Details
        </Link>
      </th>
    </tr>
  );
};

export default ViewSinglePlant;
