import axios from "axios";
import getEnvironment from "../getenvironment";
import { useState, useEffect } from "react";

function AboutNITJ(props) {
  const confid = props.confid;
  const [apiUrl, setApiUrl] = useState(null);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch the environment URL
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
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    }
  }, [apiUrl, confid]);

  return (
    <div className="bg-white container max-w-7xl mx-auto px-4 sm:px-10 lg:px-8 py-16 min-h-[280px]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Column 1: About NITJ */}
        <div className="bg-white border border-[#2563eb]/30 rounded-xl p-6 shadow-md hover:shadow-lg hover:shadow-[#2563eb]/20 transition-all duration-300">
          <h2 className="text-2xl font-bold text-[#2563eb] mb-4">About NITJ</h2>
          <div className="w-20 h-1 bg-blue-600 mb-4"></div>
          {isLoading ? (
            <div className="animate-pulse space-y-3">
              <div className="h-4 bg-[#eaf4ff] rounded w-3/4"></div>
              <div className="h-4 bg-[#eaf4ff] rounded"></div>
              <div className="h-4 bg-[#eaf4ff] rounded w-5/6"></div>
              <div className="h-4 bg-[#eaf4ff] rounded w-2/3"></div>
            </div>
          ) : (
            <div className="text-base text-justify text-gray-700">
              {data ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: data.about[2]?.description || "",
                  }}
                />
              ) : null}
            </div>
          )}
        </div>

        {/* Column 2: About INST */}
        <div className="bg-white border border-[#2563eb]/30 rounded-xl p-6 shadow-md hover:shadow-lg hover:shadow-[#2563eb]/20 transition-all duration-300">
          <h2 className="text-2xl font-bold text-[#2563eb] mb-4">About INST</h2>
          <div className="w-20 h-1 bg-blue-600 mb-4"></div>
          {isLoading ? (
            <div className="h-32 animate-pulse bg-gray-200/50 rounded"></div>
          ) : (
            <div className="text-base text-justify text-gray-700">
              {data ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: data.about[1]?.description || "",
                  }}
                />
              ) : null}
            </div>
          )}
        </div>

        {/* Column 3: About the Department */}
        <div className="bg-white border border-[#2563eb]/30 rounded-xl p-6 shadow-md hover:shadow-lg hover:shadow-[#2563eb]/20 transition-all duration-300 relative overflow-hidden">
          <h2 className="text-2xl font-bold text-[#2563eb] mb-4">
            About the Department
          </h2>
          <div className="w-20 h-1 bg-blue-600 mb-4"></div>
          {isLoading ? (
            <div className="animate-pulse space-y-3">
              <div className="h-4 bg-[#eaf4ff] rounded w-3/4"></div>
              <div className="h-4 bg-[#eaf4ff] rounded"></div>
              <div className="h-4 bg-[#eaf4ff] rounded w-5/6"></div>
              <div className="h-4 bg-[#eaf4ff] rounded w-2/3"></div>
            </div>
          ) : (
            <div className="text-base text-justify text-gray-700">
              {data ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: data.about[3]?.description || "",
                  }}
                />
              ) : null}
            </div>
          )}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-[#2563eb]/30"></div>
        </div>
      </div>
    </div>
  );
}

export default AboutNITJ;
