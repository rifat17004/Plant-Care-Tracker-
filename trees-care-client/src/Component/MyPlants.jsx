import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../AuthContext/AuthContext";
import Swal from "sweetalert2";

const MyPlants = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading)
    return <span className="loading loading-spinner loading-xl"></span>;

  const [myData, setMyData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/my-plants/${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyData(data));
  }, [user]);

  // // 3. Delete Handler
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/all-plants/${id}`, { method: "DELETE" })
          .then((res) => res.json())
          .then((data) => {
            if (deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <div className="min-h-screen bg-base-200 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-10 bg-white p-8 rounded-3xl shadow-sm">
          <div>
            <h1 className="text-3xl font-black text-neutral">
              My Green Collection
            </h1>
            <p className="text-success font-medium">
              Logged in as: {user.displayName}
            </p>
          </div>
          <div className="stats shadow bg-success text-white">
            <div className="stat">
              <div className="stat-title text-white/70">Total Plants</div>
              <div className="stat-value text-2xl">{myData.length}</div>
            </div>
          </div>
        </div>

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
              {myData.map((plant, index) => (
                <tr
                  key={plant._id}
                  className="hover:bg-base-200/30 transition-colors"
                >
                  <td>
                    <div className="font-bold text-neutral">
                      {plant.plantName}
                    </div>
                    <div className="text-[10px] opacity-50 font-mono">
                      ID: {index + 1}
                    </div>
                  </td>
                  <td>
                    <div className="badge badge-outline badge-sm uppercase font-bold text-[10px]">
                      {plant.category}
                    </div>
                  </td>
                  <td className="font-semibold text-info">
                    💧 {plant.nextWateringDate}
                  </td>
                  <td className="flex justify-center gap-2">
                    <Link to={`/update-plants/${plant._id}`}>
                      <button
                        className="btn btn-square btn-ghost btn-sm text-info hover:bg-info/10"
                        title="Update"
                      >
                        ✏️
                      </button>
                    </Link>

                    <button
                      onClick={() => handleDelete(plant._id)}
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
      </div>
    </div>
  );
};

export default MyPlants;
