import React from "react";

const AddPlants = () => {
  return (
    <div className="min-h-screen bg-base-200 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-black text-neutral mb-2">
            Add New Plant 🌿
          </h1>
          <p className="text-gray-500">
            Expand your digital forest by adding a new specimen.
          </p>
        </div>

        <div className="card bg-base-100 shadow-xl border border-base-300">
          <form className="card-body p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-control w-full">
                <label className="label pb-2">
                  <span className="label-text font-bold">Plant Name</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Monstera Deliciosa"
                  className="input input-bordered focus:outline-success w-full"
                  required
                />
              </div>

              <div className="form-control w-full">
                <label className="label pb-2">
                  <span className="label-text font-bold">Category</span>
                </label>
                <select className="select select-bordered focus:outline-success w-full">
                  <option disabled selected>
                    Select Category
                  </option>
                  <option>Succulent</option>
                  <option>Fern</option>
                  <option>Flowering</option>
                  <option>Vines</option>
                  <option>Trees</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className="form-control w-full mt-4">
              <label className="label pb-2">
                <span className="label-text font-bold">Image URL</span>
              </label>
              <input
                type="url"
                placeholder="https://images.unsplash.com/..."
                className="input input-bordered focus:outline-success w-full"
              />
            </div>

            <div className="form-control flex flex-col w-full mt-4">
              <label className="label pb-2">
                <span className="label-text font-bold">Description</span>
              </label>
              <textarea
                className="textarea textarea-bordered focus:outline-success h-24"
                placeholder="Describe your plant's personality..."
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
                <select className="select select-bordered focus:outline-success w-full">
                  <option disabled selected>
                    How hard is it to keep alive?
                  </option>
                  <option>Easy</option>
                  <option>Moderate</option>
                  <option>Difficult</option>
                </select>
              </div>

              <div className="form-control w-full">
                <label className="label pb-2">
                  <span className="label-text font-bold">
                    Watering Frequency
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Every 7 days"
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
                  type="date"
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
                  type="date"
                  className="input input-bordered focus:outline-success w-full border-error/30"
                />
              </div>
            </div>

            <div className="form-control w-full mt-4">
              <label className="label pb-2">
                <span className="label-text font-bold">Health Status</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Healthy, Thriving, or Needs Help"
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
                  type="text"
                  placeholder="Your Name"
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
                  type="email"
                  placeholder="your@email.com"
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
                Add Plant to Collection
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPlants;
