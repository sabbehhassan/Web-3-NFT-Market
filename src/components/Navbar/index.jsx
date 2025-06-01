import React, { useState } from "react";
import { FiSearch, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import LOGO from "../../assets/logo/LOGO.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  return (
    <nav className="w-screen overflow-x-hidden bg-[#0D0628] text-white fixed top-0 left-0 z-50">
      <div className=" w-screen mx-auto px-6 py-4 flex items-center justify-between overflow-x-hidden">
        {/* Left: Logo */}
        <div className="flex items-center flex-shrink-0">
          <Link to="/">
            <img src={LOGO} alt="Logo" className="h-6 md:h-8 w-auto" />
          </Link>
        </div>

        {/* Center: Nav Links */}
        <ul className="hidden md:flex flex-grow justify-center space-x-18 text-[20px] font-semibold">
          <li><Link to="/create" className="hover:text-purple-400">Create</Link></li>
          <li><Link to="/" className="hover:text-purple-400">My Wallet</Link></li>
          <li><Link to="/" className="hover:text-purple-400">Browse</Link></li>
          <li><Link to="/roadmap" className="hover:text-purple-400">RoadMap</Link></li>
        </ul>

        {/* Right: Search, Wallet Button, Cart */}
        <div className="hidden md:flex items-center space-x-6 pr-2 relative">
          {/* Animated Search */}
          <div className="flex items-center relative">
            <input
              type="text"
              placeholder="Search..."
              className={`absolute right-8 px-4 py-1 rounded-full bg-gray-800 text-white border border-purple-500 w-48 transition-all duration-300 transform ${
                showSearch ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 pointer-events-none"
              }`}
            />
            <FiSearch
              className="w-6 h-6 cursor-pointer hover:text-purple-400 transition"
              onClick={() => setShowSearch(!showSearch)}
            />
          </div>

          {/* Wallet Button */}
          <button className="bg-[#7879F1] hover:bg-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium">
            Connect Wallet
          </button>

          {/* Cart Icon */}
          <div className="relative">
            <FiShoppingCart className="w-6 h-6 cursor-pointer hover:text-purple-400" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-[#0D0628]"></span>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 bg-[#0D0628] space-y-4">
          <ul className="flex flex-col space-y-4 font-medium">
            <li><Link to="/create" className="hover:text-purple-400">Create</Link></li>
            <li><Link to="/" className="hover:text-purple-400">My Wallet</Link></li>
            <li><Link to="/" className="hover:text-purple-400">Browse</Link></li>
            <li><Link to="/roadmap" className="hover:text-purple-400">RoadMap</Link></li>
          </ul>

          {/* Mobile Search */}
          <div className="relative pt-2">
            <FiSearch
              className="w-6 h-6 cursor-pointer hover:text-purple-400"
              onClick={() => setShowMobileSearch(!showMobileSearch)}
            />
            {showMobileSearch && (
              <input
                type="text"
                placeholder="Search..."
                className="mt-2 px-4 py-2 w-full rounded-full bg-gray-800 text-white border border-purple-500"
              />
            )}
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-between mt-4">
            <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium">
              Connect Wallet
            </button>
            <div className="relative">
              <FiShoppingCart className="w-6 h-6 cursor-pointer hover:text-purple-400" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-[#0D0628]"></span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
