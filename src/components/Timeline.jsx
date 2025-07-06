// src/components/Timeline.jsx

import axios from "axios";
import getEnvironment from "../getenvironment";
import { useState, useEffect, forwardRef } from "react";
import formatDate from "../utility/formatDate";
import { motion } from "framer-motion";

const Timeline = forwardRef((props, ref) => {
  const { confid } = props;
  const [datesData, setDatesData] = useState([]);
  const [apiUrl, setApiUrl] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

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
    <motion.div
      ref={ref}
      className="relative py-10 sm:py-16 md:py-24 w-full bg-gradient-to-b from-white via-teal-50/30 to-white overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      {/* Floating decorative elements - hide some on mobile */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-teal-100/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-teal-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Intersecting Lines - hide on mobile */}
        <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-teal-200/50 to-transparent"></div>
        <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-teal-200/50 to-transparent"></div>
        
        {/* Particles - hide on mobile */}
        <div className="absolute inset-0 hidden sm:block">
          {[...Array(6)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-teal-300/30 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 7}s ease-in-out infinite`
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Title Section */}
        <motion.div 
          className="text-center mb-8 sm:mb-12 md:mb-20"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-teal-900 mb-2 sm:mb-3 relative inline-block">
              Important Dates
              <motion.div 
                className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-0.5 sm:h-1 bg-gradient-to-r from-teal-500 to-teal-300 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              ></motion.div>
            </h2>
          </motion.div>
          <p className="text-sm sm:text-base text-teal-700 mt-2 sm:mt-4 max-w-xl mx-auto">
            Mark your calendar for these key dates to stay on track with the conference timeline
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Central Line */}
          <motion.div 
            className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 sm:w-1 bg-gradient-to-b from-teal-400 via-teal-600 to-teal-400 transform sm:-translate-x-1/2 z-0"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          >
            <div className="absolute inset-0 opacity-50 blur-sm"></div>
          </motion.div>

          {/* Timeline Items */}
          {datesData.map((item, idx) => (
            <motion.div
              key={idx}
              className={`relative flex items-start sm:items-center mb-8 sm:mb-16 group ${
                idx % 2 === 0 || window.innerWidth < 640 ? "justify-start" : "justify-end"
              }`}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Connecting Line */}
              <motion.div
                className={`absolute top-6 sm:top-1/2 ${
                  idx % 2 === 0 || window.innerWidth < 640 ? "left-4 sm:left-[calc(50%-1px)]" : "left-4 sm:right-[calc(50%-1px)]"
                } h-[2px] bg-gradient-to-r from-teal-400 to-teal-600 sm:-translate-y-1/2 ${
                  idx % 2 === 0 || window.innerWidth < 640 ? "" : "sm:rotate-180"
                } z-10`}
                initial={{ width: 0 }}
                whileInView={{ width: window.innerWidth < 640 ? "30px" : "60px" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.3, delay: 0.2 + idx * 0.1 }}
              ></motion.div>

              {/* Timeline Node */}
              <motion.div
                className="absolute left-4 sm:left-1/2 top-6 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 z-20"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 15,
                  delay: 0.3 + idx * 0.1 
                }}
              >
                <div 
                  className={`w-4 h-4 sm:w-6 sm:h-6 rounded-full border-2 border-white bg-teal-500 shadow-lg shadow-teal-500/30 flex items-center justify-center transition-all duration-300 ${
                    hoveredIndex === idx ? "scale-125 sm:scale-150" : "scale-100"
                  }`}
                >
                  <div className={`w-1 h-1 sm:w-2 sm:h-2 rounded-full bg-white transition-all duration-300 ${
                    hoveredIndex === idx ? "scale-125 sm:scale-150" : "scale-100"
                  }`}></div>
                </div>
              </motion.div>

              {/* Content Card */}
              <motion.div
                className={`ml-12 sm:ml-0 w-[calc(100%-48px)] sm:w-[calc(50%-60px)] ${
                  idx % 2 === 0 || window.innerWidth < 640 ? "sm:pr-6" : "sm:pl-6"
                }`}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div 
                  className={`bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-md sm:shadow-lg border border-teal-100 hover:shadow-xl sm:hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-300`}
                >
                  {/* Card Header */}
                  <div className="bg-gradient-to-r from-teal-600 to-teal-500 py-2 sm:py-3 px-3 sm:px-4">
                    <h3 className="text-white font-medium text-sm sm:text-base md:text-lg">
                      {item.title}
                    </h3>
                  </div>
                  
                  {/* Card Body */}
                  <div className="p-3 sm:p-4 bg-gradient-to-b from-teal-50 to-white">
                    {!item.extended ? (
                      <div className="flex items-center">
                        <div className="mr-2 sm:mr-3 text-teal-500">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <p className="text-teal-800 font-medium text-xs sm:text-sm">
                          {formatDate(item.date)}
                        </p>
                      </div>
                    ) : (
                      <>
                        <div className="flex items-center mb-1 sm:mb-2">
                          <div className="mr-2 sm:mr-3 text-teal-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <p className="text-teal-800 font-medium text-xs sm:text-sm">
                            {formatDate(item.newDate)}
                          </p>
                        </div>
                        <div className="flex items-center pl-6 sm:pl-8">
                          <p className="text-teal-400 text-xs sm:text-sm line-through">
                            {formatDate(item.date)}
                          </p>
                          <span className="ml-1 sm:ml-2 bg-teal-100 text-teal-800 text-[10px] sm:text-xs px-1 sm:px-2 py-0.5 sm:py-1 rounded">
                            Extended
                          </span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Custom Animation Keyframes */}
      
    </motion.div>
  );
});

Timeline.displayName = "Timeline";
export default Timeline;