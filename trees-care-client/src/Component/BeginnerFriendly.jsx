import React from "react";

const BeginnerFriendly = () => {
  const beginners = [
    {
      name: "Snake Plant",
      light: "Low to Bright",
      water: "Bi-weekly",
      icon: "🐍",
    },
    { name: "ZZ Plant", light: "Low to Medium", water: "Monthly", icon: "🌿" },
    { name: "Pothos", light: "Any Light", water: "Weekly", icon: "🍃" },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-neutral mb-2 italic">
            New to Gardening?
          </h2>
          <p className="text-gray-500 uppercase tracking-widest text-xs font-bold">
            Start with these indestructible favorites
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {beginners.map((p, i) => (
            <div
              key={i}
              className="group border border-base-200 rounded-2xl p-8 hover:bg-success hover:text-white transition-all duration-300 cursor-default"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                {p.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{p.name}</h3>
              <div className="space-y-2 opacity-80 text-sm">
                <p className="flex justify-between">
                  <span>☀️ Light:</span> <span>{p.light}</span>
                </p>
                <p className="flex justify-between">
                  <span>💧 Water:</span> <span>{p.water}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default BeginnerFriendly;
