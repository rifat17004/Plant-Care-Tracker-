import React, { useState } from "react";
import { Link, useNavigate } from "react-router";

const MyPlants = () => {
  // 1. Initial Hardcoded State
  const [user] = useState({
    name: "Jane Doe",
    email: "jane.doe@example.com",
  });

  const [plants, setPlants] = useState([
    {
      id: 101,
      name: "Snake Plant",
      category: "Succulent",
      nextWater: "2026-03-10",
      addedBy: "jane.doe@example.com",
    },
    {
      id: 102,
      name: "Fiddle Leaf Fig",
      category: "Trees",
      nextWater: "2026-03-05",
      addedBy: "jane.doe@example.com",
    },
    {
      id: 103,
      name: "Peace Lily",
      category: "Flowering",
      nextWater: "2026-03-04",
      addedBy: "other@user.com",
    }, // Should not show
    {
      id: 104,
      name: "Monstera",
      category: "Vines",
      nextWater: "2026-03-08",
      addedBy: "jane.doe@example.com",
    },
  ]);

  const [selectedPlant, setSelectedPlant] = useState(null);
  const navigate = useNavigate();

  // 2. Filter plants to only show those added by the logged-in user
  const myPlants = plants.filter((p) => p.addedBy === user.email);

  // 3. Delete Handler
  const handleDelete = () => {
    setPlants(plants.filter((p) => p.id !== selectedPlant.id));
    setSelectedPlant(null); // Close modal
    // In a real app, you'd call: axios.delete(`/api/plants/${selectedPlant.id}`)
  };

  return (
    <div className="min-h-screen bg-base-200 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-10 bg-white p-8 rounded-3xl shadow-sm">
          <div>
            <h1 className="text-3xl font-black text-neutral">
              My Green Collection
            </h1>
            <p className="text-success font-medium">
              Logged in as: {user.name}
            </p>
          </div>
          <div className="stats shadow bg-success text-white">
            <div className="stat">
              <div className="stat-title text-white/70">Total Plants</div>
              <div className="stat-value text-2xl">{myPlants.length}</div>
            </div>
          </div>
        </div>

        {/* --- TABLE SECTION --- */}
        <div className="overflow-x-auto bg-base-100 rounded-2xl shadow-xl border border-base-300">
          <table className="table w-full">
            <thead className="bg-base-200">
              <tr className="text-neutral uppercase text-xs tracking-widest">
                <th>Plant Details</th>
                <th>Category</th>
                <th>Next Watering</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {myPlants.map((plant) => (
                <tr
                  key={plant.id}
                  className="hover:bg-base-200/30 transition-colors"
                >
                  <td>
                    <div className="font-bold text-neutral">{plant.name}</div>
                    <div className="text-[10px] opacity-50 font-mono">
                      ID: {plant.id}
                    </div>
                  </td>
                  <td>
                    <div className="badge badge-outline badge-sm uppercase font-bold text-[10px]">
                      {plant.category}
                    </div>
                  </td>
                  <td className="font-semibold text-info">
                    💧 {plant.nextWater}
                  </td>
                  <td className="flex justify-center gap-2">
                    {/* Update Button */}
                    <button
                      onClick={() => navigate(`/update-plant/${plant.id}`)}
                      className="btn btn-square btn-ghost btn-sm text-info hover:bg-info/10"
                      title="Update"
                    >
                      ✏️
                    </button>
                    {/* Delete Button (Triggers Modal) */}
                    <button
                      onClick={() => setSelectedPlant(plant)}
                      className="btn btn-square btn-ghost btn-sm text-error hover:bg-error/10"
                      title="Delete"
                    >
                      🗑️
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* --- DELETE CONFIRMATION MODAL --- */}
        {selectedPlant && (
          <div className="modal modal-open">
            <div className="modal-box border-t-8 border-error">
              <h3 className="font-black text-xl text-neutral">
                Wait! Are you sure? 🛑
              </h3>
              <p className="py-4 text-gray-600">
                You are about to remove{" "}
                <span className="font-bold text-neutral">
                  "{selectedPlant.name}"
                </span>{" "}
                from your collection. This action cannot be undone.
              </p>
              <div className="modal-action">
                <button
                  className="btn btn-ghost"
                  onClick={() => setSelectedPlant(null)}
                >
                  Cancel
                </button>
                <button
                  className="btn btn-error text-white px-8"
                  onClick={handleDelete}
                >
                  Yes, Delete
                </button>
              </div>
            </div>
            <div
              className="modal-backdrop"
              onClick={() => setSelectedPlant(null)}
            ></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyPlants;
