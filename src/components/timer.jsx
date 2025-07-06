import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

const countdownTargets = {
  submission: new Date('2025-09-10T23:59:59'),
  registration: new Date('2025-09-30T23:59:59'),
  conference: new Date('2025-11-07T09:00:00'),
  acceptance: new Date('2025-09-20T09:00:00'),
};

const getTimeLeft = (targetDate) => {
  const diff = +targetDate - +new Date();
  return {
    days: Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24))),
    hours: Math.max(0, Math.floor((diff / (1000 * 60 * 60)) % 24)),
    minutes: Math.max(0, Math.floor((diff / 1000 / 60) % 60)),
    seconds: Math.max(0, Math.floor((diff / 1000) % 60)),
  };
};

// 3D flip animation for the countdown digits
const CountdownDigit = ({ value, label, color, animate }) => {
  const prevValue = useRef(value);
  const controls = useAnimation();
  
  useEffect(() => {
    if (prevValue.current !== value && animate) {
      controls.start({
        rotateX: [0, -90, 0],
        transition: { duration: 0.6, ease: "easeInOut" },
      });
    }
    prevValue.current = value;
  }, [value, controls, animate]);
  
  return (
    <div className="flex flex-col items-center">
      <motion.div 
        className="h-12 w-12 xs:h-14 xs:w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 rounded-lg sm:rounded-xl perspective-[1000px] relative shadow-lg"
        style={{ transformStyle: "preserve-3d" }}
      >
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-white to-teal-50 rounded-lg sm:rounded-xl border border-teal-100 flex items-center justify-center"
          animate={controls}
          style={{ backfaceVisibility: "hidden" }}
        >
          <span 
            className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-mono font-bold"
            style={{ color: color }}
          >
            {String(value).padStart(2, '0')}
          </span>
        </motion.div>
      </motion.div>
      <span className="text-[10px] xs:text-xs uppercase mt-1 sm:mt-2 font-medium tracking-wider text-teal-800">
        {label}
      </span>
    </div>
  );
};

