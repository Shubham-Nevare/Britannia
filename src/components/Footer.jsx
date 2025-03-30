import React from "react";

function Footer() {
  return (
    <>
      <div className="w-full h-3"></div>
      <footer
        className="relative bg-yellow-400 text-black pt-32 pb-10"
        // style={{
        //   backgroundImage: "url('/Images/wave.png')",
        //   backgroundRepeat: "no-repeat",
        //   backgroundSize: "cover",
        //   backgroundPosition: "top",
        // }}
      >
        <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2">
          <img
            src="/Images/heart-biscuits.png"
            alt="Heart Biscuits"
            className="w-24"
          />
        </div>
        <div className="max-w-6xl mx-auto px-5 flex flex-wrap justify-evenly">
          {/* Products Section */}
          <div>
            <h3 className="font-bold mb-2">PRODUCTS</h3>
            <ul className="space-y-1">
              <li>
                <a href="">Biscuit</a>
              </li>
              <li>
                <a href="">Dairy</a>
              </li>
              <li>
                <a href="">Breads</a>
              </li>
              <li>
                <a href="">Rusk</a>
              </li>
              <li>
                <a href="">Cakes</a>
              </li>
              <li>
                <a href="">Snacking</a>
              </li>
            </ul>
          </div>
          {/* Explore Section */}
          <div>
            <h3 className="font-bold mb-2">EXPLORE</h3>
            <ul className="space-y-1">
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Impact</a>
              </li>
              <li>
                <a href="">Careers</a>
              </li>
              <li>
                <a href="">Investor Center</a>
              </li>
              <li>
                <a href="">News & Media</a>
              </li>
            </ul>
          </div>
          {/* Contact Section */}
          <div>
            <h3 className="font-bold mb-2">CONTACT</h3>
            <ul className="space-y-1">
              <li>
                <a href="">Consumer Feedbac</a>k
              </li>
              <li>
                <a href="">Link to Smart ODR</a>
              </li>
              <li>
                <a href="">Link to Scores 2.0</a>
              </li>
              <li>
                <a href="">Complaints Policy</a>
              </li>
              <li>
                <a href="">Suppliers</a>
              </li>
              <li>
                <a href="">Distributors</a>
              </li>
              <li>
                <a href="">Our Offices</a>
              </li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <p className="font-bold">1-800-4254449</p>
            <p className="font-bold">1-800-30004530</p>
            <a
              href="mailto:feedback@britindia.com"
              className="text-black underline hover:text-blue-600 transition duration-300"
            >
              feedback@britindia.com
            </a>
            {/* Social Icons */}
            <p className="font-bold pt-5">Connect with us</p>
            <div className="flex space-x-3 mt-4">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/Images/linkedin.svg"
                  alt="LinkedIn"
                  className="w-6 hover:w-7 transition duration-300"
                />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/Images/facebook.svg"
                  alt="Facebook"
                  className="w-6 hover:w-7 transition duration-300"
                />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/Images/x.svg" alt="X" className="w-6 hover:w-7 transition duration-300" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/Images/instagram.svg"
                  alt="Instagram"
                  className="w-6 hover:w-7 transition duration-300"
                />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/Images/youtube.svg" alt="YouTube" className="w-6 hover:w-7 transition duration-300" />
              </a>
            </div>
          </div>
        </div>
      </footer>
      {/* Bottom Section */}
      <div className="text-center text-sm border-t p-4 bg-black text-white flex flex-wrap justify-evenly">
        <p>&copy; Copyright 2024 Britannia Industries, All rights reserved.</p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="underline">
            Disclaimers
          </a>
          <a href="#" className="underline">
            Privacy Policy
          </a>
          <a href="#" className="underline">
            Cookie Policy
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
