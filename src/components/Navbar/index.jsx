import { Disclosure } from "@headlessui/react";
  import {
    Bars3Icon,
    // EnvelopeIcon,
    XMarkIcon,
  } from "@heroicons/react/24/outline";
  // import TopNavInfo from "./TopNavInfo";
  import { Link, useLocation } from "react-router-dom";
  import { useState, useEffect } from "react";
  // import { IoMdHome } from "react-icons/io";

// Theme color variables
const COLOR_NAV_BG = "#1a1307"; // yellow-950
const COLOR_NAV_OPTION_BG = "#fff";
const COLOR_NAV_TEXT = "#a16207"; // amber-900
const COLOR_NAV_TEXT_HOVER = "#854d0e"; // amber-600
const COLOR_NAV_CENTER = "#1c1917"; // amber-950
const COLOR_NAV_BORDER = "#bfa77a";

   const navigationLeft = [
  { name: "Home", href: "/", current: true },
  { name: "Tracks", href: "/tracks", current: false },
  { name: "Abstract Submission", href: "/submission", current: false },
];
const navigationRight = [
  {
    name: "Registration",
    href: "",
    current: false,
    subItems: [
      { name: "Registration Fee", href: "/registrationfee" },
      { name: "Registration Link", href: "/registrationlink" },
    ],
  },
  { name: "Awards", href: "/awards", current: false },
  
  { name: "Accommodation", href: "/accommodation", current: false },
];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  export default function Example() {
  const location = useLocation();

  const [navLeft, setNavLeft] = useState(navigationLeft);
  const [navRight, setNavRight] = useState(navigationRight);

  useEffect(() => {
  const updateCurrent = (navArray) =>
    navArray.map((item) => ({
      ...item,
      current: location.pathname.endsWith(item.href),
      subItems: item.subItems
        ? item.subItems.map((sub) => ({
            ...sub,
            current: location.pathname.endsWith(sub.href),
          }))
        : undefined,
    }));

  setNavLeft(updateCurrent(navigationLeft));
  setNavRight(updateCurrent(navigationRight));
}, [location.pathname]);


    return (
      <div>

      <div
        className="w-full flex items-center justify-between flex-wrap p-1"
        style={{ background: COLOR_NAV_BG, height: "30px" }}
      >

            <div className="flex-1 flex flex-col items-center text-center gap-0 pt-0">
              <p className="lg:text-2xl md:text-xl text-xl font-semibold tracking-wide text-center justify-center text-white">
                
                {/* International Conference on Advanced Materials for Sustainable Development and Technology */}
              </p>
              {/* <p className="lg:text-xl md:text-xl -mt-1 text-xl font-extrabold">
                (AMSDT)-2025| November 7-8, 2025| Hybrid Mode
              </p> */}
              {/* <div>
                <h3 className="text-blue-600 font-medium -mt-1 tracking-wide text-lg">
                  Jointly organized by
                </h3>
                <div className="text-blue-600 list-disc list-inside -mt-1 text-sm sm:text-base">
                  <ul>
                    <li>Dr B R Ambedkar National Institute of Technology Jalandhar, Punjab, India</li>
                    <li>Institute of Nano Science and Technology, Mohali, Punjab, India</li>
                  </ul>
                </div>
              </div> */}
            </div>

          </div>
        <Disclosure as="header" className="bg-white shadow">
          {({ open }) => (
            <>
              <div className="mx-auto">
                <div
                  className="relative px-2 sm:px-4 lg:px-8 flex h-12 justify-between items-center"
                  style={{ background: COLOR_NAV_OPTION_BG, borderColor: COLOR_NAV_BORDER }}
                >
                  <div className="relative z-10 flex items-center lg:hidden ">
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-amber-900 hover:bg-gray-200 hover:text-amber-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-200">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                  {/* <div className="flex items-center font-bold gap-3">
                    <TopNavInfo
                      className="mr-4 lg:mr-0 text-blue-200"
                      icon={<EnvelopeIcon className="h-5 w-5 text-blue-200" />}
                      value="amsdt2025@nitj.ac.in"
                    />
                  </div> */}  
                  <nav
                    className="hidden lg:flex items-center justify-center w-full px-4"
                    aria-label="Global"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 500,
                      background: COLOR_NAV_OPTION_BG
                    }}
                  >
                    {/* Left nav */}
                    <div className="flex items-center justify-center gap-10 max-w-5xl ">
                      <div className="flex space-x-6">
                      {navLeft.map((item) => (
                <div key={item.name} className="relative group">
                  {item.subItems ? (
                    <>
                      <Link
                        to={item.href}
                        className="inline-flex items-center py-2 px-3 text-sm uppercase font-medium transition-colors duration-200"
                        style={{
                          color: COLOR_NAV_TEXT
                        }}
                        aria-current={item.current ? "page" : undefined}
                        onMouseOver={e => (e.currentTarget.style.color = COLOR_NAV_TEXT_HOVER)}
                        onMouseOut={e => (e.currentTarget.style.color = COLOR_NAV_TEXT)}
                      >
                        {item.name}
                        <div className="absolute bottom-0 left-0 w-0 h-0.5"
                          style={{ background: COLOR_NAV_TEXT }}
                        ></div>
                      </Link>
                      <div className="absolute left-0 hidden mt-0.5 w-64 origin-top-left bg-gray-400 border border-[#713F12]/20 rounded-md shadow-lg group-hover:block z-50">
                        <div className="py-1">
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-400 hover:text-amber-900"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      className="inline-flex items-center py-2 px-1 text-sm uppercase font-bold transition-colors duration-200"
                      style={{
                        color: COLOR_NAV_TEXT
                      }}
                      aria-current={item.current ? "page" : undefined}
                      onMouseOver={e => (e.currentTarget.style.color = COLOR_NAV_TEXT_HOVER)}
                      onMouseOut={e => (e.currentTarget.style.color = COLOR_NAV_TEXT)}
                    >
                      {item.name}
                      <div className="absolute bottom-0 left-0 w-0 h-0.5"
                        style={{ background: COLOR_NAV_TEXT }}
                      ></div>
                    </Link>
                  )}
                </div>
              ))}
              </div>
                    </div>

                    {/* Center CIPHER */}
                    <div className="px-10 justify-center items-center">
                      <span
                        className="text-3xl font-bold whitespace-nowrap"
                        style={{ color: COLOR_NAV_CENTER }}
                      >
                        C I P H E R
                      </span>
                    </div>

                    {/* Right nav */}
                    <div className="flex space-x-6">
              {navRight.map((item) => (
                <div key={item.name} className="relative group">
                  {item.subItems ? (
                    <>
                      <Link
                        to={item.href}
                        className="inline-flex items-center py-2 px-3 text-sm uppercase font-bold transition-colors duration-200"
                        style={{
                          color: COLOR_NAV_TEXT
                        }}
                        aria-current={item.current ? "page" : undefined}
                        onMouseOver={e => (e.currentTarget.style.color = COLOR_NAV_TEXT_HOVER)}
                        onMouseOut={e => (e.currentTarget.style.color = COLOR_NAV_TEXT)}
                      >
                        {item.name}
                        <div className="absolute bottom-0 left-0 w-0 h-0.5"
                          style={{ background: COLOR_NAV_BORDER }}
                        ></div>
                      </Link>
                      <div className="absolute left-0 hidden mt-0.5 w-64 origin-top-left bg-white border border-gray-200 rounded-md shadow-lg group-hover:block z-50">
                        <div className="py-1">
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="block px-4 py-2 text-sm text-amber-900 hover:bg-amber-50 hover:text-amber-600"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      className="inline-flex items-center py-2 px-1 text-sm uppercase font-bold transition-colors duration-200"
                      style={{
                        color: COLOR_NAV_TEXT
                      }}
                      aria-current={item.current ? "page" : undefined}
                      onMouseOver={e => (e.currentTarget.style.color = COLOR_NAV_TEXT_HOVER)}
                      onMouseOut={e => (e.currentTarget.style.color = COLOR_NAV_TEXT)}
                    >
                      {item.name}
                      <div className="absolute bottom-0 left-0 w-0 h-0.5"
                        style={{ background: COLOR_NAV_BORDER }}
                      ></div>
                    </Link>
                  )}
                </div>
              ))}
                    </div>
                  </nav>
                </div>
              </div>

                    {/* Mobile navigation */}
      <Disclosure.Panel as="nav" className="lg:hidden bg-white" aria-label="Global">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {[...navLeft, ...navRight].map((item) => (
            <div key={item.href}>
              {item.subItems ? (
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button
                        className={classNames(
                          item.current
                            ? "bg-white text-amber-900"
                            : "text-gray-700 hover:bg-amber-400 hover:text-amber-200",
                          "block w-full rounded-md py-2 px-3 text-base font-medium text-left flex justify-between items-center"
                        )}
                      >
                        <span>{item.name}</span>
                        <svg
                          className={classNames(
                            open ? "rotate-180" : "",
                            "w-5 h-5 text-amber-900"
                          )}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </Disclosure.Button>
                      <Disclosure.Panel className="space-y-1 bg-amber-50">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="block pl-8 pr-3 py-2 text-sm font-medium text-amber-900 hover:bg-amber-50 hover:text-amber-700"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ) : (
                <Link
                  to={item.href}
                  className={classNames(
                    item.current
                      ? "bg-amber-200 text-amber-900"
                      : "text-amber-900 hover:bg-amber-50 hover:text-amber-900",
                    "block w-full rounded-md py-2 px-3 text-base font-medium"
                  )}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      </Disclosure.Panel>
    </>
  )}
</Disclosure>
      </div>
    );
  }
