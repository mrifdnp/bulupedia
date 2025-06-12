import React from 'react'

const HowItWorks = () => {
  return (
    <section className="py-10 px-6 text-center bg-gray-50">
      <h3 className="text-xl font-semibold mb-8">How Does It Work</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
        <div className="flex flex-col items-center">
          <img src="/experienced.png" alt="Experienced" className="w-20 h-20 mb-4 object-contain" />
          <p className="font-semibold text-base mb-1">Berpengalaman</p>
          <p className="text-sm text-gray-600 max-w-xs">
            Dengan pegawai ahli dibidangnya serta sertifikasi resmi menjamin keselamatan peliharaan anda
          </p>
        </div>

        <div className="flex flex-col items-center">
          <img src="/withHeart.png" alt="With Heart" className="w-20 h-20 mb-4 object-contain" />
          <p className="font-semibold text-base mb-1">Dengan hati</p>
          <p className="text-sm text-gray-600 max-w-xs">
            Tidak hanya ahli tapi juga profesional dalam menjaga dan merawat berkerja dengan setulus hati
          </p>
        </div>

        <div className="flex flex-col items-center">
          <img src="/bestService.png" alt="Best Service" className="w-20 h-20 mb-4 object-contain" />
          <p className="font-semibold text-base mb-1">Pelayanan Terbaik</p>
          <p className="text-sm text-gray-600 max-w-xs">
            Konsultasi Gratis mengenai peliharaananda mulai dari permasalah ringan hingga berat
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
