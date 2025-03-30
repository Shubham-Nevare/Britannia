import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SnackCards from "./components/SnackCards";
import SnackTriggers from "./components/SnackTriggers.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div className="flex flex-wrap justify-center items-center gap-16 p-6 text-[14px] font-bold font-Gotham">
        <span>India Loves Snacking</span>
        <span className="text-[#BB2A2E]">The Snack Trap</span>
        <span>The Snack Right Program</span>
      </div>

      {/* snack trap */}
      <div className="bg-red-700 text-white p-10 md:p-20 flex items-center w-full">
        <h1 className="font-bold leading-[1] font-Cocogoose">
          <span className="text-[30px] font-extrabold font-Cocogoose pl-12">
            The
          </span>
          <br />
          <span className="text-[75px] font-extrabold font-Cocogoose">
            Snack
          </span>
          <br />
          <span className="text-[75px] font-bold font-Cocogoose pl-20">
            Trap
          </span>
          <span className="text-yellow-400 text-[30px] font-semibold ml-2 font-Cocogoose">
            Why is it
          </span>
          <br />
          <span className="text-yellow-400 text-[50px] font-bold font-Cocogoose pl-20">
            impacting us?
          </span>
        </h1>
      </div>

      {/* snack triggers */}
      <SnackTriggers />

      {/* Button Banner */}
      <div className="flex flex-wrap items-center justify-evenly bg-gray-200 p-10 rounded-lg w-full">
        {/* Left Section - Icon and Text */}
        <div className="flex items-center space-x-4 pl-10">
          <img src="/Images/Rectangle.png" alt="icon" className="w-20 h-25" />
          <span className="text-lg md:text-2xl font-semibold text-black">
            How many of these snack triggers are your jam?
          </span>
        </div>

        {/* Right Section - Buttons */}
        <div className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-3 pt-2">
          <button className="bg-[#A32D2D] text-white px-6 py-2 rounded-full text-lg font-medium">
            All
          </button>
          <button className="bg-[#A32D2D] text-white px-6 py-2 rounded-full text-lg font-medium">
            Few
          </button>
          <button className="bg-[#A32D2D] text-white px-6 py-2 rounded-full text-lg font-medium">
            None
          </button>
        </div>
      </div>

      {/* card section */}
      <SnackCards />
      <Footer />
    </>
  );
}

export default App;
