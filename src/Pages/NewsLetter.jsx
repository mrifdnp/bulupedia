import React from "react";
import { Instagram } from "lucide-react"; // pastikan lucide-react terinstal

const FollowInstagram = () => {
  return (
    <section className="py-12 px-6 text-center bg-gray-50">
      <h3 className="text-2xl font-bold mb-3 text-gray-800">Follow Instagram Kami</h3>
      <p className="text-sm text-gray-600 mb-6 max-w-lg mx-auto">
        Dapatkan update terbaru dan promo menarik lainnya langsung dari Instagram kami!
      </p>

      <div className="flex items-center justify-center gap-3">
        <a
          href="https://instagram.com/bulupedia" // Ganti dengan link akun Instagram kamu
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-[#FFDC26] hover:bg-yellow-400 text-white font-medium px-6 py-2 rounded-full shadow transition duration-300"
        >
          <Instagram className="mr-2 w-5 h-5" />
          Kunjungi Instagram
        </a>
      </div>
    </section>
  );
};

export default FollowInstagram;
