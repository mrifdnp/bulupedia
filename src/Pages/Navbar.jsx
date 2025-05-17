function Navbar () {
  return (
    <>
      <header className="flex justify-between items-center p-6 bg-white shadow-md font-cocon">
        <h1 className="text-2xl text-[#FFDC26] relative">
          Bulu{" "}
          <span className="text-black relative inline-block">
            Pedia
            <span className="absolute -top-2 -right-4">
              <img src="bulupedia.svg" alt="Logo" className="w-6 h-6" />
            </span>
          </span>
        </h1>
        <nav className="space-x-4 text-sm">
          <a href="#" className="hover:text-[#FFDC26]">Pet Clinic</a>
          <a href="#" className="hover:text-[#FFDC26]">Pet Hotel</a>
          <a href="#" className="hover:text-[#FFDC26]">Pet Grooming</a>
          <a href="#" className="hover:text-[#FFDC26]">Pet Sitter</a>
          <a href="#" className="hover:text-[#FFDC26]">Pet Training</a>
          <span className="ml-4 text-[#FFDC26]">+62 851-5692-6923 | 10.00 - 19.00</span>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
