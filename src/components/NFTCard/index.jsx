import React from "react";

const NFTCard = ({ image, dp }) => {
  return (
    <div className="bg-[#1F193E] rounded-2xl p-4 w-[294px] sm:w-[350px] md:w-[454px] h-[460px] sm:h-[510px]  md:h-[565px] shrink-0">
      
      {/* Image with timer inside bottom center */}
      <div className="relative">
        <img
          src={image}
          alt="NFT"
          className="rounded-xl h-[340px] sm:h-[410px] md:h-[410px]  object-cover"

        />

        {/* Timer inside image bottom center */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
          <p className="w-[160px] h-[42px] bg-[#0F182E] text-white text-center font-bold flex items-center justify-center rounded-lg text-sm">
            🔥 05 : 12 : 07 : 45
          </p>
        </div>
      </div>

      {/* Title */}
      <h3 className="mt-4 md:mt-8 text-white text-md font-semibold truncate">
        "Hamlet Contemplates ..." 
        {/* <button className="bg-[#1E50FF] " >
          BSC
        </button> */}
      </h3>

      {/* Creator and Bid Info */}
      <div className="flex justify-between mt-2 text-white text-sm ">
        <div className="flex items-center space-x-4">
        <img src={dp} alt="Profile" className="w-[42px] h-[42px] rounded-lg object-cover" />
          <div className="h-[42px] pt-2">
            <p className="text-gray-400 text-xs">Creator</p>
            
            <p className="font-semibold">SalvadorDali</p>
          </div>
        </div>
        <div className="text-right pt-2">
          <p className="text-gray-400 text-xs">Current Bid</p>
          <p className="font-semibold">4.89 ETH</p>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
