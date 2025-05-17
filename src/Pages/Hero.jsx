import React from "react";

const Hero = () => {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-4 md:px-0">
        {/* Gambar dan box */}
        <div className="md:w-1/2 mb-6 md:mb-0 flex justify-center md:justify-start relative">
          {/* Wrapper gambar & lingkaran & box */}
          <div className="relative w-full max-w-[400px] aspect-[3/4] z-10 overflow-hidden  mx-auto">
            {/* Lingkaran kuning */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-[#FFDC26] rounded-full z-0" />

            {/* Box kanan atas - Pet Grooming */}
            <div className="absolute top-70 right-[10px] z-20 w-[220px] bg-white rounded-xl px-4 py-3 shadow-lg">
              <div className="flex items-start gap-3">
                <img
                  src="/petgrooming.svg"
                  alt="Icon"
                  className="w-7 h-7 mt-1"
                />
                <div>
                  <h4 className="font-semibold text-sm">Pet Grooming</h4>
                  <p className="text-[#A6A6A6] text-[10px] leading-tight font-product">
                    Dapat dipanggil ke rumah atau Datang ke Pet Shop kami.
                  </p>
                </div>
              </div>
            </div>

            {/* Box kiri bawah - Pet Clinic */}
            <div className="absolute bottom-20 left-[10px] z-20 w-[220px] bg-white rounded-xl px-4 py-3 shadow-lg">
              <div className="flex items-start gap-3">
                <img src="/petclinic.svg" alt="Icon" className="w-7 h-7 mt-1" />
                <div>
                  <h4 className="font-semibold text-sm">Pet Clinic</h4>
                  <p className="text-[#A6A6A6] text-[10px] leading-tight font-product">
                    Berikan perhatian extra terhadap anabul anda, sebelum
                    semuanya terlambat.
                  </p>
                </div>
              </div>
            </div>

            {/* Gambar kucing */}
            <img
              src="/cat-hero.png"
              alt="Cat"
              className="relative z-10 w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Tulisan di kanan */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold text-[#FFDC26] leading-tight">
            Be Glowing
            <br />
            Be Cute
          </h2>
          <p className="mt-3 text-sm max-w-md">
            Sayangi Hewan Kesayanganmu dengan yang Terbaik! Bulupedia Petshop
            hadir untuk memenuhi semua kebutuhan hewan peliharaanmu – dari
            makanan berkualitas hingga perawatan profesional.
          </p>
          <button className="mt-5 px-6 py-2 bg-[#FFDC26] hover:bg-yellow-500 text-white rounded-full shadow">
            Pelajari Selengkapnya
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
