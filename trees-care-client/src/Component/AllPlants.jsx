import React from "react";
import { Link } from "react-router";
const AllPlants = () => {
  const plants = [
    {
      id: 1,
      name: "Snake Plant",
      category: "Succulent",
      watering: "Every 14 days",
      nextWater: "2026-03-10",
      status: "Healthy",
      image:
        "https://images.unsplash.com/photo-1512428813833-df4a06bc7800?auto=format&fit=crop&q=80&w=100",
    },
    {
      id: 2,
      name: "Fiddle Leaf Fig",
      category: "Trees",
      watering: "Every 7 days",
      nextWater: "2026-03-05",
      status: "Good",
      image:
        "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&q=80&w=100",
    },
    {
      id: 3,
      name: "Peace Lily",
      category: "Flowering",
      watering: "Every 5 days",
      nextWater: "2026-03-04",
      status: "Thirsty",
      image:
        "https://images.unsplash.com/photo-1509423350716-97f9360b4e59?auto=format&fit=crop&q=80&w=100",
    },
    {
      id: 4,
      name: "Monstera",
      category: "Vines",
      watering: "Every 7 days",
      nextWater: "2026-03-08",
      status: "Thriving",
      image:
        "https://images.unsplash.com/photo-1545239351-ef35f43d514b?auto=format&fit=crop&q=80&w=100",
    },
  ];
  return (
    <div className="min-h-screen bg-base-200 py-10 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-black text-neutral">
              Plant Directory
            </h1>
            <p className="opacity-60 text-sm">
              Managing {plants.length} total plants in the system
            </p>
          </div>
          <Link to="/add-plants" className="btn btn-success text-white px-6">
            + Add New Plant
          </Link>
        </div>

        {/* Table Container */}
        <div className="overflow-x-auto bg-base-100 rounded-2xl shadow-xl border border-base-300">
          <table className="table w-full">
            {/* Table Head */}
            <thead className="bg-base-300/50">
              <tr className="text-neutral uppercase text-xs tracking-widest">
                <th className="py-4">Plant</th>
                <th>Category</th>
                <th>Watering Frequency</th>
                <th>Next Watering</th>
                <th>Status</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {plants.map((plant) => (
                <tr
                  key={plant.id}
                  className="hover:bg-base-200/50 transition-colors"
                >
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={plant.image} alt={plant.name} />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold text-neutral">
                          {plant.name}
                        </div>
                        <div className="text-xs opacity-50 uppercase font-semibold">
                          ID: #{plant.id}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="badge badge-ghost font-medium">
                      {plant.category}
                    </span>
                  </td>
                  <td>
                    <div className="flex items-center gap-2">
                      <span className="text-info">💧</span> {plant.watering}
                    </div>
                  </td>
                  <td>
                    <span
                      className={`font-mono font-bold ${new Date(plant.nextWater) < new Date() ? "text-error" : "text-neutral"}`}
                    >
                      {plant.nextWater}
                    </span>
                  </td>
                  <td>
                    <div
                      className={`badge ${
                        plant.status === "Thirsty"
                          ? "badge-error"
                          : plant.status === "Healthy"
                            ? "badge-success"
                            : "badge-neutral"
                      } text-white text-[10px] font-bold`}
                    >
                      {plant.status}
                    </div>
                  </td>
                  <th className="text-center">
                    <Link
                      // to={`/plant/${plant.id}`}
                      to="/plant-details"
                      className="btn btn-ghost btn-xs text-success hover:bg-success/10"
                    >
                      View Details
                    </Link>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State Footer */}
        <div className="mt-6 text-center opacity-40 text-xs italic">
          Showing all plants currently logged in LeafLog database.
        </div>
      </div>
    </div>
  );
};

export default AllPlants;
