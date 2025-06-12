import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-yellow-400 text-white py-8 px-6">
      <div className="flex justify-between flex-wrap gap-6">
        <div>
          <h2 className="text-2xl font-bold">Bulu Pedia</h2>
          <div className="flex gap-3 mt-3">
            <a href="#">
             <img src="/ig.png" alt="Instagram" className="w-6 h-6" width="24" height="24" />

            </a>
            <a href="#">
              <img src="/x.png" alt="X" className="w-6 h-6" width="24" height="24" />
            </a>
            <a href="#">
              <img src="/t.png" alt="TikTok" className="w-6 h-6" width="24" height="24" />
            </a>
            <a href="#">
              <img src="/net.png" alt="Website" className="w-6 h-6" width="24" height="24" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Service</h3>
          <ul className="text-sm space-y-1">
            <li>Pet</li>
            <li>Cat</li>
            <li>Dog</li>
            <li>Location</li>
            <li>Grooming</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Support</h3>
          <ul className="text-sm space-y-1">
            <li>Account</li>
            <li>Support Center</li>
            <li>Feedback</li>
            <li>Contacts</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
