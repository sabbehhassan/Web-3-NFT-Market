import React from "react";

const roadmapData = [
  {
    phase: "Phase 1",
    title: "Platform Development and Testing",
    points: [
      "Initial Development: Complete the development of core marketplace features, including the ability for AI artists to mint their works, create personal profiles, and manage sales.",
      "Testing: Internal beta testing phase to ensure all functionalities are operational and free of bugs. Engage a small group of AI artists for preliminary feedback.",
    ],
    position: "left",
  },
  {
    phase: "Phase 2",
    title: "Official Launch and Artist Call",
    points: [
      "Official Launch: Public announcement and launch of the xNFTs marketplace to the community of artists and collectors.",
      "Call to Artists: Launch a call to artists inviting AI artists to try the platform, mint their works, and start selling. This will help create an initial content base and attract early users.",
    ],
    position: "right",
  },
  {
    phase: "Phase 3",
    title: "Community Engagement and Growth",
    points: [
      "Events and Workshops: Organize online events and workshops to educate artists on using the platform and the potential  of AI-generated art.",
      "Rewards Program: Implement a rewards program to reward the most active artists and those contributing significantly to the community's growth.: Internal beta testing phase to ensure all functionalities are operational and free of bugs. Engage a small group of AI artists for preliminary feedback.",
    ],
    position: "left",
  },
  {
    phase: "Phase 4",
    title: "Implementation of Unique Opportunities",
    points: [
      "Unique Prizes and Exclusive Drops: Launch initiatives to offer unique prizes and exclusive drops to artists and collectors, further incentivizing participation and interaction within the platform.",
      "Partnerships and Collaborations: Establish partnerships with art galleries, Read More!",
    ],
    position: "right",
  },
  {
    phase: "Phase 5",
    title: "Evaluation and Expansion",
    points: [
      "Feedback and Improvements: Continuously collect feedback from the community to identify improvement areas and implement necessary platform updates.",
      "Feature Expansion: Develop new features based on user feedback and market trends, such as advanced analytics tools for artists and new ways of interaction for collectors.",
    ],
    position: "left",
  },
  {
    phase: "Phase 6",
    title: "Sustainability and Ongoing Innovation",
    points: [
      "Environmental Sustainability: Implement solutions to reduce the environmental impact of NFT minting and trading, such as using energy-efficient blockchains.",
      "Continuous Innovation: Maintain a constant commitment to innovation, exploring new technologies and methodologies Read More!",
    ],
    position: "right",
  },
  {
    phase: "Phase 7",
    title: "Launch of Proprietary Cryptocurrency Token",
    points: [
      "Events and Workshops: Organize online events and workshops to educate artists on using the platform and the potential of AI-generated art.",
      "Early Adopter Incentives: The token will be aimed specifically at early Read More!"
    ],
    position: "left",
  },
];

const Roadmap = () => {
  return (
    <section className="bg-[#0f0c29] text-white py-20 px-4 md:px-10">
      <h2 className="text-4xl font-bold pr-4 mb-20 text-center tracking-widest">
        ROAD<span className="text-purple-400"> ✦ </span>MAP
      </h2>

      <div className="relative max-w-6xl mx-auto">
        {/* Center vertical line */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-indigo-700 z-0" />

        <div className="flex flex-col space-y-10 relative z-10">
          {roadmapData.map((item, index) => {
            const isLeft = item.position === "left";
            return (
              <div
                key={index}
                className="relative flex flex-col md:flex-row items-center"
              >
                {/* Left Card */}
                {isLeft ? (
                  <>
                    {/* Arrow from line to card (left side) */}
                    <div className="absolute left-1/2 -translate-x-1/2 w-0 h-0">
                      <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 rotate-45 w-4 h-4 bg-[#1a133b] border-t border-l border-purple-700 z-10" />
                    </div>
                    <div className="w-full md:w-1/2 pr-0 md:pr-8 relative">
                      {/* Phase Label */}
                      <div className="absolute -left-[82px] md:justify-top top-1/5 -translate-y-1/2 z-10">
                        <span className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white text-sm font-bold px-4 py-2 rounded-l-full shadow-lg">
                          {item.phase}
                        </span>
                      </div>

                      {/* Card */}
                      <div className="bg-[#1a133b] border border-purple-700 p-6 rounded-xl shadow-md relative">
                        <h3 className="text-2xl font-bold text-purple-300 mb-3">
                          {item.title}
                        </h3>
                        <ul className="text-lg text-gray-300 space-y-2 list-disc list-inside">
                          {item.points.map((pt, idx) => (
                            <li key={idx}>
                              <strong>{pt.split(":")[0]}:</strong>{" "}
                              {pt.split(":")[1]}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="hidden md:block w-1/2" />
                  </>
                ) : (
                  <>
                    <div className="hidden md:block w-1/2" />
                    {/* Arrow from line to card (right side) */}
                    <div className="absolute left-1/2 -translate-x-1/2 w-0 h-0">
                      <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 rotate-45 w-4 h-4 bg-[#1a133b] border-t border-l border-purple-700 z-10" />
                    </div>

                    <div className="w-full md:w-1/2 pl-0 md:pl-8 relative">
                      {/* Phase Label */}
                      <div className="absolute -right-[82px] top-1/5 -translate-y-1/2 z-10">
                        <span className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white text-sm font-bold px-4 py-2 rounded-r-full shadow-lg">
                          {item.phase}
                        </span>
                      </div>

                      {/* Card */}
                      <div className="bg-[#1a133b] border border-purple-700 p-6 rounded-xl shadow-md relative">
                        <h3 className="text-2xl font-bold text-purple-300 mb-3">
                          {item.title}
                        </h3>
                        <ul className="text-lg text-gray-300 space-y-2 list-disc list-inside">
                          {item.points.map((pt, idx) => (
                            <li key={idx}>
                              <strong>{pt.split(":")[0]}:</strong>{" "}
                              {pt.split(":")[1]}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
