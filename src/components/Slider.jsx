import { useEffect, useState } from "react";
// import TextSlider from "./TextSlider";

const sliderData = [
  { image: "/new_slider1.jpg", label: "NITJ has been ranked in the 2025 THE (Times Higher Education) Asia University Rankings in the ranking band of 351-400" },
  { image: "/new_slider2.jpg", label: "NITJ Ranked 58th in Engineering Category and Rank-Band: 101-150 in Overall Ranking of NIRF Ranking, 2024" },
  { image: "/new_slider3.jpg", label: "NITJ has been ranked in the 2025 THE (Times Higher Education) Engineering and Technology in the ranking band of 801-1000" },
  { image: "/new_slider4.jpg", label: "NITJ has been ranked in the THE (Times Higher Education) World University Rankings 2025 in the ranking band of 1001-1200" },
  { image: "/new_slider7.jpg", label: "NITJ Placed in ranking band of 661-680 amongst Asian Universities" },
  // { image: "/new_slider6.jpeg", label: "NITJ secured 202nd position amongst Southern Asia Universities in QS Asia University Rankings 2025" },
  // { image: "/slider7.jpeg", label: " " },
  // { image: "/slider8.jpeg", label: " " },
  // { image: "/slider9.jpeg", label: " " },
  // { image: "/slider10.jpeg", label: " " },
];

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Image Slider Section */}
      <div
        className="relative w-full h-60 sm:h-80 md:h-96 lg:h-[500px]"
        style={{
          position: "relative",
        }}
      >
        {/* Background image with slight opacity */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('${sliderData[currentSlide].image}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 0.85,
            zIndex: 0,
          }}
        />
        {/* Black gradient at sides */}
        <div className="absolute inset-0 pointer-events-none z-10">
          <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black/60 to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black/60 to-transparent"></div>
        </div>
        {/* Main gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/20 to-transparent z-10"></div>
        {/* Slider Text Overlay - Center Left of the whole slider */}
        <div
          className="absolute top-1/2 left-0 transform -translate-y-1/2"
          style={{
            width: "100%",
            display: "flex",
            alignItems: "flex-start",
            pointerEvents: "none",
            zIndex: 20,
          }}
        >
          <div className="pl-8 sm:pl-16 md:pl-24 lg:pl-32 max-w-4xl pointer-events-auto text-left">
            {/* Fixed text */}
            <div className="mb-2">
              <span
                className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-4.7xl px-4 py-2 rounded shadow-lg text-left block"
                style={{
                  fontFamily: "Playfair",
                  fontWeight: 300,
                  lineHeight: 1.1,
                }}
              >
                International  Conference  on  Intelligent  Processing,
                <br />
                Hardware , Electronics ,  and  Radio  Systems
              </span>
            </div>
            <div>
              <span
                className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl px-4 py-1 rounded text-left block"
                style={{
                  fontFamily: "sans-serif",
                  fontWeight: 300,
                  letterSpacing: "0.01em",
                }}
              >
                April 11–13, 2026&nbsp; | &nbsp;Nitj
              </span>
            </div>
            {/* Register Button */}
            <div className="mt-6 flex items-center pl-4">
              <a
                href="/registrationlink"
                className="inline-block bg-white hover:bg-amber-100 text-amber-900 text-lg font-semibold px-8 py-3 rounded-md shadow-lg transition duration-200 border border-amber-700"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 500,
                  letterSpacing: "0.02em",
                  textDecoration: "none",
                }}
              >
                Register
              </a>
            </div>
            {/* Slider text */}
            {/* <h1 className="text-white text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold drop-shadow-lg leading-tight">
              {sliderData[currentSlide].label}
            </h1> */}
          </div>
        </div>
      </div>
      

      {/* <TextSlider /> */}
      {/* Title/Label Section Below Image */}
      {/* <div className="w-full bg-blue-800 text-white text-center py-6 px-4">
        <h1 className="text-lg sm:text-xl md:text-2xl font-semibold">
          {sliderData[currentSlide].label}
        </h1>
      </div> */}
    </>
  );
}

export default Slider;
