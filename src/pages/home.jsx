import React from "react";
import HeroSection from "../components/Hero_Section";
import FeaturedCollections from "../components/Featured_Collection";
import AuctionArtwork from "../components/Auction_Artwork";
import FixPriceArtwork from "../components/Fix_price_Artworks";
import CreateAISection from "../components/AIGen_NFT";
import FaqSection from "../components/FAQsection";
import AllArtworks from "../components/All_Cards_Artworls";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedCollections />
      <AuctionArtwork />
      <FixPriceArtwork />
      <CreateAISection />
      <FaqSection />
      <AllArtworks/>
      
    </div>
  );
};

export default Home;
