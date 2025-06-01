// FeaturedCollections.js
import ReusableCarousel from "../ReusableCarousel";
import NFTCard from "../NFTCard";
import { useNavigate } from "react-router-dom";
import { data } from "../dummy_data";

const AnotherNFT = () => {
  const navigate = useNavigate();

  return (
    <ReusableCarousel
      title="Auction Artwork"
      data={data}
      onCardClick={(item) => navigate(`/product/${item.id}`)}
      viewMorePath="/collections"
      showMoreButton={true}
    />
  );
};

export default AnotherNFT;
