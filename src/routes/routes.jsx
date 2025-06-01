import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import HeroSection from "../components/Hero_Section";
import FeaturedCollections from "../components/Featured_Collection";
import AuctionArtwork from "../components/Auction_Artwork";
import FixPriceArtwork from "../components/Fix_price_Artworks";
import CreateAISection from "../components/AIGen_NFT";
import FaqSection from "../components/FAQsection";
import Home from "../pages/home";
import RoadMap from "../components/RoadMap";
import AllArtworks from "../components/All_Cards_Artworls";
import ProductDetail from "../pages/ProductDetail";  // Import your ProductDetail component
import CreateNFT from "../components/CreateNFT";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> }, 
      { path: "hero", element: <HeroSection /> },
      { path: "featurecollection", element: <FeaturedCollections /> },
      { path: "auctioartwork", element: <AuctionArtwork /> },
      { path: "fixedpriceartwork", element: <FixPriceArtwork /> },
      { path: "createnft", element: <CreateAISection /> },
      { path: "faq", element: <FaqSection /> },
      { path: "allartwork", element: <AllArtworks /> },
      { path: "/roadmap", element: <RoadMap /> },
      { path: "/product/:id", element: <ProductDetail /> },  
      {path: "/create", element: <CreateNFT/>}
    ]
  }
]);

export default router;
