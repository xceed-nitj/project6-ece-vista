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
        className="h-10 w-10 xs:h-12 xs:w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 rounded-lg sm:rounded-xl perspective-[1000px] relative shadow-lg"
        style={{ transformStyle: "preserve-3d" }}
      >
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-white to-teal-50 rounded-lg sm:rounded-xl border border-teal-100 flex items-center justify-center"
          animate={controls}
          style={{ backfaceVisibility: "hidden" }}
        >
          <span 
            className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-mono font-bold"
            style={{ color: color }}
          >
            {String(value).padStart(2, '0')}
          </span>
        </motion.div>
      </motion.div>
      <span className="text-[8px] xs:text-[10px] sm:text-xs lg:text-sm uppercase mt-1 sm:mt-2 font-medium tracking-wider text-teal-800">
        {label}
      </span>
    </div>
  );
};

// 3D Card component for each countdown timer
const CountdownCard = ({ title, time, mainColor, delay, description }) => {
  const [animate, setAnimate] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div 
      className="group w-full"
      initial={{ opacity: 0, y: 50, rotateY: 25 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: delay * 0.2, type: "spring" }}
    >
      <motion.div
        className="rounded-xl sm:rounded-2xl overflow-hidden transform-gpu h-full"
        whileHover={{ scale: 1.03, rotateY: 5, z: 20 }}
        transition={{ duration: 0.4 }}
      >
        {/* Header */}
        <div 
          className="py-2 sm:py-3 px-3 sm:px-4 md:px-5 text-white relative overflow-hidden"
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
          
          <h3 className="text-sm xs:text-base sm:text-lg font-medium relative">
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
        <div className="bg-white/80 backdrop-blur-md border border-teal-100 p-2 xs:p-3 sm:p-4 md:p-6">
          {/* Description */}
          <p className="text-[8px] xs:text-[10px] sm:text-xs md:text-sm text-gray-600 mb-2 sm:mb-3 md:mb-4 min-h-[24px] xs:min-h-[28px] sm:min-h-[32px] md:min-h-[40px]">
            {description}
          </p>
          
          {/* Timer digits */}
          <div className="flex justify-center gap-1 xs:gap-1.5 sm:gap-2 md:gap-3">
            <CountdownDigit value={time.days} label="days" color={mainColor} animate={animate} />
            <CountdownDigit value={time.hours} label="hours" color={mainColor} animate={animate} />
            <CountdownDigit value={time.minutes} label="minutes" color={mainColor} animate={animate} />
          </div>
          
          {/* Decorative line */}
          <div className="mt-2 xs:mt-3 sm:mt-4 h-0.5 sm:h-1 w-full bg-gradient-to-r from-transparent via-teal-200/50 to-transparent" />
          
          {/* Seconds counter */}
          <div className="mt-1 sm:mt-2 flex justify-center">
            <motion.div
              className="px-1.5 xs:px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-teal-50 text-[8px] xs:text-[10px] sm:text-xs"
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
        className="h-1.5 xs:h-2 sm:h-3 md:h-4 mx-3 xs:mx-4 sm:mx-6 md:mx-8 rounded-full bg-teal-900/10 blur-md -mt-1 sm:-mt-2"
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
      className="relative py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 overflow-hidden bg-gradient-to-b from-teal-50/50 to-white"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full bg-grid-pattern opacity-5" />
      </div>

      {/* Section title */}
      <div className="relative mb-8 sm:mb-12 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-teal-900">
          Important Dates
        </h2>
        <div className="mt-2 sm:mt-3">
          <p className="text-xs sm:text-sm md:text-base text-teal-600 max-w-2xl mx-auto">
            Mark your calendar for these key deadlines and events
          </p>
        </div>
      </div>

      {/* Timer cards grid */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
        {cardData.map((data) => (
          <CountdownCard
            key={data.title}
            title={data.title}
            time={data.timeData}
            mainColor={data.color}
            delay={data.index}
            description={data.description}
          />
        ))}
      </div>
    </section>
  );
};

export default CountdownTimer;
