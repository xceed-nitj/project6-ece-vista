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
const COLOR_NAV_CENTER = "#5C4033"; // amber-950
const COLOR_NAV_BORDER = "#bfa77a";

 const navigationLeft = [
  { name: "Home", href: "/", current: true },
  { name: "Tracks", href: "/6863a71585f2e21ce21c8d42", current: false },
  { name: "Committees", href: "/6863b4857b0acf10390f6b39", current: false },
];
const navigationRight = [
  {
    name: "Registration",
    href: "",
    current: false,
    subItems: [
      { name: "Registration Fee", href: "/6863b4cd7b0acf10390f6b3e" },
      { name: "Registration Link", href: "/6863b4da7b0acf10390f6b41" },
    ],
  },
  { name: "Location", href: "/6863bcdd9f5bf58c267f065c", current: false },
  
  { name: "Accommodation", href: "/6863b4e57b0acf10390f6b44", current: false },
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

           <div className="flex w-full justify-between items-center text-white px-4 py-0 gap-4 flex-wrap">
  {/* Email */}
  <div className="flex items-center gap-2">
    {/* Email Icon */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 7.5v9a2.25 2.25 0 01-2.25 2.25h-15A2.25 2.25 0 012.25 16.5v-9m19.5 0l-9.75 6.75L2.25 7.5m19.5 0L12 14.25 2.25 7.5"
      />
    </svg>
    <p className="text-base lg:text-sm font-semibold tracking-wide">
      cipher@nitj.ac.in
    </p>
  </div>

  {/* Phone */}
  <div className="flex items-center gap-2">
    {/* Phone Icon */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0-.621.504-1.125 1.125-1.125h3.375c.444 0 .84.255 1.03.654l1.174 2.348a1.125 1.125 0 01-.21 1.248l-1.239 1.238a11.25 11.25 0 005.303 5.303l1.238-1.239a1.125 1.125 0 011.248-.21l2.348 1.174c.399.19.654.586.654 1.03v3.375c0 .621-.504 1.125-1.125 1.125h-.75C10.67 20.25 3.75 13.33 3.75 5.25v-.75z"
      />
    </svg>
    <p className="text-base lg:text-sm font-semibold tracking-wide">
      +91-12345-67890
    </p>
  </div>
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
                        className="text-2xl font-bold whitespace-nowrap"
                        style={{ color: COLOR_NAV_CENTER }}
                      >
                        C I P H E R 2 0 2 6
                      </span>
                    </div>

                    {/* Right nav */}
                    <div className="flex space-x-6">
              {navRight.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={e => {
                    const submenu = e.currentTarget.querySelector('.submenu');
                    if (submenu) submenu.style.display = 'block';
                  }}
                  onMouseLeave={e => {
                    const submenu = e.currentTarget.querySelector('.submenu');
                    if (submenu) submenu.style.display = 'none';
                  }}
                >
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
                      <div
                        className="submenu absolute left-0 mt-0.5 w-64 origin-top-left bg-white border border-gray-200 rounded-md shadow-lg z-50"
                        style={{ display: "none" }}
                        onMouseEnter={e => (e.currentTarget.style.display = 'block')}
                        onMouseLeave={e => (e.currentTarget.style.display = 'none')}
                      >
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
