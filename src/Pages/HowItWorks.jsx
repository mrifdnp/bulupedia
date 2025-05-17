import React from 'react'

const HowItWorks = () => {
  return (
    <section className="py-10 px-6 text-center">
    <h3 className="text-xl font-semibold mb-4">How Does It Work</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div>
        <img src="/experience.png" className="mx-auto mb-2" alt="Experienced" />
        <p className="font-semibold">Berpengalaman</p>
        <p className="text-sm">Dengan pegawai ahli dan bersertifikat, keamanan terjamin</p>
      </div>
      <div>
        <img src="/heart.png" className="mx-auto mb-2" alt="With Heart" />
        <p className="font-semibold">Dengan hati</p>
        <p className="text-sm">Penuh kasih dan perhatian untuk hewan kesayanganmu</p>
      </div>
      <div>
        <img src="/best-service.png" className="mx-auto mb-2" alt="Best Service" />
        <p className="font-semibold">Pelayanan Terbaik</p>
        <p className="text-sm">Konsultasi gratis dan penanganan dari ringan hingga berat</p>
      </div>
    </div>
  </section>
  )
}

export default HowItWorks