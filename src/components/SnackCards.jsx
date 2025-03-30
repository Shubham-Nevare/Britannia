import React from "react";

const SnackCards = () => {
  const cards = [
    {
      title: "The Snack Triggers",
      image: "/Images/snack_trigger.png",
      bgColor: "bg-red-700",
      buttonColor: "bg-[#BA2C2E]",
    },
    {
      title: "What is it?",
      image: "/Images/salad.png",
      bgColor: "bg-yellow-500",
      buttonColor: "bg-[#93B54A]",
    },
    {
      title: "Why is impacting us?",
      image: "/Images/chips.png",
      bgColor: "bg-yellow-500",
      buttonColor: "bg-[#93B54A]",
    },
    {
      title: "Why Snack Smart?",
      image: "/Images/girl.png",
      bgColor: "bg-yellow-500",
      buttonColor: "bg-[#93B54A]",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-5 p-10 bg-white">
      {cards.map((card, index) => (
        <div
          key={index}
          className="relative w-64 bg-white rounded-3xl overflow-visible border-white pb-10"
        >
          {/* Image with Title Overlay */}
          <div className="relative">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-70 object-cover rounded-t-xl"
            />
            <div
              className="absolute top-3 left-4 right-4 text-white text-3xl font-bold p-2 rounded-md"
              style={{ textShadow: "2px 2px 6px rgba(0, 0, 0, 0.7)" }} // Custom Text Shadow
            >
              {card.title}
            </div>
            {/* Floating Read More Button (Fixed) */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
              <div className="relative">
                {/* Outer Circle (Cookie Border) */}
                <div
                  className={`w-20 h-20 ${card.buttonColor} rounded-full shadow-2xl`}
                >
                  {/* Inner Circle (Dark Center) */}
                  <div
                    className="w-16 h-16 bg-[#230000] rounded-full absolute top-1/2 left-1/2 
  transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center 
  shadow-[6px_6px_10px] cursor-pointer transition-transform hover:scale-95 focus:outline-none "
                  >
                    <button
                      className="text-white text-sm font-semibold text-center focus:outline-none"
                      onClick={() => alert("Read More Clicked!")}
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Reference Section */}
      <div className="w-full text-left mt-10 p-5">
        <h3 className="text-xl font-bold text-black">Reference</h3>
        <p className="text-gray-600 text-sm">
          *A study to assess the snacking behavior and assess their determinants
          in 865 college-going students in Mangaluru.
        </p>
        <p className="text-gray-600 text-sm">
          1.Mithra P, Unnikrishnan B, Thapar R, et al. Snacking Behaviour and
          Its Determinants among College-Going Students in Coastal South India.
          J Nutr Metab. 2018 Apr 18;2018:6785741
        </p>
        <p className="text-gray-600 text-sm">
          2.Roy S, Ghildiyal A. Effects of diet components on the sleep quality
          of first-year medical students of a medical university of Northern
          India. Indian Journal of Sleep Medicine. 2022 Jan 28;16(4):116-24.
        </p>
      </div>
    </div>
  );
};

export default SnackCards;
