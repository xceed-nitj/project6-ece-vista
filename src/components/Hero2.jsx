// import { useEffect, useState } from "react";
// // import { motion } from "framer-motion";
// import CountdownBox from "./timer.jsx";

// const sliderImages = [
//   "/slider1.jpg",
//   "/slider2.jpg",
//   // "/slider3.png",
//   "/slider4.jpg",
// ];

// function Hero2() {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
//     }, 3000); // Change every 3 seconds

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <>
//       {/* Banner with background slider */}
//       <div
//         className="relative w-full flex items-center justify-between flex-wrap pt-8 min-h-screen"
//         style={{
//           backgroundImage: `url('${sliderImages[currentSlide]}')`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundRepeat: 'no-repeat',
//           transition: 'background-image 1s ease-in-out'
//         }}
//       >
//         {/* Top and bottom gradient overlay */}
//     <div className="absolute inset-0 w-full h-full z-0">
//           <div className="absolute inset-0 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-300 opacity-30"></div>
//         </div>
//     <img
//           src="nitjlogo.png"
//           alt="AMS"
//           className="hidden sm:block w-36 h-36 object-contain p-4 z-10"
//         />

//         <div className="flex-1 flex flex-col items-center text-center gap-0 z-10">
//           <p className="lg:text-3xl md:text-2xl text-xl font-medium tracking-wide text-center justify-center p-6 text-white">
//             International Conference <br /> on <br /> Advanced Materials for Sustainable Development and Technology
//           </p>
//           <p className="lg:text-xl md:text-xl -mt-5 text-xl font-bold text-white">
//             (AMSDT-2025)
//           </p>
//           <div className="px-4">
//             <h3 className="text-white font-medium tracking-wide text-lg text-center">
//               Jointly organized
//             </h3>
//             <h3 className="text-white font-medium tracking-wide text-lg text-center">
//               by
//             </h3>
//             <ul className="text-white list-disc list-inside text-left text-sm sm:text-base">
//               <li>Dr B R Ambedkar National Institute of Technology Jalandhar, Punjab, India</li>
//               <li>Institute of Nano Science and Technology, Mohali, Punjab, India</li>
//             </ul>
//           </div>
//           <p className="text-sm sm:text-base mt-2 bg-white text-blue-800 border border-blue-500 rounded-md px-4 py-2 font-medium">
//             November 7-8, 2025 &nbsp;|&nbsp; Hybrid Mode
//           </p>
//           <p className="text-sm sm:text-base mt-2 px-4 py-2 font-medium text-white">
//             Venue: Dr B R Ambedkar National Institute of Technology, Jalandhar
//           </p>
//           <div className="flex flex-wrap gap-2 mt-1 justify-center">
//             <a
//               href="https://amsdt2025.com/registrationlink"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-md transition-all"
//             >
//               Register Now
//             </a>
//           </div>
//         </div>

//         <img
//           src="inst.png"
//           alt="INST"
//           className="hidden sm:block w-38 h-38 object-contain p-6 sm:p-8 lg:p-8 z-10"
//         />
//       </div>

//       {/* Main Content Section */}
//       <div className="text-gray-800 p-6 sm:py-10 bg-white pt-[384px]">
//         <div className="flex flex-col items-center text-center gap-4">
//           {/* Countdown timer */}
//           <div className="w-full flex justify-center mt-8">
//             <CountdownBox />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Hero2;

import { useState } from "react";
import Navbar from './Navbar/index';

function Hero2() {
  const [timeLeft] = useState({
    days: 411,
    hours: 20,
    minutes: 17,
    seconds: 45
  });

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setTimeLeft(prevTime => {
  //       if (prevTime.seconds > 0) {
  //         return { ...prevTime, seconds: prevTime.seconds - 1 };
  //       } else if (prevTime.minutes > 0) {
  //         return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 };
  //       } else if (prevTime.hours > 0) {
  //         return { ...prevTime, hours: prevTime.hours - 1, minutes: 59, seconds: 59 };
  //       } else if (prevTime.days > 0) {
  //         return { ...prevTime, days: prevTime.days - 1, hours: 23, minutes: 59, seconds: 59 };
  //       }
  //       return prevTime;
  //     });
  //   }, 1000);

  //   return () => clearInterval(timer);
  // }, []);

  // // Custom animation styles
  // const spinAnimation = {
  //   animation: 'spin 20s linear infinite'
  // };

  // const spinReverseAnimation = {
  //   animation: 'spin 15s linear infinite reverse'
  // };

  // const spinSlowAnimation = {
  //   animation: 'spin 25s linear infinite'
  // };

  // const floatAnimation = (delay) => ({
  //   animation: `float ${3 + delay * 0.5}s ease-in-out infinite`,
  //   animationDelay: `${delay * 0.2}s`
  // });

  return (
    <div className="min-h-screen">
      {/* Background Image */}
      <div 
        style={{
          backgroundImage: 'url("/background.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          maxHeight: '120vh'
        }}
      >
        {/* Navbar inside hero (non-sticky) */}
        <Navbar />
        {/* Main Hero Section */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-16 lg:py-16 relative z-10">
          <div className="flex flex-col items-start">
            {/* Tickets Banner */}
            <div className="inline-block bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium animate-pulse">
              5th- 7th june
            </div>
            
            {/* Main Headline with Animation on the right */}
            <div className="flex items-center gap-6 mt-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight lg:max-w-2xl xl:max-w-3xl">
                International Conference on Electronics, AI and Computing
              </h1>
            </div>
            
            {/* Description and Countdown Timer - Side by Side */}
            <div className="flex flex-col lg:flex-row items-start justify-between w-full mt-6 mb-8">
              {/* Description */}
              <p className="text-lg sm:text-xl text-white leading-relaxed lg:max-w-sm">
                Innovating for a Sustainable and Connected Future
              </p>
              
              {/* Countdown Timer - Positioned much further to the right */}
              <div className="flex gap-4 sm:gap-6 lg:gap-8 lg:ml-20">
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white">{timeLeft.days}</div>
                  <div className="text-sm sm:text-base text-white/80 uppercase tracking-wider mt-1">Days</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white">{timeLeft.hours}</div>
                  <div className="text-sm sm:text-base text-white/80 uppercase tracking-wider mt-1">Hours</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white">{timeLeft.minutes}</div>
                  <div className="text-sm sm:text-base text-white/80 uppercase tracking-wider mt-1">Minutes</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white">{timeLeft.seconds}</div>
                  <div className="text-sm sm:text-base text-white/80 uppercase tracking-wider mt-1">Seconds</div>
                </div>
              </div>
            </div>
            
            {/* Get Tickets Button */}
            <button className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg border-2 border-black hover:bg-white hover:text-black transition-all duration-300 flex items-center space-x-2 group hover:shadow-xl">
              <span>Submit Papers</span>
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Hero2;