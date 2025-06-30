import axios from "axios";
import getEnvironment from "../getenvironment";
import { useState, useEffect } from "react";

const sliderData = [
  { image: "/img1.jpg", label: " " },
  { image: "/img2.jpg", label: " " },
  { image: "/img3.jpg", label: " " },
  { image: "/nitj.png", label: " " },
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
    <div className="relative h-full w-full overflow-hidden">
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

function AboutNITJ(props) {
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
    <div className="bg-white text-white container max-w-8xl mx-auto px-4 sm:px-20 lg:px-8 mt-12">
      <div className="flex justify-center" > <button className="bg-[#BFA77A] text-[#854D0E] text-xl font-semibold rounded-3xl p-4 justify-center">About the Department</button></div>
      <div className="grid grid-rows-1 md:grid-rows-1 gap-8">
        <div className="bg-[#854D0E] border border-yellow-950 rounded-xl shadow-md hover:shadow-lg hover:shadow-yellow-900/30 transition-all duration-300 grid grid-cols-1 lg:grid-cols-5 gap-0 mx-12 mb-12 mt-8">
          
          {isLoading ? (
            <div className="animate-pulse space-y-3 p-5">
              <div className="h-4 bg-yellow-900 rounded w-3/4"></div>
              <div className="h-4 bg-yellow-900 rounded"></div>
              <div className="h-4 bg-yellow-900 rounded w-5/6"></div>
              <div className="h-4 bg-yellow-900 rounded w-2/3"></div>
            </div>
          ) : (
            <div className="text-base mb-4 text-justify text-white lg:col-span-3 p-5">
              {/* <h2 className="text-2xl font-bold text-yellow-400 pl-5 mb-2">About the Department</h2>
              <div className="w-20 h-1 ml-5 bg-yellow-400 mb-5"></div> */}
              {data ? (
                <div
                  className="about-content"
                  dangerouslySetInnerHTML={{
                    __html: data.about[3]?.description || "",
                  }}
                />
              ) : null}
            </div>
          )}

          <div className="lg:col-span-2 flex items-center justify-center">
            <Slider />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutNITJ;
