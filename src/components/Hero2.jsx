import { useEffect, useMemo, useState } from "react";
import Navbar from "./Navbar/index";

// ---------- CONFIG ----------
const sliderImages = ["/blue1.jpg", "/blue2.jpg",  "/blue3.jpg"]; // public/
const SLIDE_MS = 5000; // 5s autoplay
const EVENT_START = new Date("2026-06-05T09:00:00+05:30");

// ---------- HELPERS ----------
function getTimeRemaining(target) {
  const diff = target.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    expired: false,
  };
}

export default function Hero2() {
  const [slide, setSlide] = useState(0);
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(EVENT_START));

  // Preload images
  useEffect(() => {
    sliderImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Autoplay slider
  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % sliderImages.length), SLIDE_MS);
    return () => clearInterval(id);
  }, []);

  // Live countdown
  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeRemaining(EVENT_START)), 1000);
    return () => clearInterval(id);
  }, []);

  const digits = useMemo(
    () => [
      { label: "Days", value: timeLeft.days },
      { label: "Hours", value: timeLeft.hours },
      { label: "Minutes", value: timeLeft.minutes },
      { label: "Seconds", value: timeLeft.seconds },
    ],
    [timeLeft]
  );

  return (
    <>
      {/* 1) Navbar in normal flow so it pushes content down */}
      <Navbar />

      {/* 2) Hero takes full viewport minus navbar height (64/72/88px breakpoints) */}
      <section  className="relative h-screen min-h-[100svh]">
        {/* Background slider (behind content) */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {sliderImages.map((src, idx) => (
            <img
              key={src}
              src={src}
              alt=""
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                idx === slide ? "opacity-100" : "opacity-0"
              }`}
              draggable="false"
            />
          ))}
          {/* Light overlay for readability (keeps images visible) */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/20 to-black/30" />
        </div>

        {/* Centered content */}
        <main className="relative z-10 h-full grid place-items-center px-4 py-6 sm:px-6">
          <div className="flex flex-col items-center text-center gap-2 max-w-5xl">
            {/* Date pill */}
            
   <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5">
              <div className="flex items-center gap-3 sm:gap-5">
                <img
                  src="/nitjlogo.png"
                  alt="NIT Jalandhar"
                  className="h-15 sm:h-9 lg:h-20 w-auto object-contain drop-shadow"
                  loading="lazy"
                />
                {/* <img
                  src="/inst.png"
                  alt="INST Mohali"
                  className="h-10 sm:h-12 lg:h-14 w-auto object-contain drop-shadow"
                  loading="lazy"
                /> */}
              </div>
            </div>
            {/* Headline (BLUE) */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-snug">
            International Conference on International Conference on VLSI, Intelligent System, Signal Processing, Telecommunication and AI   </h1>

            {/* Tagline (BLUE) */}
            {/* <p className="text-sm sm:text-base lg:text-lg text-blue-200/90 leading-relaxed max-w-2xl drop-shadow-[0_1px_6px_rgba(0,0,0,0.35)]">
              Innovating for a Sustainable and Connected Future
            </p> */}

            {/* Logos */}
         
<span className="inline-block bg-pink-800/90 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
              5th – 7th June
            </span>
            {/* Location (BLUE) */}
            <div className="flex items-center justify-center gap-2 text-white drop-shadow">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 11a3 3 0 100-6 3 3 0 000 6z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.5-7.5 11.25-7.5 11.25S4.5 18 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <span className="text-xs sm:text-sm">
                Dr B R Ambedkar National Institute of Technology, Jalandhar 
              </span>
            </div>

            {/* Countdown (pink) */}
            <div className="mt-1" aria-live="polite">
              {timeLeft.expired ? (
                <div className="inline-block bg-pink-600 text-white font-semibold px-3 py-2 rounded-md text-sm">
                  The countdown has ended.
                </div>
              ) : (
                <div className="flex flex-wrap justify-center gap-2 sm:gap-4 lg:gap-5">
                  {digits.map(({ label, value }) => (
                    <div
                      key={label}
                      className="min-w-[64px] sm:min-w-[74px] text-center rounded-xl bg-pink-600/90 text-white px-3 py-1 sm:px-4 sm:py-3 shadow-lg ring-1 ring-white/30 backdrop-blur-[1px]"
                    >
                      <div className="text-xl sm:text-xl lg:text-xl tabular-nums leading-none">
                        {String(value).padStart(2, "0")}
                      </div>
                      <div className="text-[5px] sm:text-xs uppercase tracking-wider mt-1">
                        {label}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* CTA */}
            <button className="mt-2 bg-white text-blue-900 px-5 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base border-2 border-white hover:bg-transparent hover:text-blue-100 transition-all duration-300 flex items-center gap-2 group">
              Submit Papers
              <svg className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>

            {/* Slider dots */}
            <div className="mt-2 flex items-center gap-2">
              {sliderImages.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => setSlide(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    slide === i ? "bg-blue-800 w-8" : "bg-blue-600/60 w-2.5 hover:bg-blue-200/80"
                  }`}
                />
              ))}
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
