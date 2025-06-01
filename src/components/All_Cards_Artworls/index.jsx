import React, { useState, useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import NFTCard from "../NFTCard";

import img10 from "../../assets/NFTImages/img10.png";
import img11 from "../../assets/NFTImages/img11.png";
import img12 from "../../assets/NFTImages/img12.png";
import img13 from "../../assets/NFTImages/img13.png";
import img14 from "../../assets/NFTImages/img14.png";
import img15 from "../../assets/NFTImages/img15.png";
import img16 from "../../assets/NFTImages/img16.png";
import img17 from "../../assets/NFTImages/img17.png";
import img18 from "../../assets/NFTImages/img18.png";
import img19 from "../../assets/NFTImages/img19.png";
import img20 from "../../assets/NFTImages/img20.png";
import img21 from "../../assets/NFTImages/img21.png";

import dp1 from "../../assets/ProfileImages/DP1.png";
import dp2 from "../../assets/ProfileImages/DP2.png";
import dp3 from "../../assets/ProfileImages/DP3.png";

const defaultImages = [img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21];
const defaultDps = [dp1, dp2, dp3];

const AllArtworks = ({ images = defaultImages, dps = defaultDps }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [index, setIndex] = useState(0);
  const cardRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    if (cardRef.current) {
      setCardWidth(cardRef.current.offsetWidth);
    }
  }, [isMobile]);

  return (
    <div className="bg-[#0C0222] text-white px-4 sm:px-8 md:px-16 py-12 min-h-screen">
      {/* Page Heading */}
      <h2 className="text-3xl font-bold mb-6">All Artworks</h2>

      {/* Top Filter Bar */}
      <div className="bg-[#1C1032]/70 rounded-xl px-4 py-4 flex flex-wrap gap-3 items-center justify-start mb-10">
        {/* Dropdown Filters */}
        {["Status", "Collection", "Type", "Category", "Price"].map((label) => (
          <select
            key={label}
            className="bg-[#13092A] text-white px-3 py-2 rounded-md text-sm border border-[#2A1E45] focus:outline-none w-[160px]"
          >
            <option>{label}</option>
          </select>
        ))}

        {/* Search Bar with Icon */}
        <div className="relative w-[300px]">
          <span className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400 text-sm">
            <FaSearch />
          </span>
          <input
            type="text"
            placeholder="Search by NFT Name"
            className="bg-[#13092A] text-white pl-10 pr-4 py-2 text-sm rounded-md border border-[#2A1E45] focus:outline-none w-full"
          />
        </div>

        {/* Sorting Dropdown */}
        <select className="bg-[#13092A] text-white px-3 py-2 rounded-md text-sm border border-[#2A1E45] focus:outline-none w-[170px]">
          <option>Recently Listed</option>
        </select>
      </div>

      {/* Cards Container */}
      <div className="w-full">
        <div className="flex flex-wrap -mx-2">
          {images.map((img, i) => (
            <div
              key={i}
              ref={i === 0 ? cardRef : null}
              className={`px-4 flex justify-center mb-4 ${isMobile ? "w-full" : "w-1/3"}`}
            >
              <NFTCard image={img} dp={dps[i % dps.length]} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllArtworks;
