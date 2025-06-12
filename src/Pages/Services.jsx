import React, { useState } from "react";

const Services = () => {
  const services = [
    "Pet Clinic",
    "Pet Hotel",
    "Pet Grooming",
    "Pet Sitter",
    "Pet Training",
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Jumlah item yang ditampilkan sekaligus di layar (misal 3)
  const visibleCount = 3;

  // Tentukan indeks start dari list yang ditampilkan,
  // supaya active item selalu di posisi paling kiri
  // tapi batasi supaya tidak melebihi batas array
  let startIndex = activeIndex;
  if (activeIndex > services.length - visibleCount) {
    startIndex = services.length - visibleCount;
  }
  if (startIndex < 0) startIndex = 0;

  const visibleItems = services.slice(startIndex, startIndex + visibleCount);

  // Fungsi tombol next
  const handleNext = () => {
    if (activeIndex < services.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  // Fungsi tombol prev
  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  return (
    <section className="py-10 bg-gray-50 text-center">
      <h3 className="text-xl font-semibold mb-2">Out The Best Service</h3>
      <p className="mb-6 text-sm">
        Kami memberikan pelayanan terbaik dan berpengalaman untuk menunjang kebutuhan kamu dan anabulmu
      </p>

      <div className="flex justify-center items-center gap-4 mb-6">
        <button
          onClick={handlePrev}
          disabled={activeIndex === 0}
          className="px-4 py-2 bg-yellow-300 rounded disabled:opacity-50"
        >
          &lt; Prev
        </button>

        <div className="flex gap-6">
          {visibleItems.map((service, idx) => {
            // idx relatif ke visibleItems, aktif jika activeIndex === startIndex + idx
            const isActive = activeIndex === startIndex + idx;

            return (
              <div
                key={service}
                className="flex flex-col items-center cursor-pointer transition-transform duration-300"
                onClick={() => setActiveIndex(startIndex + idx)}
                style={{
                  transform: isActive ? "scale(1.3)" : "scale(1)",
                  zIndex: isActive ? 10 : 1,
                  width: 160,
                  height: 160,
                  backgroundColor: "#FEF3C7", // yellow-200
                  borderRadius: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "4rem",
                  color: "#B45309", // yellow-600
                  userSelect: "none",
                }}
              >
                🐾
                <span
                  style={{
                    position: "absolute",
                    marginTop: 130,
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: isActive ? "#B45309" : "#4B5563", // yellow-600 or gray-600
                  }}
                >
                  {service}
                </span>
              </div>
            );
          })}
        </div>

        <button
          onClick={handleNext}
          disabled={activeIndex === services.length - 1}
          className="px-4 py-2 bg-yellow-300 rounded disabled:opacity-50"
        >
          Next &gt;
        </button>
      </div>
    </section>
  );
};

export default Services;
