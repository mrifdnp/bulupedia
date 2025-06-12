import React from 'react'

const NewsLetter = () => {
  return (
    <section className="py-10 px-6 text-center">
    <h3 className="text-xl font-semibold mb-2">Subscribe Our Newsletter</h3>
    <p className="text-sm mb-4">Banyak promo yang tersedia khusus untuk kamu, gak mau ketinggalan? Yuk ikut berlangganan gratis!</p>
    <div className="flex justify-center">
      <input type="email" placeholder="Enter your email address" className="px-4 py-2 border rounded-l-full focus:outline-none" />
      <button className="px-6 py-2 bg-yellow-400 hover:bg-yellow-500 text-white rounded-r-full">Berlangganan</button>
    </div>
  </section>
  )
}

export default NewsLetter