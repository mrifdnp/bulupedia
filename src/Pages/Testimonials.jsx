import React, { useState } from "react";

const testimonials = [
  {
    name: "Ikeda Teresa",
    avatar: "/teresa.jpg",
    rating: 4.5,
    comment:
      "Suka banget sama mas mas disini ramah ramah, anabulku jadi canteekk makin gemoy jadinya…",
  },
  {
    name: "Endo Sakura",
    avatar: "/endo.jpg",
    rating: 5.0,
    comment:
      "Layanan luar biasa! Tempatnya bersih dan petku diperlakukan dengan penuh kasih.",
  },
  {
    name: "Saito Asuka",
    avatar: "/asuka.jpg",
    rating: 4.8,
    comment: "Pet hotel favorit! Anabulku selalu pulang dengan wajah happy!",
  },
  {
    name: "Tsutsui Ayame",
    avatar: "/ayame.jpg",
    rating: 4.7,
    comment: "Groomingnya keren, anabulku wangi banget dan bulunya halus!",
  },
];

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = testimonials[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-10 bg-gray-50 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT: Testimonial */}
        <div>
          <p className="text-sm text-yellow-500 font-medium mb-1">Our Review</p>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            What They Say ?
          </h3>

          {/* Avatar + Info */}
          <div className="flex items-center gap-4 mb-2">
            <img
              src={active.avatar}
              alt={active.name}
              width={64}
              height={64}
              className="w-16 h-16 rounded-full object-cover"
            />

            <div className="text-left">
              <p className="font-semibold">{active.name}</p>
              <div className="flex items-center gap-1 text-yellow-400 text-sm">
                {"★".repeat(Math.floor(active.rating))}
                {active.rating % 1 ? "☆" : ""}
                <span className="text-black ml-1">{active.rating}</span>
              </div>
            </div>
          </div>

          {/* Comment */}
          <p className="italic text-gray-700 text-base mb-6">
            “ {active.comment} ”
          </p>

          {/* Carousel */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="w-8 h-8 rounded bg-white shadow flex items-center justify-center"
            >
              ❮
            </button>
            {testimonials.map((t, i) => (
              <img
                key={i}
                src={t.avatar}
                alt={`reviewer-${i}`}
                onClick={() => setActiveIndex(i)}
                className={`w-10 h-10 rounded-full object-cover cursor-pointer transition-all ${
                  i === activeIndex
                    ? "ring-2 ring-yellow-400 scale-110"
                    : "opacity-70"
                }`}
              />
            ))}
            <button
              onClick={handleNext}
              className="w-8 h-8 rounded bg-white shadow flex items-center justify-center"
            >
              ❯
            </button>
          </div>
        </div>

        {/* RIGHT: Cat Image */}
        <div className="flex justify-center">
          <img
            src="/catsayy.png"
            alt="Cute Cat"
            className="w-[300px] md:w-[360px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
