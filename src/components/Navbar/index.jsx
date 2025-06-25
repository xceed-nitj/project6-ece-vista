  import { Disclosure } from "@headlessui/react";
  import {
    Bars3Icon,
    // EnvelopeIcon,
    XMarkIcon,
  } from "@heroicons/react/24/outline";
  // import TopNavInfo from "./TopNavInfo";
  import { Link, useLocation } from "react-router-dom";
  import { useState, useEffect } from "react";
  import { IoMdHome } from "react-icons/io";

  const navigation = [
    { name: <IoMdHome className="h-5 w-5" />, href: "/", current: true },
    { name: "Tracks", href: "/tracks", current: false },
    { name: "Guidelines", href: "/Guidelines", current: false },
    { name: "Abstract Submission", href: "/submission", current: false },
     {
      name: "Registration",
      href: "",
      current: false,
      subItems: [
        { name: "Registration Fee", href: "/registrationfee" },
        { name: "Registration Link", href: "/registrationlink" },
      ],
    },
    { name: "Publications", href: "/publications", current: false },
    { name: "List of Speakers", href: "/speakers", current: false },
    { name: "Awards", href: "/awards", current: false },
    { name: "Sponsors", href: "/sponsors", current: false },
    {
      name: "Committees",
      href: "",
      current: false,
      subItems: [
        { name: "Organizing Heads", href: "/organizingheads" },
        { name: "Advisory Committee", href: "/advisorycommittee" },
      ],
    },
   
    { name: "Location", href: "/location", current: false },
    { name: "Accommodation", href: "/accommodation", current: false },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  export default function Example() {
    const [currentNavigation, setCurrentNavigation] = useState(navigation);
    const location = useLocation();

    useEffect(() => {
      const updatedNavigation = navigation.map((item) => ({
        ...item,
        current: location.pathname.endsWith(item.href),
      }));
      setCurrentNavigation(updatedNavigation);
    }, [location.pathname]);

    return (
      <div>

      <div className="w-full flex items-center justify-between flex-wrap p-1"
              style={{
                background: 'linear-gradient(to right, #FF9933, #FFFFFF, #138808)',
              }}
          >
            <img src="nitjlogo.png" alt="AMS" className=" hidden sm:block w-36 h-36 item-center object-contain p-4" />

            <div className="flex-1 flex flex-col items-center text-center gap-0 pt-0">
              <p className="lg:text-2xl md:text-xl text-xl font-semibold tracking-wide text-center justify-center">
                International Conference on Advanced Materials for Sustainable Development and Technology
              </p>
              
              <p className="text-center text-xl font-extrabold md:text-xl lg:text-xl">
  (AMSDT)-2025 | November 7–8, 2025 | Hybrid Mode
</p>
              <div>
                <h3 className="text-blue-600 font-medium -mt-1 tracking-wide text-lg">
                  Jointly organized by
                </h3>
                <div className="text-blue-600 list-disc list-inside -mt-1 text-sm sm:text-base">
                  <ul>
                    <li>Dr B R Ambedkar National Institute of Technology Jalandhar, Punjab, India</li>
                    <li>Institute of Nano Science and Technology, Mohali, Punjab, India</li>
                  </ul>
                </div>
              </div>
            </div>

            <img src="inst.png" alt="AMS" className="hidden sm:block w-38 h-38 object-contain p-6 sm:p-8 lg:p-8" />
          </div>
        <Disclosure as="header" className="bg-blue-900 shadow">
          {({ open }) => (
            <>
              <div className="mx-auto">
                <div className="relative px-2 sm:px-4 lg:px-8 flex h-14 justify-between items-center bg-blue-900 border-b border-gray-200">
                  <div className="relative z-10 flex items-center lg:hidden">
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-blue-200 hover:bg-gray-200 hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-200">
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
                  <nav className="hidden lg:flex space-x-1 mx-auto" aria-label="Global">
                    {currentNavigation.map((item) => (
                      <div key={item.name} className="relative group navbar">
                        {item.subItems ? (
                          <>
                            <Link
                              to={item.href}
                              className="inline-flex items-center py-2 px-3 text-sm text-gray-800 uppercase hover:text-blue-200 font-medium transition-colors duration-200"
                              aria-current={item.current ? "page" : undefined}
                            >
                              {item.name}
                              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-200 group-hover:w-full transition-all duration-300"></div>
                            </Link>
                            <div className="absolute left-0 hidden mt-0.5 w-64 origin-top-left bg-blue-900 border border-gray-200 rounded-md shadow-lg group-hover:block z-50">
                              <div className="py-1 ">
                                {item.subItems.map((subItem) => (
                                  <Link
                                    key={subItem.name}
                                    to={subItem.href}
                                    className="block px-4 py-2 text-sm text-white hover:bg-blue-700 hover:text-blue-200"
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
                            className="inline-flex items-center py-2 px-1 text-sm text-gray-800 uppercase hover:text-blue-200 font-medium transition-colors duration-200"
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-200 group-hover:w-full transition-all duration-300"></div>
                          </Link>
                        )}
                      </div>
                    ))}
                  </nav>
                </div>
              </div>

              <Disclosure.Panel as="nav" className="lg:hidden bg-blue-900" aria-label="Global">
                <div className="space-y-1 px-2 pb-3 pt-2">
                  {currentNavigation.map((item) => (
                    <div key={item.name}>
                      {item.subItems ? (
                        <Disclosure>
                          {({ open }) => (
                            <>
                              <Disclosure.Button
                                className={classNames(
                                  item.current
                                    ? "bg-blue-700 text-blue-200"
                                    : "text-gray-700 hover:bg-blue-700 hover:text-blue-200",
                                  "block w-full rounded-md py-2 px-3 text-base font-medium text-left flex justify-between items-center"
                                )}
                              >
                                <span>{item.name}</span>
                                <svg
                                  className={classNames(
                                    open ? "rotate-180" : "",
                                    "w-5 h-5 text-blue-200"
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
                              <Disclosure.Panel className="space-y-1 bg-blue-900">
                                {item.subItems.map((subItem) => (
                                  <Link
                                    key={subItem.name}
                                    to={subItem.href}
                                    className="block pl-8 pr-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-700 hover:text-blue-200"
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
                              ? "bg-blue-700 text-blue-200"
                              : "text-gray-700 hover:bg-blue-700 hover:text-blue-200",
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
