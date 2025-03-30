import React, { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center h-[80px] px-5 md:px-10 lg:px-16 bg-white shadow-md">
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 lg:space-x-8 text-sm justify-center items-center">
          <a href="src/pages/About.jsx" className="hover:font-semibold transition duration-300">ABOUT</a>
          <a href="/" className="hover:font-semibold transition duration-300">PRODUCTS</a>
          <a href="/" className="hover:font-semibold transition duration-300">IMPACT</a>
          <a href="/" className="hover:font-semibold transition duration-300">INVESTOR RELATIONS</a>
          {/* Logo */}
          <img src="/Images/logo2.svg" alt="icon" className="w-[120px] h-auto md:w-[144px]" />
          <a href="/" className="hover:font-semibold transition duration-300">CAREERS</a>
          <a href="/" className="hover:font-semibold transition duration-300">NEWS & MEDIA</a>
          <a href="/" className="hover:font-semibold transition duration-300">CONTACT</a>
        </nav>

        {/* Right Side Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="text-xl">🔍</button>
          <button className="text-xl">🌍</button>
          <a href="/shop" className="bg-red-600 text-white px-5 py-2 rounded-l-full rounded-r-md text-sm">
            SHOP NOW →
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg p-5 space-y-4 text-center">
          <a href="/" className="block">ABOUT</a>
          <a href="/about" className="block">PRODUCTS</a>
          <a href="/contact" className="block">IMPACT</a>
          <a href="/" className="block">INVESTOR RELATIONS</a>
          <a href="/" className="block">CAREERS</a>
          <a href="/about" className="block">NEWS & MEDIA</a>
          <a href="/contact" className="block">CONTACT</a>
          <div className="flex justify-center space-x-4 mt-4">
            <button className="text-xl">🔍</button>
            <button className="text-xl">🌍</button>
          </div>
          <a href="/shop" className="block bg-red-600 text-white py-2 mt-3 rounded-md text-sm">
            SHOP NOW →
          </a>
        </div>
      )}
    </>
  );
}

export default Header;
