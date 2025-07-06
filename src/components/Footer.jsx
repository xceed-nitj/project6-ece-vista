import { useState } from 'react';
import { motion } from 'framer-motion';

// import { SocialIcon } from "react-social-icons";

// const socialLinks = [
//   {
//     id: 1,
//     url: "https://www.facebook.com/",
//   },
//   {
//     id: 2,
//     url: "https://www.instagram.com/",
//   },
//   {
//     id: 3,
//     url: "https://www.x.com/",
//   },
//   {
//     id: 4,
//     url: "https://www.linkedin.com/",
//   },
//   {
//     id: 5,
//     url: "https://www.github.com/",
//   },
// ];
// const footerLinks = [
//   {
//     id: 1,
//     title: "Services",
//     links: [
//       {
//         id: 1,
//         title: "1on1 Coaching",
//         url: "#",
//       },
//       {
//         id: 2,
//         title: "Company Review",
//         url: "#",
//       },
//       {
//         id: 3,
//         title: "Accounts Review",
//         url: "#",
//       },
//       {
//         id: 4,
//         title: "HR Consulting",
//         url: "#",
//       },
//       {
//         id: 5,
//         title: "SEO Optimisation",
//         url: "#",
//       },
//     ],
//   },
//   {
//     id: 2,
//     title: "Company",
//     links: [
//       {
//         id: 1,
//         title: "About",
//         url: "#",
//       },
//       {
//         id: 2,
//         title: "Meet the Team",
//         url: "#",
//       },
//       {
//         id: 3,
//         title: "Accounts Review",
//         url: "#",
//       },
//     ],
//   },
// ];

// import { FaFlag } from 'react-icons/fa';
// import { 
//   FaFlagUsa, 
//   FaCanada, 
//   FaFlagCheckered 
// } from 'react-icons/fa6';
// import { 
//   SiIndia, 
//   SiGermany, 
//   SiJapan, 
//   SiFrance, 
//   SiUnitedkingdom, 
//   SiChina, 
//   SiRussia 
// } from 'react-icons/si';
// import { Phone } from 'lucide-react';

const Footer = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <footer className="relative bg-gradient-to-b from-white to-teal-50 overflow-hidden">
      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 200" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path 
            d="M0,64L40,80C80,96,160,128,240,138.7C320,149,400,139,480,122.7C560,107,640,85,720,90.7C800,96,880,128,960,144C1040,160,1120,160,1200,138.7C1280,117,1360,75,1400,53.3L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z" 
            fill="#0d9488" 
            fillOpacity="0.1"
          />
          <path 
            d="M0,96L40,101.3C80,107,160,117,240,144C320,171,400,213,480,224C560,235,640,213,720,197.3C800,181,880,171,960,149.3C1040,128,1120,96,1200,85.3C1280,75,1360,85,1400,90.7L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z" 
            fill="#0d9488" 
            fillOpacity="0.05"
          />
        </svg>
      </div>

      {/* Footer content */}
      <div className="container mx-auto px-4 sm:px-6 pt-10 sm:pt-12 md:pt-16 pb-6 sm:pb-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-10 lg:gap-12">
          {/* Logo and about */}
          <div className="w-full md:w-1/2 lg:w-1/3">
            <div className="flex items-center mb-4 sm:mb-6">
              <img src="/nitjlogo.png" alt="NITJ Logo" className="h-10 sm:h-12 mr-3 sm:mr-4" />
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-teal-800">CIPHER 2026</h3>
                <p className="text-xs sm:text-sm text-teal-700">International Conference</p>
              </div>
            </div>
            <p className="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-6">
              CIPHER 2026 is an international conference focused on Intelligent Processing in Hardware, Electronics, and Radio Systems, bringing together experts from academia and industry.
            </p>
            <div className="flex gap-3 sm:gap-4">
              {/* Social icons */}
              {[
                { icon: "ri-linkedin-fill", url: "#" },
                { icon: "ri-twitter-fill", url: "#" },
                { icon: "ri-facebook-fill", url: "#" },
                { icon: "ri-instagram-line", url: "#" }
              ].map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.url}
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 hover:bg-teal-600 hover:text-white transition-colors duration-300"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="w-full md:w-1/2 lg:w-1/3 mt-6 md:mt-0">
            <h3 className="text-base sm:text-lg font-semibold text-teal-800 mb-4 sm:mb-6">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2 sm:gap-4">
              {[
                { name: "Home", href: "/" },
                { name: "Tracks", href: "/6863a71585f2e21ce21c8d42" },
                { name: "Committee", href: "/6863b4857b0acf10390f6b39" },
                { name: "Registration", href: "/6863b4da7b0acf10390f6b41" },
                { name: "Location", href: "/6863bcdd9f5bf58c267f065c" },
                { name: "Accommodation", href: "/6863b4e57b0acf10390f6b44" },
              ].map((link, idx) => (
                <a 
                  key={idx}
                  href={link.href} 
                  className="text-gray-600 hover:text-teal-700 transition-colors duration-300 flex items-center text-xs sm:text-sm"
                >
                  <svg className="h-2.5 w-2.5 sm:h-3 sm:w-3 mr-1.5 sm:mr-2 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact information */}
          <div className="w-full md:w-1/2 lg:w-1/3 mt-6 lg:mt-0">
            <h3 className="text-base sm:text-lg font-semibold text-teal-800 mb-4 sm:mb-6">Contact Us</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start">
                <div className="mr-3 sm:mr-4 text-teal-600">
                  <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-700 font-medium">Email:</p>
                  <a href="mailto:cipher@nitj.ac.in" className="text-xs sm:text-sm text-teal-600 hover:text-teal-800 transition-colors duration-300">cipher@nitj.ac.in</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-3 sm:mr-4 text-teal-600">
                  <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <p className="text-xs sm:text-sm text-gray-700 font-medium">Phone:</p>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-600">Dr. Nitesh Kashyap: +91 9753301930</p>
                    <p className="text-xs sm:text-sm text-gray-600">Dr. Rohit Singh: +91 7087513174</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-3 sm:mr-4 text-teal-600">
                  <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-700 font-medium">Address:</p>
                  <p className="text-xs sm:text-sm text-gray-600">NIT Jalandhar, Punjab, India - 144011</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Flag counter */}
        <div className="flex justify-center mt-8 sm:mt-10 md:mt-12 overflow-hidden">
          <a href="https://info.flagcounter.com/0oJR" className="max-w-full">
            <img src="https://s01.flagcounter.com/count2/0oJR/bg_FFFFFF/txt_000000/border_CCCCCC/columns_2/maxflags_10/viewers_0/labels_0/pageviews_0/flags_0/percent_0/" alt="Flag Counter" className="max-w-full h-auto" />
          </a>
        </div>
        
        {/* Copyright */}
        <motion.div 
          className="mt-8 sm:mt-10 md:mt-12 pt-4 sm:pt-6 border-t border-teal-100 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[10px] xs:text-xs text-gray-600">
            © 2024 CIPHER. All rights reserved. Developed and Maintained by{' '}
            <a 
              href="https://xceed.nitj.ac.in" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-teal-700 hover:text-teal-800 transition-colors duration-300"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              XCEED NITJ
              <motion.span
                className="block h-px bg-teal-700 mt-0.5"
                initial={{ width: 0 }}
                animate={{ width: hovered ? '100%' : 0 }}
                transition={{ duration: 0.3 }}
              />
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
