import axios from "axios";
import getEnvironment from "../getenvironment";
import { useState, useEffect } from "react";

const sliderData = [
  { image: "/ece1.jpeg", label: " " },
  { image: "/ece2.png", label: " " },
  { image: "/ece3.png", label: " " },
  // { image: "/slider2.jpg", label: " " },
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
    <div className="relative w-full h-64 md:h-80 lg:h-full overflow-hidden rounded-l-lg lg:rounded-l-xl">
      {sliderData.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full bg-center bg-cover transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        />
      ))}
    </div>
  );
}

function AboutDept(props) {
  const confid = props.confid;
  const [apiUrl, setApiUrl] = useState(null);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getEnvironment().then((url) => setApiUrl(url));
  }, []);

  useEffect(() => {
    if (apiUrl) {
      setIsLoading(true);
      axios
        .get(`${apiUrl}/conferencemodule/home/conf/${confid}`, {
          withCredentials: true,
        })
        .then((res) => {
          console.log(res.data);
          setData(res.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    }
  }, [apiUrl, confid]);

  return (
    <div className="max-w-8xl px-0 sm:px-2 lg:px-12 bg-white text-white mt-6 py-12">
      <div className="flex justify-center mb-6 md:mb-8">
        <h2 className="bg-[#1A1307] text-white text-xl sm:text-l md:text-xl font-semibold rounded-3xl text-center px-6 py-3 sm:px-0 md:px-8 md:py-4">
          About The Department of Electronics and Communication Engineering
        </h2>
      </div>

      <div className="mx-4 sm:mx-6 md:mx-8 lg:mx-12 mb-8 md:mb-12">
        <div className="bg-[#854D0E] border border-yellow-950 rounded-xl shadow-md hover:shadow-lg hover:shadow-yellow-900/30 transition-all duration-300 flex flex-col lg:flex-row">
          {/* Slider Section - Set fixed width on large screens */}
          <div className="lg:w-2/5 h-64 md:h-96 lg:h-auto">
            <Slider />
          </div>
          
          {/* Content Section */}
          <div className="lg:w-3/5 p-5">
            {isLoading ? (
              <div className="animate-pulse space-y-3">
                <div className="h-4 bg-yellow-900 rounded w-3/4"></div>
                <div className="h-4 bg-yellow-900 rounded"></div>
                <div className="h-4 bg-yellow-900 rounded w-5/6"></div>
                <div className="h-4 bg-yellow-900 rounded w-2/3"></div>
              </div>
            ) : (
              <div 
                className="text-sm md:text-base leading-relaxed text-justify text-white"
                dangerouslySetInnerHTML={{
                  __html: data?.about[2]?.description || ""
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutDept;
