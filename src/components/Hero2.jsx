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