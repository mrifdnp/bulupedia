import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-yellow-400 text-white py-8 px-6">
    <div className="flex justify-between flex-wrap gap-6">
      <div>
        <h2 className="text-2xl font-bold">Bulu Pedia</h2>
        <div className="flex gap-2 mt-2">
          <a href="#">📷</a>
          <a href="#">🌐</a>
          <a href="#">🐦</a>
          <a href="#">🎵</a>
        </div>
      </div>
      <div>
        <h3 className="font-semibold">Service</h3>
        <ul className="text-sm">
          <li>Pet</li>
          <li>Cat</li>
          <li>Dog</li>
          <li>Location</li>
          <li>Grooming</li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold">Support</h3>
        <ul className="text-sm">
          <li>Account</li>
          <li>Support Center</li>
          <li>Feedback</li>
          <li>Contacts</li>
        </ul>
      </div>
    </div>
  </footer>
  )
}

export default Footer