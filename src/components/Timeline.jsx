// src/components/Timeline.jsx

import axios from "axios";
import getEnvironment from "../getenvironment";
import { useState, useEffect, forwardRef } from "react";
import formatDate from "../utility/formatDate";

const Timeline = forwardRef((props, ref) => {
  const { confid } = props;
  const [datesData, setDatesData] = useState([]);
  const [apiUrl, setApiUrl] = useState(null);

  useEffect(() => {
    getEnvironment().then((url) => setApiUrl(url));
  }, []);

  useEffect(() => {
    if (!apiUrl) return;

    axios
      .get(`${apiUrl}/conferencemodule/eventDates/conference/${confid}`, {
        withCredentials: true,
      })
      .then((res) => setDatesData(res.data))
      .catch((err) => console.error(err));
  }, [apiUrl, confid]);

  return (
    <div
      ref={ref}
      className="bg-white container w-full flex flex-col items-center mx-auto px-5 sm:px-10 py-12 min-h-[600px]"
    >
      <div className="w-full max-w-6xl">
        <div className="text-center mb-12">
          <button className="bg-[#1A1307] text-white text-2xl font-semibold rounded-3xl px-6 py-4 justify-center">Timeline</button>
        </div>

        <div className="md:hidden relative py-10 pl-4">
  {/* Vertical Timeline Line - Left-aligned */}
  <div className="absolute left-8 top-0 bottom-0 w-1.5 z-0 bg-gradient-to-b from-[#1a1307] via-[#A16207] to-[#1a1307]" />

  <div className="relative space-y-16">
    {datesData.map((item, idx) => (
      <div key={idx} className="relative flex items-start z-10 pl-16">
        {/* Timeline Dot - Perfectly centered on the line */}
        <div 
          className={`absolute w-6 h-6 rounded-full border-4 border-white shadow-lg z-20 bg-[#1a1307]`}
          style={{ 
            left: '32px', // Matches left-8 (32px)
            top: '50%',
            transform: 'translate(-50%, -50%)' // Centers dot perfectly
          }}
        />

        {/* Event Card - All on the right side */}
        <div className="w-full max-w-xs transition-all duration-300 hover:scale-105 ml-4">
          {/* Event Title Card */}
          <div className="px-4 py-3 rounded-lg shadow-lg mb-2 bg-gradient-to-b from-[#854D0E] to-[#A16207] text-white">
            <h4 className="font-semibold text-sm leading-tight">
              {item.title}
            </h4>
          </div>

          {/* Date Card */}
          <div className="px-4 py-2 rounded-lg shadow-lg bg-[#5C4033] text-[#BFA77A]">
            {!item.extended ? (
              <p className="text-[#FBE4D8] font-bold text-sm">
                {formatDate(item.date)}
              </p>
            ) : (
              <>
                <p className="text-[#FBE4D8] font-bold text-sm">
                  {formatDate(item.newDate)}
                </p>
                <p className="text-[#FBE4D8] font-medium text-sm line-through">
                  {formatDate(item.date)}
                </p>
              </>
            )}
          </div>

          {/* Connector Line - Horizontal to the left */}
          <div 
            className="absolute left-0 top-1/2 h-0.5 bg-white"
            style={{ 
              width: '16px',
              transform: 'translateY(-50%)'
            }}
          />
        </div>
      </div>
    ))}
  </div>
</div>

        {/* Horizontal Timeline (unchanged) */}
        <div className="hidden md:block relative overflow-x-auto pb-40 pt-40">
          <div className="flex items-center justify-between min-w-[800px] relative h-20">
            {/* Horizontal Timeline Bar */}
            <div className="absolute top-1/2 left-0 right-0 h-2 -translate-y-1/2 z-0">
              <div className="w-full h-full bg-gradient-to-r from-[#1a1307] via-[#A16207] to-[#1a1307] rounded-full" />
            </div>

            {/* Timeline Events */}
            {datesData.map((item, idx) => (
              <div key={idx} className="relative flex-1 flex flex-col items-center z-10">
                {/* Event Card - Alternating above/below */}
                <div className={`absolute ${idx % 2 === 0 ? 'bottom-12' : 'top-12'} w-48 transition-all duration-300 hover:scale-105`}>
                  {/* Event Title Card */}
                  <div className="px-4 py-3 rounded-lg shadow-lg text-center mb-2 bg-gradient-to-b from-[#854D0E] to-[#A16207] text-white">
                    <h4 className="font-semibold text-sm leading-tight">
                      {item.title}
                    </h4>
                  </div>

                  {/* Date Card */}
                  <div className="px-4 py-2 rounded-lg shadow-lg text-center bg-[#5C4033] text-[#BFA77A]">
                    {!item.extended ? (
                      <p className="text-[#FBE4D8] font-bold text-sm justify-center">
                        {formatDate(item.date)}
                      </p>
                    ) : (
                      <>
                        <p className="text-[#FBE4D8] font-bold text-sm justify-center">
                          {formatDate(item.newDate)}
                        </p>
                        <p className="text-[#FBE4D8] font-medium text-sm line-through justify-center">
                          {formatDate(item.date)}
                        </p>
                      </>
                    )}
                  </div>

                  {/* Connector Line */}
                  <div className={`absolute left-1/2 -translate-x-1/2 w-0.5 bg-gray-400 ${idx % 2 === 0 ? 'top-full h-6' : 'bottom-full h-6'}`} />
                </div>

                {/* Timeline Dot */}
                <div className={`w-6 h-6 rounded-full border-4 border-white shadow-lg z-20 ${idx % 2 === 0 ? 'bg-[#2B124C]' : 'bg-[#522B5B]'}`} />

                {/* Triangle Pointer */}
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 z-30 ${
                  idx % 2 === 0
                    ? 'border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-[#2B124C]'
                    : 'border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[8px] border-b-[#522B5B]'
                }`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

Timeline.displayName = "Timeline";
export default Timeline;