import React, { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import { useLoaderData, useParams } from "react-router";
import Loading from "./Loading";
import Swal from "sweetalert2";

const UpdatePlant = () => {
  const { user, loading } = useContext(AuthContext);
  const { id } = useParams(); // Gets the ID from the URL
  const existingPlant = useLoaderData(); // Assumes you added a loader to your route

  if (loading) return <Loading />;

  const handleUpdatePlant = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const plantObject = Object.fromEntries(formData.entries());

    fetch(`https://trees-care-server.vercel.app/update/${id}`, {
      method: "PUT",
      body: JSON.stringify(plantObject),
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Updates! 🌿",
            text: "Successfully Update into your garden.",
            icon: "success",
            timer: 2000,
            showConfirmButton: false,
          });
        } else {
          Swal.fire({
            title: "can't Updates ! 🌿",
            text: "need some modification.",
            icon: "error",
            timer: 2000,
            showConfirmButton: false,
          });
        }
      });
  };

  return (
    <div className="min-h-screen bg-base-200 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-black text-neutral mb-2">
            Update {existingPlant?.plantName || "Plant"} ✏️
          </h1>
          <p className="text-gray-500">
            Refine the details of your botanical companion.
          </p>
        </div>

        <div className="card bg-base-100 shadow-xl border border-base-300">
          <form onSubmit={handleUpdatePlant} className="card-body p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-control w-full">
                <label className="label pb-2">
                  <span className="label-text font-bold">Plant Name</span>
                </label>
                <input
                  name="plantName"
                  type="text"
                  defaultValue={existingPlant?.plantName}
                  className="input input-bordered focus:outline-success w-full"
                  required
                />
              </div>

              <div className="form-control w-full">
                <label className="label pb-2">
                  <span className="label-text font-bold">Category</span>
                </label>
                <select
                  name="category"
                  defaultValue={existingPlant?.category}
                  className="select select-bordered focus:outline-success w-full"
                  required
                >
                  <option value="Succulent">Succulent</option>
                  <option value="Fern">Fern</option>
                  <option value="Flowering">Flowering</option>
                  <option value="Vines">Vines</option>
                  <option value="Trees">Trees</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="form-control w-full mt-4">
              <label className="label pb-2">
                <span className="label-text font-bold">Image URL</span>
              </label>
              <input
                name="image"
                type="url"
                defaultValue={existingPlant?.image}
                className="input input-bordered focus:outline-success w-full"
                required
              />
            </div>

            <div className="form-control flex flex-col w-full mt-4">
              <label className="label pb-2">
                <span className="label-text font-bold">Description</span>
              </label>
              <textarea
                name="description"
                defaultValue={existingPlant?.description}
                className="textarea textarea-bordered focus:outline-success h-24"
              ></textarea>
            </div>

            <div className="divider my-8 opacity-50 uppercase text-xs tracking-[0.3em] font-bold text-success">
              Care Requirements
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-control w-full">
                <label className="label pb-2">
                  <span className="label-text font-bold">Care Level</span>
                </label>
                <select
                  name="careLevel"
                  defaultValue={existingPlant?.careLevel}
                  className="select select-bordered focus:outline-success w-full"
                  required
                >
                  <option value="Easy">Easy</option>
                  <option value="Moderate">Moderate</option>
                  <option value="Difficult">Difficult</option>
                </select>
              </div>

              <div className="form-control w-full">
                <label className="label pb-2">
                  <span className="label-text font-bold">
                    Watering Frequency
                  </span>
                </label>
                <input
                  name="wateringFrequency"
                  type="text"
                  defaultValue={existingPlant?.wateringFrequency}
                  className="input input-bordered focus:outline-success w-full"
                />
              </div>

              <div className="form-control w-full">
                <label className="label pb-2">
                  <span className="label-text font-bold">
                    Last Watered Date
                  </span>
                </label>
                <input
                  name="lastWateredDate"
                  type="date"
                  defaultValue={existingPlant?.lastWateredDate}
                  className="input input-bordered focus:outline-success w-full"
                />
              </div>

              <div className="form-control w-full">
                <label className="label pb-2">
                  <span className="label-text font-bold text-error">
                    Next Watering Date
                  </span>
                </label>
                <input
                  name="nextWateringDate"
                  type="date"
                  defaultValue={existingPlant?.nextWateringDate}
                  className="input input-bordered focus:outline-success w-full border-error/30"
                />
              </div>
            </div>

            <div className="form-control w-full mt-4">
              <label className="label pb-2">
                <span className="label-text font-bold">Health Status</span>
              </label>
              <input
                name="healthStatus"
                type="text"
                defaultValue={existingPlant?.healthStatus}
                className="input input-bordered focus:outline-success w-full"
              />
            </div>
            <div className="divider my-8 opacity-50 uppercase text-xs tracking-[0.3em] font-bold text-success">
              User Info
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-control w-full">
                <label className="label pb-2">
                  <span className="label-text font-bold opacity-60">
                    User Name
                  </span>
                </label>
                <input
                  name="userName"
                  type="text"
                  defaultValue={user?.displayName}
                  state
                  className="input input-bordered bg-base-200"
                  readOnly
                />
              </div>
              <div className="form-control w-full">
                <label className="label pb-2">
                  <span className="label-text font-bold opacity-60">
                    User Email
                  </span>
                </label>
                <input
                  name="userEmail"
                  type="email"
                  defaultValue={user?.email}
                  className="input input-bordered bg-base-200"
                  readOnly
                />
              </div>
            </div>

            <div className="form-control mt-12">
              <button
                type="submit"
                className="btn btn-success text-white btn-lg shadow-lg hover:shadow-success/20 border-none uppercase tracking-widest font-black"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdatePlant;
