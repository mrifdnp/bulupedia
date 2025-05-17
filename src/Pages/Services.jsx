import React from 'react'

const Services = () => {
  return (
    <section className="py-10 bg-gray-50 text-center">
    <h3 className="text-xl font-semibold mb-2">Out The Best Service</h3>
    <p className="mb-6 text-sm">Kami memberikan pelayanan terbaik dan berpengalaman untuk menunjang kebutuhan kamu dan anabulmu</p>
    <div className="flex justify-center flex-wrap gap-6">
      {['Pet Clinic', 'Pet Hotel', 'Pet Grooming', 'Pet Sitter', 'Pet Training'].map(service => (
        <div key={service} className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-yellow-200 flex items-center justify-center text-yellow-600 font-bold text-sm">🐾</div>
          <span className="mt-2 text-sm font-medium">{service}</span>
        </div>
      ))}
    </div>
  </section>
  )
}

export default Services