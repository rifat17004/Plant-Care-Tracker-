import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import { useLoaderData } from "react-router";
import NewPlants from "./NewPlants";
import BeginnerFriendly from "./BeginnerFriendly";
import CareMistakes from "./CareMistakes";

const Home = () => {
  const data = useLoaderData();
  // const [plantss, setPlantss] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetch(
  //     "https://trees-care-server-dx3s1pfo9-rifat17004s-projects.vercel.app/all-plants",
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setPlantss(data);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       console.error("Fetch error:", err);
  //       setLoading(false);
  //     });
  // }, []);
  // console.log(plantss);
  const [plants, setPlants] = useState(data);

  return (
    <div className="min-h-screen bg-base-100">
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
          <h2 className="text-3xl font-bold mb-2">New Plants</h2>
          <p className="mb-10 opacity-60">Manage your collection with ease</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {plants.map((plant) => (
              <NewPlants key={plant.id} plant={plant}></NewPlants>
            ))}
          </div>
        </div>
      </section>
      <BeginnerFriendly />
      <CareMistakes />
    </div>
  );
};

export default Home;
