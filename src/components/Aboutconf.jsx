import axios from "axios";
import getEnvironment from "../getenvironment";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const sliderData = [
  { image: "/img1.jpg", label: "Conference Highlights" },
  { image: "/slider4.jpg", label: "Innovation" },
  { image: "/img3.jpg", label: "Collaboration" },
  { image: "/slider2.jpg", label: "Excellence" },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      when: "beforeChildren",
      staggerChildren: 0.2,
      duration: 0.8
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
};

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 5000); // Increased time for better viewing
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-full w-full overflow-hidden rounded-lg">
      {sliderData.map((slide, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: index === currentSlide ? 1 : 0,
            scale: index === currentSlide ? 1 : 1.05
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <div 
            className="w-full h-full bg-center bg-cover" 
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          {/* Themed overlay for better contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-teal-900/90 via-teal-800/50 to-teal-700/30"></div>
          <motion.div 
            className="absolute bottom-0 left-0 w-full p-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <p className="text-white text-base font-semibold tracking-wide drop-shadow-lg">{slide.label}</p>
          </motion.div>
        </motion.div>
      ))}
      
      {/* Slider indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-20">
        {sliderData.map((_, index) => (
          <motion.button
            key={index}
            whileTap={{ scale: 0.9 }}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? "bg-white w-5" : "bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
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
    <motion.section 
      className="w-full bg-gradient-to-b from-teal-50 to-white py-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div 
          className="mb-8 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 
            className="inline-block text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-800 to-teal-600 relative"
            variants={itemVariants}
          >
            CIPHER 2026
            <span className="block h-1 mt-2 bg-gradient-to-r from-teal-500 to-teal-300 rounded-full"></span>
          </motion.h2>
          <motion.p 
            className="text-teal-700 text-sm mt-3 font-medium tracking-wider"
            variants={itemVariants}
          >
            International Conference on Innovative Practices in High-End Research
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="bg-white rounded-xl overflow-hidden shadow-lg border border-teal-100"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ boxShadow: "0 20px 25px -5px rgba(45, 212, 191, 0.1), 0 10px 10px -5px rgba(45, 212, 191, 0.04)" }}
          transition={{ duration: 0.3 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <motion.div 
              className="h-[350px] lg:h-auto overflow-hidden"
              variants={itemVariants}
            >
              <Slider />
            </motion.div>
            
            <motion.div 
              className="p-6 lg:p-8 flex flex-col justify-center"
              variants={itemVariants}
            >
              <motion.div 
                className="flex items-center mb-4"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className="h-10 w-1.5 bg-gradient-to-b from-teal-600 to-teal-400 rounded-full mr-4"></span>
                <h3 className="text-xl font-bold text-teal-800">About the Conference</h3>
              </motion.div>
              
              {isLoading ? (
                <div className="space-y-4 animate-pulse">
                  <div className="h-3 bg-teal-100 rounded w-3/4"></div>
                  <div className="h-3 bg-teal-100 rounded"></div>
                  <div className="h-3 bg-teal-100 rounded w-5/6"></div>
                  <div className="h-3 bg-teal-100 rounded w-2/3"></div>
                </div>
              ) : (
                <motion.div 
                  className="text-teal-900 text-base font-medium bg-gradient-to-br from-teal-50 to-white p-4 rounded-lg shadow-inner space-y-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  {data ? (
                    <div
                      className="about-content leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html: data.about[0]?.description || "",
                      }}
                    />
                  ) : (
                    <p className="italic text-teal-600">No information available at the moment.</p>
                  )}
                </motion.div>
              )}
              
              <motion.div 
                className="mt-6 flex items-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="h-px flex-grow bg-gradient-to-r from-transparent via-teal-200 to-transparent"></div>
                <motion.div 
                  className="px-4" 
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.6 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </motion.div>
                <div className="h-px flex-grow bg-gradient-to-r from-transparent via-teal-200 to-transparent"></div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default AboutConf;