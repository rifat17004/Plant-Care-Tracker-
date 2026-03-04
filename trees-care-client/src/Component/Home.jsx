import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-base-100">
      {/* --- HERO SECTION --- */}
      <section
        className="hero min-h-[70vh] bg-base-200"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1463936575829-25148e1db1b8?auto=format&fit=crop&q=80&w=2000)",
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0,0,0,0.4)",
        }}
      >
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-white">
              Grow Better Together
            </h1>
            <p className="mb-5 text-gray-100">
              Log, track, and nurture your indoor jungle. Never miss a watering
              day again with our smart plant management system.
            </p>
            <div className="flex justify-center gap-4">
              <button className="btn btn-success text-white border-none">
                Get Started
              </button>
              <button className="btn btn-outline border-white text-white hover:bg-white hover:text-black">
                View All Plants
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- QUICK STATS / APP INFO --- */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card bg-white shadow-xl border-t-4 border-success">
            <div className="card-body items-center text-center">
              <div className="text-4xl mb-2">💧</div>
              <h2 className="card-title">Track Watering</h2>
              <p className="text-sm opacity-70">
                Log every drop. Set custom schedules based on species needs.
              </p>
            </div>
          </div>
          <div className="card bg-white shadow-xl border-t-4 border-success">
            <div className="card-body items-center text-center">
              <div className="text-4xl mb-2">📅</div>
              <h2 className="card-title">Smart Reminders</h2>
              <p className="text-sm opacity-70">
                Get notified when it's time to fertilize or mist your plants.
              </p>
            </div>
          </div>
          <div className="card bg-white shadow-xl border-t-4 border-success">
            <div className="card-body items-center text-center">
              <div className="text-4xl mb-2">📈</div>
              <h2 className="card-title">Health History</h2>
              <p className="text-sm opacity-70">
                Upload photos and track growth milestones over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FEATURED SECTION (Mirroring the Shopify Store look) --- */}
      <section className="bg-base-200 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-2">Your Personal Nursery</h2>
          <p className="mb-10 opacity-60">Manage your collection with ease</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Example Plant Card */}
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="card bg-base-100 shadow-md group">
                <figure className="relative overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-1545239351-ef35f43d514b?auto=format&fit=crop&q=80&w=400`}
                    alt="Plant"
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 badge badge-success text-white">
                    Healthy
                  </div>
                </figure>
                <div className="card-body p-4 text-left">
                  <h3 className="font-bold">Monstera Deliciosa</h3>
                  <p className="text-xs opacity-50 uppercase tracking-widest font-semibold">
                    Tropical
                  </p>
                  <div className="divider my-1"></div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs italic">Next watering: Today</span>
                    <button className="btn btn-xs btn-outline btn-success">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
