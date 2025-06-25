import { useState, useEffect } from "react";
// import Separator from "./common/Separator";
// import Slider from "../components/Slider";
import { Link } from "react-router-dom";
import axios from "axios";
import getEnvironment from "../getenvironment";

function AboutNews(props) {
  const [apiUrl, setApiUrl] = useState(null);
  useEffect(() => {
    // Fetch the environment URL
    getEnvironment().then(url => setApiUrl(url));
  }, []);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const confid = props.confid;
  const [data, setData] = useState(null);

  useEffect(() => {
    if (apiUrl) {
      axios.get(`${apiUrl}/conferencemodule/home/conf/${confid}`, {
        withCredentials: true
      })
        .then(res => {
          setData(res.data);
          console.log(res.data);
        })
        .catch(err => console.log(err));
    }
  }, [apiUrl]);

  const [newsData, setNewsData] = useState([]);
  useEffect(() => {
    if (apiUrl) {
      axios.get(`${apiUrl}/conferencemodule/announcements/conf/${confid}`, {
        withCredentials: true
      })
        .then(res => {
          const sortedData = res.data.sort((a, b) => a.sequence - b.sequence);
          setNewsData(sortedData);
          console.log(sortedData);
        })
        .catch(err => console.log(err));
    }
  }, [apiUrl]);

  return (
    <div className="bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute w-[800px] h-[200px] border border-[#2563eb]/10 rounded-full -right-1/4 top-1/4 transform -translate-y-1/2"></div>
        <div className="absolute w-[500px] h-[200px] border border-[#2563eb]/15 rounded-full -left-1/4 bottom-1/4"></div>
        <div className="absolute w-3 h-3 bg-[#2563eb] rounded-full left-[10%] top-[20%] animate-pulse"></div>
        <div className="absolute w-2 h-2 bg-[#2563eb] rounded-full right-[15%] bottom-[30%] animate-pulse"></div>
      </div>

      <div className="container max-w-7xl mx-auto px-5 sm:px-10 lg:px-8 pt-20 relative z-10 ">
        {/* Main content section - First row */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mb-16">
          {/* About Section - Takes 3/5 of the grid on large screens */}
          <div className=" lg:h-[500px] lg:col-span-3 space-y-8">
            <div className=" lg:h-[500px] bg-white border border-gray-200 rounded-xl p-6 shadow-lg shadow-[#2563eb]/10 backdrop-blur-sm ">
              <h2 className="text-4xl font-sans font-bold text-blue-600 mb-2">
                AMSDT-2025
              </h2>
              <div className="w-20 h-1 bg-blue-600 mb-4"></div>
              <div className="text-base text-gray-700 space-y-4 text-justify">
                {data ? (
                  <div className="min-h-[216px]" dangerouslySetInnerHTML={{ __html: data.about[0].description }} />
                ) : (
                  <div className="min-h-[216px] animate-pulse bg-gray-200/50 rounded"></div>
                )}
              </div>
            </div>

            {/* <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg shadow-[#2563eb]/10 backdrop-blur-sm">
              <h2 className="text-4xl font-sans font-bold text-blue-600 mb-2">
                About Jalandhar
              </h2>
              <div className="w-20 h-1 bg-blue-600 mb-4"></div>
              <div className="text-base text-gray-700 space-y-4 text-justify">
                {data ? (
                  <div dangerouslySetInnerHTML={{ __html: data.about[1].description }} />
                ) : (
                  <div className="h-32 animate-pulse bg-gray-200/50 rounded"></div>
                )}
              </div>
            </div> */}
          </div>

          {/* News Section - Takes 2/5 of the grid on large screens */}
          <div className=" lg:h-[500px] flex-col gap-10 lg:col-span-2 ">
            <div className="bg-white border h-[500px] border-gray-200 rounded-xl p-6 shadow-lg shadow-[#2563eb]/10 backdrop-blur-sm">
              <h2 className="text-4xl font-sans font-bold text-blue-600 mb-2">News</h2>
              <div className="w-20 h-1 bg-blue-600 mb-4"></div>
              
              <div
                id="news"
                className="overflow-auto pr-2 scrollbar-thin scrollbar-thumb-[#2563eb]/30 scrollbar-track-black/20"
              >
                <div
                  className={`space-y-6 ${isMouseOver ? "animate-none cursor-default" : "animate-wiggle"}`}
                  onMouseOver={() => setIsMouseOver(true)}
                  onMouseOut={() => setIsMouseOver(false)}
                >
                  {newsData.map((item) => (
                    !item.hidden && (
                      <Link 
                        key={item._id} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        to={item.link !== "" ? item.link : `/news/${item._id}`}
                        className="block"
                      >
                        <div className="relative p-2 my-4 rounded-xl hover:shadow-md hover:shadow-[#2563eb]/30 bg-white/40 backdrop-blur-sm space-y-2 border border-[#2563eb]/20 transition-all hover:border-[#2563eb]/50">
                          {/* <div className="w-2 h-2  bg-[#2563eb] absolute -left-1 -top-1 rounded-full"></div> */}
                          <div className="flex flex-row justify-between items-start">
                            <p className="text-base font-medium text-blue-600">{item.title}</p>
                            
                            {item.new && (
                              <span className="flex flex-row items-center animate-pulse ml-2">
                                <svg 
                                  xmlns="http://www.w3.org/2000/svg" 
                                  fill="none" 
                                  viewBox="0 0 24 24" 
                                  strokeWidth="2" 
                                  stroke="currentColor" 
                                  className="w-5 stroke-[#2563eb]"
                                >
                                  <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" 
                                  />
                                </svg>
                                <p className="text-blue-600 text-sm ml-1 font-semibold">NEW</p>
                              </span>
                            )}
                          </div>

                          <p className="text-sm font-sans border-solid border-l-2 border-[#2563eb] pl-4 text-gray-700">
                            {item.metaDescription}
                          </p>
                        </div>
                      </Link>
                    )
                  ))}
                </div>
              </div>
            </div>
            
            {/* <Slider confid={confid} /> */}
          </div>
        </div>
        
        {/* Second row - Gallery Section */}
        {/* <div className="grid grid-cols-1 gap-10">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-20 h-20 border border-[#2563eb]/20 rounded-full"></div>
            <div className="absolute -bottom-10 -right-10 w-16 h-16 border border-[#2563eb]/20 rounded-full"></div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg shadow-[#2563eb]/10 backdrop-blur-sm">
              <div className="flex items-center justify-center mb-4">
                <div className="w-2 h-2 bg-[#2563eb] rounded-full mr-3 animate-pulse"></div>
                <h2 className="text-4xl font-sans font-bold text-blue-600">Image Gallery</h2>
                <div className="w-2 h-2 bg-[#2563eb] rounded-full ml-3 animate-pulse"></div>
              </div>
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#2563eb] to-transparent mx-auto mb-8"></div>
              
              {/* Pass the confid prop correctly to the Slider component */}
              {/* <Slider confid={confid} />
            </div>
          </div> */}
        {/* </div> */}
      </div>
    </div>
  );
}

export default AboutNews;
