const CareMistakes = () => {
  const mistakes = [
    {
      title: "The Over-Watering Trap",
      desc: "The #1 plant killer. Most plants prefer to dry out slightly rather than sit in 'wet feet'.",
      solution: "Always check the top 2 inches of soil before watering.",
    },
    {
      title: "Ignoring Light Requirements",
      desc: "Putting a sun-loving succulent in a dark corner or a shade-loving fern in direct heat.",
      solution: "Research your plant's natural habitat before picking a spot.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-base-200">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/3">
            <h2 className="text-4xl font-black text-neutral leading-tight mb-4">
              Common <span className="text-error">Mistakes</span> To Avoid
            </h2>
            <p className="text-gray-600">
              Even the best plant parents make mistakes. Here’s how to keep your
              jungle thriving.
            </p>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {mistakes.map((m, i) => (
              <div
                key={i}
                className="card bg-base-100 shadow-sm border-l-4 border-error overflow-hidden"
              >
                <div className="card-body">
                  <h3 className="card-title text-error">{m.title}</h3>
                  <p className="text-sm opacity-70 mb-4">{m.desc}</p>
                  <div className="bg-success/10 p-3 rounded-lg border border-success/20">
                    <p className="text-xs font-bold text-success uppercase mb-1">
                      The Fix:
                    </p>
                    <p className="text-xs italic text-success-content">
                      {m.solution}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default CareMistakes;
