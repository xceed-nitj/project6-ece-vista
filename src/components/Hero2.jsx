import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
import CountdownBox from "./timer.jsx";

const sliderImages = [
  "/slider1.jpg",
  "/slider2.jpg",
  // "/slider3.png",
  "/slider4.jpg",
];

function Hero2() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Preload images
  useEffect(() => {
    const preloadImages = async () => {
      const promises = sliderImages.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = reject;
        });
      });
      await Promise.all(promises);
      setIsLoading(false);
    };
    preloadImages();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Banner with background slider */}
      <div
        className="relative w-full min-h-[calc(100vh-30px)] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10"
        style={{
          backgroundImage: !isLoading ? `url('${sliderImages[currentSlide]}')` : 'none',
          backgroundColor: isLoading ? '#1e4e8c' : 'transparent',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transition: 'background-image 0.5s ease-in-out'
        }}
      >
        {/* Top and bottom gradient overlay */}
        <div className="absolute inset-0 w-full h-full z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-300 opacity-30"></div>
        </div>

        {/* Logo and content container */}
        <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 z-10">
          {/* Left Logo */}
          <img
            src="nitjlogo.png"
            alt="AMS"
            className="hidden lg:block w-28 h-28 xl:w-36 xl:h-36 object-contain"
          />

          {/* Center Content */}
          <div className="flex-1 flex flex-col items-center text-center max-w-3xl">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-medium tracking-wide text-white mb-4 sm:mb-6">
              International Conference <br /> on <br /> Advanced Materials for Sustainable Development and Technology
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4 sm:mb-6">
              (AMSDT-2025)
            </p>
            
            <div className="space-y-3 sm:space-y-4 mb-6">
              <h3 className="text-white font-medium tracking-wide text-base sm:text-lg">
                Jointly organized by
              </h3>
              <ul className="text-white list-disc list-inside text-left text-sm sm:text-base space-y-2">
                <li>Dr B R Ambedkar National Institute of Technology Jalandhar, Punjab, India</li>
                <li>Institute of Nano Science and Technology, Mohali, Punjab, India</li>
              </ul>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-base bg-white text-blue-800 border border-blue-500 rounded-md px-4 py-2 font-medium inline-block">
                November 7-8, 2025 &nbsp;|&nbsp; Hybrid Mode
              </p>
              <p className="text-sm sm:text-base font-medium text-white">
                Venue: Dr B R Ambedkar National Institute of Technology, Jalandhar
              </p>
            </div>

            <div className="mt-6 sm:mt-8">
              <a
                href="https://amsdt2025.com/registrationlink"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-md transition-all transform hover:scale-105"
              >
                Register Now
              </a>
            </div>
          </div>

          {/* Right Logo */}
          <img
            src="inst.png"
            alt="INST"
            className="hidden lg:block w-28 h-28 xl:w-36 xl:h-36 object-contain"
          />
        </div>
      </div>

      {/* Countdown Timer Section */}
      <div className="bg-white py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CountdownBox />
        </div>
      </div>
    </>
  );
}

export default Hero2;
