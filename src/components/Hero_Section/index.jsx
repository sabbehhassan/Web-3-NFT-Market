import React from "react";
import animi from "../../assets/animations/Animi.png";

const HeroSection = () => {
  return (
    <section className="bg-[#0D0628] text-white py-4 px-4 md:px-8 mt-10">
      <div className="w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Content */}
        <div className="w-full md:w-1/2 space-y-6 text-center ">
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Elevate <br />
            Your Collection <br />
            With Exclusive <br />
            AI-Generated{" "}
            <span className="text-[#7879F1] underline decoration-purple-[#7879F1] decoration-[4px] underline-offset-[8px]">
              NFT
            </span>
            <br />
            Masterpieces.
          </h1>

          {/* Paragraph */}
          <p className="text-[#9F8FC1] text-base sm:text-lg">
            Welcome to xNFTs: Where AI Art Meets Exclusivity. Explore a{" "}
            <br className="hidden sm:block" />
            curated collection of cutting-edge digital masterpieces,{" "}
            <br className="hidden sm:block" />
            redefining the horizon for art enthusiasts.
          </p>

          {/* ✅ Mobile Image only */}
          <div className="w-full flex justify-center md:hidden pr-10">
            <img
              src={animi}
              alt="NFT Character"
              className="w-[300px] h-[] object-contain "
            />
          </div>

          {/* Stats */}
          <div className="flex justify-center md:justify-center gap-7 items-center">
            <div className="text-center">
              <p className="text-2xl font-bold text-[#7879F1]">10K</p>
              <p className="text-sm text-gray-400">Artwork</p>
            </div>
            <div className="h-8 border-l border-gray-600"></div>
            <div className="text-center">
              <p className="text-2xl font-bold text-[#7879F1]">32K</p>
              <p className="text-sm text-gray-400">Auction</p>
            </div>
            <div className="h-8 border-l border-gray-600"></div>
            <div className="text-center">
              <p className="text-2xl font-bold text-[#7879F1]">42K</p>
              <p className="text-sm text-gray-400">Artist</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-between md:justify-center gap-6 md:gap-2 mx-8 md:mx-0">
            <button className="bg-[#7879F1] hover:bg-purple-600 text-white px-8 py-2 rounded-full font-medium transition">
              Explore
            </button>
            <button className="border border-[#7879F1] hover:bg-purple-500 text-[#ffff] px-8 py-2 rounded-full font-medium transition">
              Create
            </button>
          </div>
        </div>

        {/* ✅ Desktop Image only */}
        <div className="w-full md:w-1/2 hidden md:flex justify-center">
          <img
            src={animi}
            alt="NFT Character"
            className="w-[450px] lg:w-[500px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
