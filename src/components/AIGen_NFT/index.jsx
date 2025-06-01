import React, { useState, useRef } from "react";
import genaiImg from "../../assets/AI_Images/AIimg.png";

const cards = [
  {
    title: "Mint with Ease:",
    content:
      "Our intuitive platform simplifies the process of minting your AI-generated creations into NFTs, making it accessible to artists at any skill level.",
  },
  {
    title: "Reach a Global Audience:",
    content:
      "Connect with collectors and fellow artists in a vibrant marketplace dedicated to AI-generated art.",
  },
  {
    title: "Collaborate and Innovate:",
    content:
      "Join a community of forward-thinking artists. Collaborate, share insights, and find inspiration in a supportive environment.",
  },
];

const CreateAISection = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const touchStartX = useRef(null);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;

    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50 && currentCard < cards.length - 1) {
      setCurrentCard(currentCard + 1); // swipe left
    } else if (diff < -50 && currentCard > 0) {
      setCurrentCard(currentCard - 1); // swipe right
    }

    touchStartX.current = null;
  };

  return (
    <section className="bg-[#0D0628] pt-6 pb-10 text-white">
      {/* Top Section */}
      <div className="max-w-full mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
        {/* Left Text */}
        <div className="pl-0 md:pl-4">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 ml-4 md:ml-12">
            CreateAI-Generated NFTs
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed text-lg sm:text-xl ml-4 md:ml-12">
            Unlock the future of digital creativity with xNFTs—your premier platform for crafting and minting AI-generated NFTs.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex justify-end pr-0 md:pr-4">
          <img
            src={genaiImg}
            alt="AI Generated"
            className="w-full max-w-[400px] h-auto object-contain mr-0 md:mr-12"
          />
        </div>
      </div>

      {/* Bottom Cards Section */}
      <div
        className="mt-6 md:grid md:grid-cols-3 gap-6 px-4 md:px-8"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Show all cards on desktop */}
        {cards.map((card, index) => (
          <div key={index} className="hidden md:block col-span-1">
            <div className="bg-[#1F193E] rounded-xl p-6 min-h-[270px] flex flex-col justify-between">
              <h3 className="font-semibold text-2xl mb-2">{card.title}</h3>
              <p className="text-gray-400 text-2xl">{card.content}</p>
            </div>
          </div>
        ))}

        {/* Show only one card at a time on mobile */}
        <div className="md:hidden">
          <div className="bg-[#1F193E] rounded-xl p-6 min-h-[270px] flex flex-col justify-between transition-all duration-300">
            <h3 className="font-semibold text-2xl mb-2">
              {cards[currentCard].title}
            </h3>
            <p className="text-gray-400 text-xl">
              {cards[currentCard].content}
            </p>
          </div>

          {/* Optional: show dots to indicate position */}
          <div className="flex justify-center mt-4 gap-2">
            {cards.map((_, idx) => (
              <span
                key={idx}
                className={`h-2 w-2 rounded-full ${
                  idx === currentCard ? "bg-white" : "bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateAISection;