// 3D Card component for each countdown timer
const CountdownCard = ({ title, time, mainColor, delay, description }) => {
  const [animate, setAnimate] = useState(false);
  
  useEffect(() => {
    // Start digit animations after initial render
    const timer = setTimeout(() => setAnimate(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div 
      className="group"
      initial={{ opacity: 0, y: 50, rotateY: 25 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: delay * 0.2, type: "spring" }}
    >
      <motion.div
        className="rounded-xl sm:rounded-2xl overflow-hidden transform-gpu"
        whileHover={{ scale: 1.03, rotateY: 5, z: 20 }}
        transition={{ duration: 0.4 }}
      >
        {/* Header */}
        <div 
          className="py-2 sm:py-3 px-3 sm:px-5 text-white relative overflow-hidden"
          style={{ backgroundColor: mainColor }}
        >
          {/* Floating particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div 
              key={i}
              className="absolute rounded-full bg-white/20"
              style={{ 
                width: 2 + Math.random() * 4,
                height: 2 + Math.random() * 4,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{ 
                y: [0, -10, 0],
                opacity: [0, 0.8, 0],
              }}
              transition={{ 
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
          
          <h3 className="text-base xs:text-lg font-medium relative">
            {title}
            <motion.span
              className="absolute -bottom-1 left-0 h-0.5 bg-white"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ delay: delay * 0.3 + 0.5, duration: 0.8 }}
            />
          </h3>
        </div>
        
        {/* Body with glass effect */}
        <div className="bg-white/80 backdrop-blur-md border border-teal-100 p-3 xs:p-4 sm:p-6">
          {/* Description */}
          <p className="text-gray-600 text-[10px] xs:text-xs mb-2 sm:mb-4 min-h-[30px] sm:min-h-[40px]">
            {description}
          </p>
          
          {/* Timer digits */}
          <div className="flex justify-center gap-1 xs:gap-2 sm:gap-3">
            <CountdownDigit value={time.days} label="days" color={mainColor} animate={animate} />
            <CountdownDigit value={time.hours} label="hours" color={mainColor} animate={animate} />
            <CountdownDigit value={time.minutes} label="minutes" color={mainColor} animate={animate} />
          </div>
          
          {/* Decorative line */}
          <div className="mt-3 sm:mt-4 h-0.5 sm:h-1 w-full bg-gradient-to-r from-transparent via-teal-200/50 to-transparent" />
          
          {/* Seconds counter */}
          <div className="mt-1 sm:mt-2 flex justify-center">
            <motion.div
              className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-teal-50 text-[10px] xs:text-xs"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <span className="text-teal-700 font-mono">
                {String(time.seconds).padStart(2, '0')}
              </span>
              <span className="text-teal-600 ml-1">
                seconds
              </span>
            </motion.div>
          </div>
        </div>
      </motion.div>
      
      {/* 3D shadow effect */}
      <motion.div
        className="h-2 sm:h-4 mx-4 sm:mx-8 rounded-full bg-teal-900/10 blur-md -mt-1 sm:-mt-2"
        initial={{ opacity: 0.4 }}
        whileHover={{ opacity: 0.7, scale: 1.1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

const CountdownTimer = () => {
  const [times, setTimes] = useState({
    submission: getTimeLeft(countdownTargets.submission),
    registration: getTimeLeft(countdownTargets.registration),
    conference: getTimeLeft(countdownTargets.conference),
    acceptance: getTimeLeft(countdownTargets.acceptance),
  });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  // Update countdown times every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimes({
        submission: getTimeLeft(countdownTargets.submission),
        registration: getTimeLeft(countdownTargets.registration),
        conference: getTimeLeft(countdownTargets.conference),
        acceptance: getTimeLeft(countdownTargets.acceptance),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Track mouse movement for parallax effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left - rect.width / 2,
        y: e.clientY - rect.top - rect.height / 2,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Color schemes for each timer
  const cardData = [
    { 
      title: "Abstract Submission",
      color: "#0d9488", // teal-600
      accentColor: "#14b8a6", // teal-500
      description: "Deadline for submitting your research abstract for review",
      timeData: times.submission,
      index: 0
    },
    { 
      title: "Acceptance Notification",
      color: "#0f766e", // teal-700
      accentColor: "#0d9488", // teal-600
      description: "When authors will be notified of acceptance decisions",
      timeData: times.acceptance,
      index: 1
    },
    { 
      title: "Registration Deadline",
      color: "#115e59", // teal-800
      accentColor: "#0f766e", // teal-700
      description: "Final date to register for the conference",
      timeData: times.registration,
      index: 2
    },
    { 
      title: "Conference Start",
      color: "#134e4a", // teal-900
      accentColor: "#115e59", // teal-800
      description: "Official opening of the conference",
      timeData: times.conference,
      index: 3
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-10 sm:py-12 md:py-16 lg:py-24 overflow-hidden"
    >
      {/* 3D Background Elements */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-teal-50 to-white"
        style={{ 
          perspective: "1000px",
          transformStyle: "preserve-3d"
        }}
      >
        {/* Dynamic Grid */}
        <motion.div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, #0d9488 1px, transparent 1px)",
            backgroundSize: "20px 20px",
            backgroundPosition: "0 0",
            transform: `translateX(${mousePosition.x * 0.02}px) translateY(${mousePosition.y * 0.02}px)`,
          }}
        />
        
        {/* Floating Spheres */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: 30 + Math.random() * 100,
              height: 30 + Math.random() * 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle at center, rgba(20,184,166,0.1), rgba(20,184,166,0.03))`,
              boxShadow: "inset 0 0 50px rgba(255, 255, 255, 0.5)",
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.random() * 20 - 10, 0],
              scale: [1, 1.05, 1],
              opacity: [0.3, 0.4, 0.3],
            }}
            transition={{
              duration: 5 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
        
        {/* Animated Gradient Line */}
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[1px] overflow-hidden">
          <motion.div
            className="h-full w-[200%]"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(20,184,166,0.2), transparent)",
            }}
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>
      </div>

      <div className="container relative mx-auto px-4 z-10">
        {/* Animated Section Title */}
        <motion.div 
          className="text-center mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-teal-900 font-medium relative inline-flex items-center">
              <motion.div
                className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-teal-100 flex items-center justify-center mr-2 sm:mr-3 md:mr-4"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-teal-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </motion.div>
              Important Deadlines
            </h2>
          </motion.div>
          
          <motion.p 
            className="mt-2 sm:mt-3 md:mt-4 text-sm sm:text-base text-teal-700 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Mark your calendar with these critical dates for CIPHER 2026 conference participation
          </motion.p>
          
          {/* Animated Underline */}
          <motion.div 
            className="h-0.5 sm:h-1 w-16 sm:w-20 md:w-24 bg-gradient-to-r from-teal-600 to-teal-400 rounded-full mx-auto mt-2 sm:mt-3 md:mt-4"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "4rem", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>
        
        {/* 3D Countdown Cards */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto"
          style={{ 
            perspective: "2000px",
            transformStyle: "preserve-3d"
          }}
        >
          {cardData.map((card, index) => (
            <CountdownCard
              key={index}
              title={card.title}
              time={card.timeData}
              mainColor={card.color}
              accentColor={card.accentColor}
              delay={index}
              description={card.description}
            />
          ))}
        </div>
        
        {/* Interactive 3D Button */}
        <motion.div
          className="flex justify-center mt-8 sm:mt-10 md:mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.a
            href="/6863b4da7b0acf10390f6b41"
            className="group relative inline-flex items-center justify-center px-5 sm:px-6 md:px-8 py-2 sm:py-3 overflow-hidden font-medium text-teal-600 bg-white border-2 border-teal-600 rounded-lg shadow-md text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-teal-600 rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span className="relative flex items-center text-teal-600 transition-colors duration-500 ease-out group-hover:text-white">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Register Now
            </span>
          </motion.a>
        </motion.div>
      </div>
      
      {/* Custom styling for 3D effects */}
      
    </section>
  );
};

export default CountdownTimer;
