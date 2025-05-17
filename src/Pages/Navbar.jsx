import { useState } from "react";

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <>
      <header className="flex justify-between items-center p-6 bg-white shadow-md font-cocon relative">
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
        <nav className="hidden md:flex space-x-4 text-sm">
          <a href="#" className="hover:text-[#FFDC26]">Pet Clinic</a>
          <a href="#" className="hover:text-[#FFDC26]">Pet Hotel</a>
          <a href="#" className="hover:text-[#FFDC26]">Pet Grooming</a>
          <a href="#" className="hover:text-[#FFDC26]">Pet Sitter</a>
          <a href="#" className="hover:text-[#FFDC26]">Pet Training</a>
          <span className="ml-4 text-[#FFDC26]">22.11.5093</span>
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
            <span className="block text-[#FFDC26]">22.11.5093</span>
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
