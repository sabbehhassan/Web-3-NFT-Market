
import { useState } from "react";
import animi1 from "../../assets/animations/animi1.png";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How Does the Artist Selection Process Work at xNFTs?",
    answer:
      "At xNFTs, we uphold a standard of excellence and innovation in AI-generated art. To curate groundbreaking pieces, artists undergo a selective process. Apply by submitting your portfolio and artistic approach, integrating AI. Our expert team reviews applications, selecting artists pushing digital art boundaries.",
  },
  {
    question: "What File Formats Can I Upload for My AI-Generated Artwork on xNFTs?",
    answer: "At xNFTs, we uphold a standard of excellence and innovation in AI-generated art. To curate groundbreaking pieces, artists undergo a selective process. Apply by submitting your portfolio and artistic approach, integrating AI. Our expert team reviews applications, selecting artists pushing digital art boundaries.",
  },
  {
    question: "Why Should I Choose xNFTs for Minting My AI-Generated Art?",
    answer: "",
  },
  {
    question: "Can I Apply to Become an Artist on xNFTs if I'm New to AI Art?",
    answer: "",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#0D0628] text-white px-4 py-8 w-100% pt-8">
        <h2 className="flex justify-center text-center text-2xl md:text-4xl font-bold mb-8 md:text-left">
            Frequently Asked Question
          </h2>
      <div className=" mx-auto flex flex-col md:flex-row items-center gap-10 md:mr-4">
        {/* Left: Image */}
        <div className="w-full md:w-1/2 flex justify-center ">
          <img
            src={animi1}
            alt="FAQ Character"
            className="w-72 md:w-85 flex rounded-full border border-purple-700 mt-8 "
          />
        </div>

        {/* Right: FAQ */}
        <div className="w-full md:w-1/2">
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-[#2C1D52] rounded-lg">
                <button
                  className="w-full flex justify-between items-center p-4 text-left focus:outline-none"
                  onClick={() => toggle(index)}
                >
                  <span className="text-lg font-medium">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="text-purple-400" />
                  ) : (
                    <ChevronDown className="text-purple-400" />
                  )}
                </button>
                {openIndex === index && faq.answer && (
                  <div className="px-4 pb-4 text-sm text-gray-300">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
