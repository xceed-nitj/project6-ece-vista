import { useEffect, useState } from "react";
import TextSlider from "./TextSlider";

const sliderData = [
  { image: "/slider1.jpg", label: "NITJ has been ranked in the 2025 THE (Times Higher Education) Asia University Rankings in the ranking band of 351-400" },
  { image: "/slider2.jpg", label: "NITJ Ranked 58th in Engineering Category and Rank-Band: 101-150 in Overall Ranking of NIRF Ranking, 2024" },
  { image: "/slider3.webp", label: "NITJ has been ranked in the 2025 THE (Times Higher Education) Engineering and Technology in the ranking band of 801-1000" },
  { image: "/slider4.jpg", label: "NITJ has been ranked in the THE (Times Higher Education) World University Rankings 2025 in the ranking band of 1001-1200" },
  { image: "/slider5.jpeg", label: "NITJ Placed in ranking band of 661-680 amongst Asian Universities" },
  { image: "/slider6.jpeg", label: "NITJ secured 202nd position amongst Southern Asia Universities in QS Asia University Rankings 2025" },
  { image: "/slider7.jpeg", label: " " },
  { image: "/slider8.jpeg", label: " " },
  { image: "/slider9.jpeg", label: " " },
  { image: "/slider10.jpeg", label: " " },
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
        className="relative w-full min-h-screen"
        style={{
          backgroundImage: `url('${sliderData[currentSlide].image}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          transition: "background-image 1s ease-in-out"
        }}
      >
        {/* You can add a gradient overlay if needed */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-300 opacity-80 z-0"></div> */}
      </div>
      

      <TextSlider />
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
