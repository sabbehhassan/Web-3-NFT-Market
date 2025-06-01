// ReusableCarousel.js
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import NFTCard from "../NFTCard";

const ReusableCarousel = ({title, data, onCardClick, showMoreButton = true, viewMorePath = null}) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [index, setIndex] = useState(0);
  const cardRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [cardHeight, setCardHeight] = useState(0);
  const navigate = useNavigate();

  const visibleCount = isMobile ? 1 : 3;

  const prev = () => index > 0 && setIndex(index - 1);
  const next = () => index < data.length - visibleCount && setIndex(index + 1);

  useEffect(() => {
    if (cardRef.current) {
      setCardWidth(cardRef.current.offsetWidth);
      setCardHeight(cardRef.current.offsetHeight);
    }
  }, [isMobile]);

  let startX = 0;
  const handleTouchStart = (e) => (startX = e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = endX - startX;
    if (diff > 50 && index > 0) prev();
    else if (diff < -50 && index < data.length - visibleCount) next();
  };

  return (
    <div className="bg-[#0D0628] px-4 py-8">
      <div
        className={`mb-8 ${
          isMobile ? "text-center" : "flex md:justify-between items-center"
        }`}
      >
        <h2 className="text-2xl font-bold text-white md:ml-12">{title}</h2>
        {!isMobile && viewMorePath && (
          <button
            onClick={() => navigate(viewMorePath)}
            className="bg-[#7879F1] hover:bg-[#4a39a5] transition px-4 py-1 rounded-lg text-lg text-white md:mr-8"
          >
            View More
          </button>
        )}
      </div>

      <div className="flex items-center gap-4">
        {!isMobile && (
          <button
            onClick={prev}
            disabled={index === 0}
            className={`hidden md:flex items-center justify-center ${
              index === 0
                ? "opacity-30 cursor-not-allowed"
                : "hover:bg-[#372879]"
            } bg-[#1F193E]/80 backdrop-blur-md rounded-lg`}
            style={{ width: "32px", height: `${cardHeight}px` }}
          >
            <ChevronLeft className="text-white" />
          </button>
        )}

        <div
          className="overflow-hidden w-full relative"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${index * cardWidth}px)` }}
          >
            {data.map((item, i) => (
              <div
                key={item.id}
                ref={i === 0 ? cardRef : null}
                onClick={() => onCardClick(item)}
                className={`cursor-pointer flex-shrink-0 ${
                  isMobile
                    ? "w-full flex justify-center px-4"
                    : "w-[calc(100%/3)] px-2"
                }`}
              >
                <NFTCard {...item} />
              </div>
            ))}
          </div>
        </div>

        {!isMobile && (
          <button
            onClick={next}
            disabled={index >= data.length - visibleCount}
            className={`hidden md:flex items-center justify-center ${
              index >= data.length - visibleCount
                ? "opacity-30 cursor-not-allowed"
                : "hover:bg-[#372879]"
            } bg-[#1F193E]/80 backdrop-blur-md rounded-lg`}
            style={{ width: "32px", height: `${cardHeight}px` }}
          >
            <ChevronRight className="text-white" />
          </button>
        )}
      </div>

      {isMobile && showMoreButton && (
        <div className="mt-6 flex justify-center">
          <button className="bg-[#372879] text-white px-4 py-2 rounded-lg">
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default ReusableCarousel;
