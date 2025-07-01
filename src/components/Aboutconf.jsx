import axios from "axios";
import getEnvironment from "../getenvironment";
import { useState, useEffect } from "react";

const sliderData = [
  { image: "/img1.jpg", label: " " },
  { image: "/slider4.jpg", label: " " },
  { image: "/img3.jpg", label: " " },
  { image: "/slider2.jpg", label: " " },
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
    <div className="relative w-full h-64 md:h-96 lg:h-full overflow-hidden rounded-l-lg">
      {sliderData.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 bg-center bg-cover ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        />
      ))}
    </div>
  );
}

function AboutConf(props) {
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
    <div className="bg-white text-white container max-w-8xl px-4 sm:px-6 lg:px-8 py-14 md:py-12 lg:py-12">
      <div className="flex justify-center my-4 md:my-6 lg:my-8">
        <h2 className="bg-[#1A1307] text-white text-lg md:text-xl lg:text-2xl font-semibold rounded-3xl px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4">
          About CIPHER 2026
        </h2>
      </div>

      <div className="mx-2 sm:mx-4 md:mx-6 lg:mx-8 mb-6 md:mb-8 lg:mb-10 mt-2 md:mt-4 lg:mt-6">
        <div className="bg-[#854D0E] border border-yellow-950 rounded-xl shadow-md hover:shadow-lg hover:shadow-yellow-900/30 transition-all duration-300 flex flex-col lg:flex-row">
          {/* Slider Section */}
          <div className="lg:w-2/5 min-h-[250px] md:min-h-[300px] lg:min-h-[350px]">
            <Slider />
          </div>
          
          {/* Content Section */}
          <div className="lg:w-3/5 p-4 sm:p-5 md:p-6">
            {isLoading ? (
              <div className="animate-pulse space-y-3">
                <div className="h-4 bg-yellow-900 rounded w-3/4"></div>
                <div className="h-4 bg-yellow-900 rounded"></div>
                <div className="h-4 bg-yellow-900 rounded w-5/6"></div>
                <div className="h-4 bg-yellow-900 rounded w-2/3"></div>
              </div>
            ) : (
              <div className="text-sm md:text-base lg:text-lg leading-relaxed text-justify text-white">
                {data && (
                  <div
                    className="about-content"
                    dangerouslySetInnerHTML={{
                      __html: data.about[0]?.description || "",
                    }}
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutConf;