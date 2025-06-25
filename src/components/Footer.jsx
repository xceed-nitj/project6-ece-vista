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

const Footer = () => {
  return (
    <footer className="bg-white relative overflow-hidden border-t border-[#2563eb]/30">
      {/* Enhanced Wave background pattern */}
      
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" 
            fill="#2563eb" 
            fillOpacity="0.1"
          />
          <path 
            d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,149.3C672,149,768,171,864,176C960,181,1056,171,1152,149.3C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" 
            fill="#2563eb" 
            fillOpacity="0.05"
          />
          <path 
            d="M0,32L48,53.3C96,75,192,117,288,122.7C384,128,480,96,576,85.3C672,75,768,85,864,112C960,139,1056,181,1152,186.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" 
            fill="#2563eb" 
            fillOpacity="0.03"
          />
          <path 
            d="M0,224L48,229.3C96,235,192,245,288,240C384,235,480,213,576,202.7C672,192,768,192,864,208C960,224,1056,256,1152,261.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" 
            fill="#2563eb" 
            fillOpacity="0.07"
          />
        </svg>
      </div>

      <div className="container mx-auto relative z-10 px-4 py-16">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
          {/* Contact Information */}
          <div className="lg:w-1/2">
            <h3 className="text-3xl font-bold text-black mb-4">
              Contact Us
            </h3>
            <div className="w-20 h-1 bg-blue-600 mb-4"></div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="inline-block w-1.5 h-1.5 bg-[#2563eb] rounded-full mr-3"></span>
                <span className="text-base">E-mail: amsdt2025@nitj.ac.in</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 bg-[#2563eb] rounded-full mr-3 mt-1.5"></span>
                <span className="text-base">Dr Abhinav Pratap Singh (Organizing Secretary): +91 9915240730</span>
              </li>
               <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 bg-[#2563eb] rounded-full mr-3 mt-1.5"></span>
                <span className="text-base">Dr Shisram Rebari (Organizing Secretary): +91 8054160882</span>
              </li>
              <li className="flex items-center">
                <span className="inline-block w-1.5 h-1.5 bg-[#2563eb] rounded-full mr-3"></span>
                <span className="text-base">Dr Praveen Malik (Chairman cum convener): +91 9888382021</span>
              </li>
            </ul>
          </div>

          {/* Visitors Counter */}
              <img src='https://www.flagcounter.me/fUw/' alt="AMS"/>
        </div>

        <div className="mt-12 pt-8 border-t border-[#2563eb]/20">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <p className="text-xs text-gray-400">
              Developed and Maintained by <a href="https://xceed.nitj.ac.in" target="_blank" rel="noopener noreferrer" className="hover:underline "><span className="text-xs text-gray-400">XCEED NITJ</span></a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
