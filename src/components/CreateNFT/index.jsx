import React, { useState } from "react";
import NFTCard from "../NFTCard";
import { data } from "../dummy_data";

import walletIcon from "../../assets/iconimg/foldericon.png";
import collectionIcon from "../../assets/iconimg/foldericon.png";
import nftIcon from "../../assets/iconimg/nfticon.png";
import listIcon from "../../assets/iconimg/tagicon.png";
import { Plus } from "lucide-react";

const CreateNFT = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const triggerUpload = () => {
    document.getElementById("nft-upload-input").click();
  };

  return (
    <div className="min-h-screen bg-[#0f0c29] text-white font-poppins px-4 md:px-20 pt-32 pb-12 flex flex-col md:flex-row gap-10">
      {/* Left Section */}
      <div className="flex-1 space-y-6">
        {/* Upload Box */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold mb-1">
            Add NFT image <span className="text-red-500">*</span>
          </label>
          <div
            onClick={triggerUpload}
            className="w-full h-48 border-2 border-dashed border-gray-600 bg-[#1d1b2e] rounded-2xl flex flex-col items-center justify-center text-sm text-gray-300 cursor-pointer hover:border-blue-500 transition-all relative"
          >
            {selectedImage ? (
              <img
                src={selectedImage}
                alt="NFT Preview"
                className="w-full h-full object-cover rounded-2xl"
              />
            ) : (
              <>
                {/* Custom SVG Upload Icon */}
                <div className="w-12 h-12 mb-2 flex items-center justify-center rounded-full bg-gray-700/30">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12V4m0 0l-4 4m4-4l4 4"
                    />
                  </svg>
                </div>
                <p className="font-medium">Choose file / drag file</p>
                <p className="text-xs text-gray-500 mt-1">
                  JPG, PNG, GIF, SVG, MP4, GLB. Max 100mb
                </p>
              </>
            )}
            <input
              type="file"
              id="nft-upload-input"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </div>
        </div>

        {/* Name */}
        <div>
          <label className="block text-sm mb-1 font-semibold">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder='e.g. "Hamlet Contemplates ..."'
            className="w-full bg-[#2b2b3d] text-white p-3 rounded-xl outline-none placeholder-gray-400"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm mb-1 font-semibold">
            Description <span className="text-red-500">*</span>
          </label>
          <p className="text-xs text-gray-400 mb-1">
            The description will be included on the item's detail page
            underneath its image.
          </p>
          <textarea
            rows="4"
            placeholder='e.g. "Describe your NFT"'
            className="w-full bg-[#2b2b3d] text-white p-3 rounded-xl outline-none placeholder-gray-400"
          />
          <p className="text-xs text-right text-gray-500 mt-1">
            0 of 250 characters used
          </p>
        </div>

        {/* Properties */}
        <div>
          <label className="block text-sm mb-1 font-semibold">Properties</label>
          <div className="flex items-center bg-[#2b2b3d] p-3 rounded-xl">
            <input
              type="text"
              placeholder="Textual traits that show up as rectangles"
              className="bg-transparent flex-1 text-white outline-none placeholder-gray-400"
            />
            <button className="ml-2 text-white bg-[#3b3b4f] hover:bg-[#505068] p-2 rounded-xl">
              <Plus size={16} />
            </button>
          </div>
        </div>

        {/* Bottom Info Section */}
        <div className="bg-[#2b2b3d] p-6 rounded-2xl mt-10 border border-gray-700">
          <h2 className="text-lg font-bold mb-6 text-center">
            Create and sell your NFT’s
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm text-center">
            <div>
              <img
                src={walletIcon}
                alt="wallet"
                className="mx-auto mb-3 h-10"
              />
              <p>
                <strong>1. Set up your wallet</strong>
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Once you have a wallet, connect it to our marketplace.
              </p>
            </div>
            <div>
              <img
                src={collectionIcon}
                alt="collection"
                className="mx-auto mb-3 h-10"
              />
              <p>
                <strong>2. Create your collection</strong>
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Add social links, description, and banner images.
              </p>
            </div>
            <div>
              <img src={nftIcon} alt="nft" className="mx-auto mb-3 h-10" />
              <p>
                <strong>3. Add your NFTs</strong>
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Upload your work, add title/description/properties.
              </p>
            </div>
            <div>
              <img src={listIcon} alt="list" className="mx-auto mb-3 h-10" />
              <p>
                <strong>4. List them for sale</strong>
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Choose auction or fixed price.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 flex items-start justify-center">
        {data.slice(0, 1).map((item) => (
          <NFTCard
            key={item.id}
            image={item.image}
            dp={item.dp}
            title={item.title}
            price={item.price}
            creatorName={item.creatorName}
          />
        ))}
      </div>
    </div>
  );
};

export default CreateNFT;
