import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen py-12 px-6 md:px-20 bg-no-repeat bg-center"
      style={{
        backgroundImage: "url('about.png')",
        backgroundSize: 'cover',      // proporsional & memenuhi area
        backgroundPosition: 'center', // posisi tengah
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg max-w-4xl mx-auto">
        <h2 className="text-2xl text-[#FFDC26] relative">
          Bulu{" "}
          <span className="text-black relative inline-block">
            Pedia
            <span className="absolute -top-2 -right-4">
              <img src="bulupedia.svg" alt="Logo" className="w-6 h-6" />
            </span>
          </span>
        </h2>

        <p className="mt-4 text-sm">
          Kami percaya bahwa hewan peliharaan bukan sekadar binatang – mereka adalah keluarga.
          Itulah mengapa Bulupedia hanya menyediakan produk terbaik dan layanan penuh kasih sayang:
        </p>

        <ul className="mt-4 text-sm list-disc list-inside space-y-1">
          <li>Makanan & Snack premium</li>
          <li>Grooming oleh tim berpengalaman</li>
          <li>Vitamin, obat, dan aksesoris lengkap</li>
          <li>Layanan antar cepat dan aman</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
