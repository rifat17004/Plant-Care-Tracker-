import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";
import ViewSinglePlant from "./ViewSinglePlant";
const AllPlants = () => {
  const data = useLoaderData();

  const [plants, setPlants] = useState(data);
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

        <div className="overflow-x-auto bg-base-100 rounded-2xl shadow-xl border border-base-300">
          <table className="table w-full">
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

            <tbody>
              {plants.map((plant, index) => (
                <ViewSinglePlant key={index} index={index} plant={plant} />
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 text-center opacity-40 text-xs italic">
          Showing all plants currently logged in LeafLog database.
        </div>
      </div>
    </div>
  );
};

export default AllPlants;
