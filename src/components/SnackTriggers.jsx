import React from "react";

function SnackTriggers() {
  return (
    <div className="bg-yellow-200 p-10 flex flex-col items-center">
      {/* Title Section */}
      <h2 className="text-3xl font-bold text-black items-start">Snack Triggers</h2>
      <p className="text-lg text-gray-800 max-w-lg mt-2">
        Our unhealthy snacking is often out of habit, not hunger. Let’s uncover
        what triggers are really driving those cravings!
      </p>

      {/* Circular Layout Container */}
      <div className="relative w-[500px] h-[500px] mt-10 flex items-center justify-center">
        {/* Center Circle */}
        <div className="absolute text-center text-red-700 text-2xl font-bold rounded-full p-6 h-40 w-40 border-2">
          Sneaky Snack Triggers!
        </div>

        {/* Outer Circles */}
        {/* Circular Layout Container */}
        <div
          className="absolute flex flex-col items-center"
          style={{ top: "50px", left: "30%" }}
        >
          <div className="text-center mb-2">
            <h3 className="text-sm font-bold">The Study Snack Trap¹</h3>
            <p className="text-xs text-gray-700">
              Reading + munching = mindless calories!
            </p>
          </div>
          <div className="w-20 h-20 bg-yellow-500 flex items-center justify-center rounded-full shadow-lg border-4 border-red-700">
            <img
              src="/Images/study-snack.png"
              alt="The Study Snack Trap"
              className="w-12 h-12"
            />
          </div>
        </div>

        {/* Skipped Breakfast */}
        <div
          className="absolute flex flex-row items-center"
          style={{ top: "30%", left: "72%" }}
        >
          <div className="w-20 h-20 bg-yellow-500 flex items-center justify-center rounded-full shadow-lg border-4 border-red-700 mr-4">
            <img
              src="/Images/skipped-breakfast.png"
              alt="Skipped Breakfast"
              className="w-12 h-12"
            />
          </div>
          <div className="text-left">
            <h3 className="text-sm font-bold">Skipped Breakfast¹</h3>
            <p className="text-xs text-gray-700">
              Miss it, and cravings take over! Energy dips turn into snack
              attacks, letting cravings call the shots.
            </p>
          </div>
        </div>

        {/* The Fizzy Fix */}
        <div
          className="absolute flex flex-row items-center"
          style={{ top: "60%", left: "70%" }}
        >
          <div className="w-20 h-20 flex items-center justify-center rounded-full shadow-lg border-4 border-red-700 bg-yellow-500">
            <img
              src="/Images/fizzy-fix.png"
              alt="The Fizzy Fix"
              className="w-12 h-12"
            />
          </div>
          <div>
            <h3 className="text-sm font-bold text-center mt-2">
              The Fizzy Fix¹
            </h3>
            <p className="text-xs text-center text-gray-700">
              Sugary drinks spike cravings, leaving you wanting more.
            </p>
          </div>
        </div>

        {/* Meal Skipping */}
        <div
          className="absolute flex flex-col items-center"
          style={{ bottom: "50px", left: "24%" }}
        >
          <div className="w-20 h-20 bg-yellow-500 flex items-center justify-center rounded-full shadow-lg border-4 border-red-700">
            <img
              src="/Images/meal-skipping.png"
              alt="Meal Skipping"
              className="w-12 h-12 object-contain"
            />
          </div>
          <div className="text-center mt-2">
            <h3 className="text-sm font-bold">Meal Skipping¹</h3>
            <p className="text-xs text-gray-700">
              Skipping meals = energy dips = snacking spree later!
            </p>
          </div>
        </div>

        {/* Sleep & Snack Cravings */}
        <div
          className="absolute flex flex-row items-center"
          style={{ top: "60%", left: "-40%" }}
        >
          <div className="text-left mr-4">
            <h3 className="text-sm font-bold">Sleep & Snack Cravings²</h3>
            <p className="text-xs text-gray-700">
              Less sleep = more cravings = a never-ending cycle!
            </p>
          </div>
          <div className="w-20 h-20 bg-yellow-500 flex items-center justify-center rounded-full shadow-lg border-4 border-red-700">
            <img
              src="/Images/sleep-cravings.png"
              alt="Sleep & Snack Cravings"
              className="w-12 h-12 object-contain"
            />
          </div>
        </div>

        <div
          className="absolute flex flex-row items-center"
          style={{ top: "30%", right: "70%" }}
        >
          <div className="text-left mr-4">
            <h3 className="text-sm font-bold">The No-Schedule Snacking¹</h3>
            <p className="text-xs text-gray-700">Random bites all day</p>
          </div>
          <div className="w-20 h-20 bg-yellow-500 flex items-center justify-center rounded-full shadow-lg border-4 border-red-700">
            <img
              src="/Images/no-schedule.png"
              alt="The No-Schedule Snacking"
              className="w-12 h-12 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SnackTriggers;
