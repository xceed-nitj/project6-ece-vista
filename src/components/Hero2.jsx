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
        className="relative w-full flex items-center justify-between flex-wrap pt-8 min-h-screen"
        style={{
          backgroundImage: `url('${sliderImages[currentSlide]}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transition: 'background-image 1s ease-in-out'
        }}
      >
        {/* Top and bottom gradient overlay */}
    <div className="absolute inset-0 w-full h-full z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-300 opacity-30"></div>
        </div>
    <img
          src="nitjlogo.png"
          alt="AMS"
          className="hidden sm:block w-36 h-36 object-contain p-4 z-10"
        />

        <div className="flex-1 flex flex-col items-center text-center gap-0 z-10">
          <p className="lg:text-3xl md:text-2xl text-xl font-medium tracking-wide text-center justify-center p-6 text-white">
            International Conference <br /> on <br /> Advanced Materials for Sustainable Development and Technology
          </p>
          <p className="lg:text-xl md:text-xl -mt-5 text-xl font-bold text-white">
            (AMSDT-2025)
          </p>
          <div className="px-4">
            <h3 className="text-white font-medium tracking-wide text-lg text-center">
              Jointly organized
            </h3>
            <h3 className="text-white font-medium tracking-wide text-lg text-center">
              by
            </h3>
            <ul className="text-white list-disc list-inside text-left text-sm sm:text-base">
              <li>Dr B R Ambedkar National Institute of Technology Jalandhar, Punjab, India</li>
              <li>Institute of Nano Science and Technology, Mohali, Punjab, India</li>
            </ul>
          </div>
          <p className="text-sm sm:text-base mt-2 bg-white text-blue-800 border border-blue-500 rounded-md px-4 py-2 font-medium">
            November 7-8, 2025 &nbsp;|&nbsp; Hybrid Mode
          </p>
          <p className="text-sm sm:text-base mt-2 px-4 py-2 font-medium text-white">
            Venue: Dr B R Ambedkar National Institute of Technology, Jalandhar
          </p>
          <div className="flex flex-wrap gap-2 mt-1 justify-center">
            <a
              href="https://amsdt2025.com/registrationlink"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-md transition-all"
            >
              Register Now
            </a>
          </div>
        </div>

        <img
          src="inst.png"
          alt="INST"
          className="hidden sm:block w-38 h-38 object-contain p-6 sm:p-8 lg:p-8 z-10"
        />
      </div>

      {/* Main Content Section */}
      <div className="text-gray-800 p-6 sm:py-10 bg-white pt-[384px]">
        <div className="flex flex-col items-center text-center gap-4">
          {/* Countdown timer */}
          <div className="w-full flex justify-center mt-8">
            <CountdownBox />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero2;
