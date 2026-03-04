import React from "react";

const Banner = () => {
  const slides = [
    {
      id: "slide1",
      title: "Grow Better Together",
      description:
        "Log, track, and nurture your indoor jungle. Never miss a watering day again with our smart plant management system.",
      img: "https://i.ibb.co/VWkmx3dY/marcel-christen-o-WYU54-Pu0-Tk-unsplash.jpg",
      next: "#slide2",
      prev: "#slide3",
    },
    {
      id: "slide2",
      title: "Master Plant Care",
      description:
        "Learn the secrets of humidity, soil pH, and light cycles. Our expert tips help even the finicky Fiddle Leaf Fig thrive.",
      img: "https://i.ibb.co/LXsjTzzK/marita-kavelashvili-ugnr-Xk1129g-unsplash.jpg",
      next: "#slide3",
      prev: "#slide1",
    },
    {
      id: "slide3",
      title: "Discover Rare Varieties",
      description:
        "From Variegated Monsteras to exotic Succulents, manage your collection and track the growth of your rare finds.",
      img: "https://i.ibb.co/GQffWVXq/matthew-smith-Rfflri94rs8-unsplash.jpg",
      next: "#slide1",
      prev: "#slide2",
    },
  ];
  return (
    <section className="carousel w-full min-h-[70vh]">
      {slides.map((slide) => (
        <div
          key={slide.id}
          id={slide.id}
          className="carousel-item relative w-full hero overflow-hidden"
          style={{
            backgroundImage: `url(${slide.img})`,
            backgroundBlendMode: "overlay",
            backgroundColor: "rgba(0,0,0,0.5)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="hero-content text-center text-neutral-content z-10 px-12">
            <div className="max-w-md">
              <h1 className="mb-5 text-4xl md:text-5xl font-bold text-white leading-tight">
                {slide.title}
              </h1>
              <p className="mb-8 text-gray-100 text-sm md:text-base">
                {slide.description}
              </p>
              <div className="flex justify-center gap-4">
                <button className="btn btn-success text-white border-none px-6">
                  Get Started
                </button>
                <button className="btn btn-outline border-white text-white hover:bg-white hover:text-black px-6">
                  View All
                </button>
              </div>
            </div>
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 md:left-5 md:right-5 top-1/2 z-20 pointer-events-none">
            <a
              href={slide.prev}
              className="btn btn-circle btn-ghost text-white text-2xl hover:bg-white/20 pointer-events-auto"
            >
              ❮
            </a>
            <a
              href={slide.next}
              className="btn btn-circle btn-ghost text-white text-2xl hover:bg-white/20 pointer-events-auto"
            >
              ❯
            </a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Banner;
