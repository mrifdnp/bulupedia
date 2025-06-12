/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion } from "framer-motion";
function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <>
      <header className="flex justify-between items-center p-6 bg-[white] shadow-md font-cocon relative">
        <h1 className="text-2xl text-[#FFDC26] relative">
          Bulu{" "}
          <span className="text-black relative inline-block">
            Pedia
            <span className="absolute -top-2 -right-4">
              <img src="bulupedia.svg" alt="Logo" className="w-6 h-6" />
            </span>
          </span>
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-4 text-sm font-product items-center">
          <a href="#" className="hover:text-[#FFDC26]">Pet Clinic</a>
          <a href="#" className="hover:text-[#FFDC26]">Pet Hotel</a>
          <a href="#" className="hover:text-[#FFDC26]">Pet Grooming</a>
          <a href="#" className="hover:text-[#FFDC26]">Pet Sitter</a>
          <a href="#" className="hover:text-[#FFDC26]">Pet Training</a>
          {/* Ganti span menjadi button */}
       
           <motion.button
            className="ml-4 px-4 py-1 bg-gradient-to-r from-[#FFDC26] to-[#E0AF00] hover:from-yellow-500 hover:to-yellow-600 text-white rounded-full shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Sign Up
          </motion.button>
        </nav>

        {/* Hamburger for Mobile */}
        <button onClick={toggleSidebar} className="md:hidden focus:outline-none">
          <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        

        {/* Sidebar */}
        <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 z-50 md:hidden`}>
          <div className="p-6 space-y-4">
            <button onClick={closeSidebar} className="mb-4">
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <a href="#" className="block hover:text-[#FFDC26]">Pet Clinic</a>
            <a href="#" className="block hover:text-[#FFDC26]">Pet Hotel</a>
            <a href="#" className="block hover:text-[#FFDC26]">Pet Grooming</a>
            <a href="#" className="block hover:text-[#FFDC26]">Pet Sitter</a>
            <a href="#" className="block hover:text-[#FFDC26]">Pet Training</a>
            {/* Button Sign Up di sidebar */}
        
             <motion.button
                        className="mt-4 w-full px-4 py-2 bg-gradient-to-r from-[#FFDC26] to-[#E0AF00] hover:from-yellow-500 hover:to-yellow-600 text-white rounded-full shadow-lg"
                        whileHover={{ scale: 1.05 }}
                         onClick={closeSidebar}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                       Sign Up
                      </motion.button>
          </div>
        </div>

        {/* Overlay */}
        {isSidebarOpen && (
          <div
            onClick={closeSidebar}
            className="fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden"
          />
        )}
      </header>
    </>
  );
}

export default Navbar;
