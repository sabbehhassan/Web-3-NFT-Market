// FeaturedCollections.js
import ReusableCarousel from "../ReusableCarousel";

import { useNavigate } from "react-router-dom";
import { data } from "../dummy_data";

const FixPriceArtwork = () => {
  const navigate = useNavigate();

  return (
    <ReusableCarousel
      title="Fix Price Artwork"
      data={data}
      onCardClick={(item) => navigate(`/product/${item.id}`)}
      viewMorePath="/collections"
      showMoreButton={true}
    />
  );
};

export default FixPriceArtwork;
