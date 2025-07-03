import React from "react";

const Services = () => {
  const services = [
    { name: "Pet Clinic", icon: "/a.png" },
    { name: "Pet Hotel", icon: "/b.png" },
    { name: "Pet Grooming", icon: "/cut.png" },
    { name: "Pet Sitter", icon: "/d.png" },
    { name: "Pet Training", icon: "/e.png" },
  ];

  return (
    <section className="py-10 bg-gray-50 text-center">
      <h3 className="text-xl font-semibold mb-2">Out The Best Service</h3>
      <p className="mb-6 text-sm max-w-md mx-auto">
        Kami memberikan pelayanan terbaik dan berpengalaman untuk menunjang kebutuhan kamu dan anabulmu
      </p>

      <div className="flex flex-wrap justify-center gap-6">
        {services.map((service) => (
          <div
            key={service.name}
            className="flex flex-col items-center w-28 group cursor-pointer"
          >
            <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center shadow-md transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:shadow-lg">
              <img
                src={service.icon}
                alt={service.name}
                className="w-12 h-12 object-contain"
              />
            </div>
            <span className="mt-3 font-medium text-sm text-gray-700 transition-colors duration-300 group-hover:text-[#FFDC26]">
              {service.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
