import React from "react";
import { Instagram } from "lucide-react";
import LOGO from "../../assets/logo/LOGO.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#0b0a1bfb] to-[#0c0527] text-white py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16 md:gap-32">
        {/* Intro Section */}
        <div className="w-full md:w-[40%]">
          <img src={LOGO} alt="Logo" className="h-10 mb-4" />
          <p className="text-sm text-gray-300 leading-relaxed md:text-lg">
            Welcome to xNFTs: Where AI Art Meets Exclusivity. Explore a curated
            collection of cutting-edge digital masterpieces, redefining the
            horizon for art enthusiasts. Elevate your experience with the
            pinnacle of quality and uniqueness in the world of NFTs.
          </p>
          <p className="text-xs mt-4 md:text-lg text-gray-400">
            2024 All Right Reserved
          </p>
        </div>

        {/* Legal, Help, Contact Section */}
        <div className="w-screen md:w-[60%] flex justify-center flex-wrap sm:flex-nowrap md:gap-12 lg:gap-12">
          {/* Legal */}
          <div className="flex-1 min-w-[90px]">
            <h3 className="font-bold text-lg mb-3 md:text-2xl">Legal</h3>
            <ul className="space-y-2 text-gray-300 text-sm md:text-lg">
              <li><a href="#">FAQ</a></li>
              <li><a href="#">About us</a></li>
            </ul>
          </div>

          {/* Help */}
          <div className="flex-1 min-w-[100px]">
            <h3 className="font-bold text-lg mb-3 md:text-2xl">Help</h3>
            <ul className="space-y-2 text-gray-300 text- md:text-lg">
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Legal Disclaimer</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex-1 min-w-[100px] ml-6">
            <div>
              <h3 className="font-bold text-lg mb- md:text-2xl">Contact</h3>
              <div className="flex items-center space-x-3 mt-4">
                <a href="#" className="text-white hover:text-purple-400">
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
