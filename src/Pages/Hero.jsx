import React from 'react';

const Hero = () => {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-4 md:px-0">
        
        {/* Gambar di kiri dengan lingkaran di belakang */}
        <div className="md:w-1/2 mb-6 md:mb-0 flex justify-center md:justify-start">
          <div className="relative w-[300px] h-[400px]">
            {/* Lingkaran kuning */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[250px] h-[250px] bg-[#FFDC26] rounded-full z-0"></div>
            
            {/* Gambar kucing PNG transparan */}
            <img
              src="/cat-hero.png" // pastikan ini PNG transparan
              alt="Cat"
              className="relative z-10 w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Tulisan di kanan */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold text-[#FFDC26]">
            Be Glowing
            <br />Be Cute
          </h2>
          
          <p className="mt-2 text-sm max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mollis sed viverra posuere malesuada.
          </p>
          <button className="mt-4 px-6 py-2 bg-[#FFDC26] hover:bg-yellow-500 text-white rounded-full shadow">
            Pelajari Selengkapnya
          </button>
        </div>

      </div>
    </section>
  );
};

export default Hero;
