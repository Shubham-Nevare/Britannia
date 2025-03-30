import React from "react";

const SnackTriggers = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-yellow-200 p-10">
      <div className="relative w-96 h-96">
        {/* Center Circle */}
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-red-700 text-white text-center flex items-center justify-center rounded-full transform -translate-x-1/2 -translate-y-1/2 font-bold text-lg">
          Sneaky Snack Triggers!
        </div>

        {/* Snack Triggers (Icons + Text) */}
        {[
          { icon: "📖", text: "Reading & munching = mindless calories!", pos: "top-0 left-1/2 -translate-x-1/2" },
          { icon: "🏃‍♂️", text: "Skipped Breakfast → leads to cravings!", pos: "top-1/4 right-0" },
          { icon: "🥤", text: "Sugary drinks leave you wanting more.", pos: "bottom-1/4 right-0" },
          { icon: "🍽️", text: "Skipping meals = snacking spree later!", pos: "bottom-0 left-1/2 -translate-x-1/2" },
          { icon: "😴", text: "Less sleep = more cravings!", pos: "bottom-1/4 left-0" },
          { icon: "⏳", text: "Random snacking all day.", pos: "top-1/4 left-0" }
        ].map((item, index) => (
          <div key={index} className={`absolute ${item.pos} flex flex-col items-center`}>
            {/* Outer Circle */}
            <div className="w-16 h-16 bg-red-700 rounded-full flex items-center justify-center">
              {/* Inner Circle (Icon) */}
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-2xl">
                {item.icon}
              </div>
            </div>
            {/* Text Description */}
            <p className="w-32 text-center text-red-900 text-sm font-bold mt-2">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SnackTriggers;
