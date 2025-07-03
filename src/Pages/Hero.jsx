/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import { motion } from "framer-motion";

const Hero = () => {
  const [isInView, setIsInView] = useState(false);
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="py-10 bg-[#FFFFF0]">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-4 md:px-0">
        {/* Bagian gambar dan box */}
        <div className="md:w-1/2 mb-6 md:mb-0 flex justify-center md:justify-start relative">
          <div className="relative w-full max-w-[400px] aspect-[3/4] z-10 overflow-hidden mx-auto">

            {/* Lingkaran kuning */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[380px] h-[380px] bg-[#FFDC26] rounded-full z-0" />

            {/* Box kanan atas - Pet Grooming */}
            <motion.div
              className="absolute top-70 right-[10px] z-20 w-[220px] bg-white rounded-xl px-4 py-3 shadow-lg"
              initial={{ opacity: 0, x: 60, y: -30 }}
              animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: 60, y: -30 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              onViewportEnter={() => setIsInView(true)}
              onViewportLeave={() => setIsInView(false)}
              viewport={{ amount: 0.3 }}
            >
              <div className="flex items-start gap-3">
                <img src="/petgrooming.svg" alt="Icon" className="w-7 h-7 mt-1" />
                <div>
                  <h4 className="font-semibold text-sm">Pet Grooming</h4>
                  <p className="text-[#A6A6A6] text-[10px] leading-tight font-product">
                    Dapat dipanggil ke rumah atau Datang ke Pet Shop kami.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Box kiri bawah - Pet Clinic */}
            <motion.div
              className="absolute bottom-20 left-[10px] z-20 w-[220px] bg-white rounded-xl px-4 py-3 shadow-lg"
              initial={{ opacity: 0, x: -60, y: 30 }}
              animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: -60, y: 30 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
              onViewportEnter={() => setIsInView(true)}
              onViewportLeave={() => setIsInView(false)}
              viewport={{ amount: 0.3 }}
            >
              <div className="flex items-start gap-3">
                <img src="/petclinic.svg" alt="Icon" className="w-7 h-7 mt-1" />
                <div>
                  <h4 className="font-semibold text-sm">Pet Clinic</h4>
                  <p className="text-[#A6A6A6] text-[10px] leading-tight font-product">
                    Berikan perhatian extra terhadap anabul anda, sebelum semuanya terlambat.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Gambar kucing */}
            <img
              src="/cat-hero.png"
              alt="Cat"
              className="relative z-10 w-full h-full object-contain shadow-lg"
            />
          </div>
        </div>

        {/* Tulisan di kanan */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          onViewportEnter={() => setIsInView(true)}
          onViewportLeave={() => setIsInView(false)}
          viewport={{ amount: 0.3 }}
        >
          <h2 className="text-4xl font-bold leading-tight text-[#FFDC26] relative inline-block font-cocon">
            <span className="relative inline-block">
              Be Cute
              <span className="absolute -top-2 -right-4">
                <img src="bulupedia.svg" alt="Icon" className="w-5 h-5" />
              </span>
            </span>
            <br />
            Be Glowing
          </h2>

          <p className="mt-3 text-sm max-w-md font-product">
            Sayangi Hewan Kesayanganmu dengan yang Terbaik! Bulupedia Petshop
            hadir untuk memenuhi semua kebutuhan hewan peliharaanmu – dari
            makanan berkualitas hingga perawatan profesional.
          </p>

         



    <motion.button
      className="mt-5 px-6 py-2 bg-gradient-to-r from-[#FFDC26] to-[#E0AF00] hover:from-yellow-500 hover:to-yellow-600 text-white rounded-full shadow-lg"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
      onClick={scrollToNextSection}   // <-- ini
    >
      Pelajari Selengkapnya
    </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
