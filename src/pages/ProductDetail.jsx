import { useParams } from "react-router-dom";
import { data } from "../components/dummy_data";
import ReusableCarousel from "../components/ReusableCarousel";
import NFTCard from "../components/NFTCard";

const ProductDetail = () => {
  const { id } = useParams();
  const item = data.find((d) => d.id == id);

  if (!item) {
    return (
      <div className="text-white text-center mt-20">
        No product found with ID: {id}
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen w-full bg-[#0D0628] flex items-center justify-center px-8 py-10">
        <div className="bg-[#1A132B] text-white p-6 md:p-10 rounded-xl shadow-2xl max-w-6xl w-full flex flex-col md:flex-row gap-8">
          {/* Left - Image */}
          <div className="w-full md:w-1/2">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-auto rounded-xl object-cover border-2 border-gray-700"
            />
          </div>

          {/* Right - Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-2">
                {item.title} (ID: {item.id})
              </h2>
              <p className="text-gray-400  mb-6 text-sm">
                This is a featured NFT in our exclusive collection. Explore more
                on our marketplace. The Birdhouse is a collection of 6000 birds,
                each with it's own unique traits & personality. See them all at
                TheBirdHouse.app
              </p>
            </div>

            <div className="flex items-center justify-between p-4  ">
              <div className="text-center md:pt-8">
                <p className="md:text-xl text-gray-400">Countdown</p>
                <p className="md:text-xl text-orange-500 font-semibold">
                  🔥 05:12:07:45
                </p>
              </div>
              <div className="text-center md:pt-8">
                <p className="text-sm md:text-xl text-gray-400">Last Bid</p>
                <p className="text-sm md:text-xl font-semibold">10.89 ETH</p>
              </div>
            </div>

            <div className="flex justify-between items-center bg-[#261B3E] p-4 rounded-lg mb-6 shadow-md w-full max-w-full overflow-hidden">
              {/* Creator */}
              <div className="flex items-center gap-2 basis-1/2 min-w-0">
                <img
                  src={item.dp}
                  alt="Creator"
                  className="w-10 h-10 rounded-full border border-gray-500 shrink-0"
                />
                <div className="min-w-0">
                  <p className="text-xs text-gray-400 whitespace-nowrap">
                    Creator
                  </p>
                  <p className="text-sm font-semibold truncate">SalvadorDali</p>
                </div>
              </div>

              {/* Owner */}
              <div className="flex items-center gap-2 justify-end basis-1/2 min-w-0">
                <img
                  src={item.dp}
                  alt="Owner"
                  className="w-10 h-10 rounded-full border border-gray-500 shrink-0"
                />
                <div className="min-w-0 text-right">
                  <p className="text-xs text-gray-400 whitespace-nowrap">
                    Owner
                  </p>
                  <p className="text-sm font-semibold truncate">SalvadorDali</p>
                </div>
              </div>
            </div>

            <button className="bg-[#7879F154] hover:bg-indigo-700 border-2 text-white py-3 px-6 rounded-lg font-semibold md:w-60 transition duration-200 shadow-md">
              Place A Bid
            </button>
          </div>
        </div>
      </div>
      <ReusableCarousel
        title="Another NFTS"
        data={data}
        cardComponent={NFTCard}
        onCardClick={(item) => navigate(`/product/${item.id}`)}
        viewMorePath="/collections"
        showMoreButton={true}
      />
    </>
  );
};

export default ProductDetail;
