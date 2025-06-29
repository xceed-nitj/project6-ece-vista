import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import getEnvironment from "../getenvironment";

const sliderData = [
  {
    image: "/new_slider7.jpg",
    label:
      "NITJ has been ranked in the 2025 THE (Times Higher Education) Asia University Rankings in the ranking band of 351-400",
  },
  {
    image: "/new_slider2.jpg",
    label:
      "NITJ Ranked 58th in Engineering Category and Rank-Band: 101-150 in Overall Ranking of NIRF Ranking, 2024",
  },
  {
    image: "/new_slider1.jpg",
    label:
      "NITJ Placed in ranking band of 661-680 amongst Asian Universities",
  },
];

const COLOR_BG_NEWS = "#f9f6f2";
const COLOR_BORDER_R = "#713F12";
const COLOR_CARD_BG = "#f5eee6";
const COLOR_CARD_BORDER = "#bfa77a";
const COLOR_CARD_TITLE = "#6b4f2c";
const COLOR_CARD_ACCENT = "#bfa77a";
const COLOR_CARD_NEW_BG = "#f6e7c1";
const COLOR_CARD_NEW_TEXT = "#bfa77a";
const COLOR_CARD_DESC = "#6b4f2c";
const COLOR_CARD_LINK = "#bfa77a";
const COLOR_CARD_LINK_HOVER = "#6b4f2c";
const COLOR_LOGO_BG = "#1a1307";

function Slider(props) {
  const confid = props.confid;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [apiUrl, setApiUrl] = useState(null);
  const [newsData, setNewsData] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    getEnvironment().then((url) => setApiUrl(url));
  }, []);

  useEffect(() => {
    if (apiUrl) {
      axios
        .get(`${apiUrl}/conferencemodule/announcements/conf/${confid}`, {
          withCredentials: true,
        })
        .then((res) => {
          const sortedData = res.data.sort((a, b) => a.sequence - b.sequence);
          setNewsData(sortedData);
        })
        .catch((err) => console.log(err));
    }
  }, [apiUrl, confid]);

  useEffect(() => {
    if (!newsData.length) return;
    const container = scrollRef.current;
    let reqId;
    const scrollAmount = 0.5;

    function animate() {
      if (container) {
        container.scrollLeft += scrollAmount;
        if (
          container.scrollLeft + container.offsetWidth >=
          container.scrollWidth
        ) {
          container.scrollLeft = 0;
        }
      }
      reqId = requestAnimationFrame(animate);
    }

    reqId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(reqId);
  }, [newsData]);

  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Top Slider */}
      <div
        className="relative w-full h-[70vh]"
        style={{ position: "relative" }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('${sliderData[currentSlide].image}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 0.95,
            zIndex: 0,
            transition: "opacity 5s ease-in-out",
          }}
        />
        <div className="absolute inset-0 pointer-events-none z-10">
          <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black/60 to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black/60 to-transparent"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/20 to-transparent z-10"></div>
        <div
          className="absolute top-1/2 left-0 transform -translate-y-1/2"
          style={{
            width: "100%",
            display: "flex",
            alignItems: "flex-start",
            pointerEvents: "none",
            zIndex: 20,
          }}
        >
          <div className="pl-8 sm:pl-16 md:pl-24 lg:pl-32 max-w-4xl pointer-events-auto text-left">
            <div className="mb-2">
              <span
                className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl px-4 py-2 rounded shadow-lg block"
                style={{
                  fontFamily: "Playfair",
                  fontWeight: 300,
                  lineHeight: 1.2,
                }}
              >
                International Conference on Intelligent Processing, Hardware,
                Electronics, and Radio Systems
              </span>
            </div>
            <div>
              <span
                className="text-white text-lg sm:text-xl md:text-2xl lg:text-2xl px-4 py-1 rounded block"
                style={{
                  fontFamily: "sans-serif",
                  fontWeight: 300,
                  letterSpacing: "0.01em",
                }}
              >
                April 11–13, 2026 &nbsp;|&nbsp; NIT Jalandhar
              </span>
            </div>
            <div className="mt-6 flex items-center pl-4">
              <a
                href="/registrationlink"
                className="inline-block bg-white hover:bg-amber-100 text-amber-900 text-base font-semibold px-8 py-2 rounded-sm shadow-md transition duration-200 border border-black-700"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 500,
                  letterSpacing: "0.02em",
                  textDecoration: "none",
                }}
              >
                Register
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* News & Logo Section */}
      <div className="grid grid-cols-1 lg:grid-cols-5 w-full h-[10vh]">
        {/* News */}
        <div
          className="lg:col-span-3 p-4 border-r overflow-hidden"
          style={{
            background: COLOR_BG_NEWS,
            borderRightColor: COLOR_BORDER_R,
            borderRightWidth: "1px",
          }}
        >
          <div
            ref={scrollRef}
            className="overflow-x-auto whitespace-nowrap flex flex-row gap-4 h-full no-scrollbar"
          >
            {[...newsData, ...newsData].map(
              (item, idx) =>
                !item.hidden && (
                  <div
                    key={item._id + "_" + idx}
                    className="inline-block align-top rounded-xl shadow-md hover:shadow-lg transition-all duration-200 w-48 h-56 flex flex-col justify-between"
                    style={{
                      background: COLOR_CARD_BG,
                      border: `2px solid ${COLOR_CARD_BORDER}`,
                      minWidth: "12rem",
                      maxWidth: "12rem",
                    }}
                  >
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-24 object-cover rounded-t-xl"
                      />
                    )}
                    <div className="p-3 flex-1 flex flex-col">
                      <div
                        className="text-xs font-semibold mb-1 uppercase"
                        style={{ color: COLOR_CARD_ACCENT }}
                      >
                        {item.date || ""}
                      </div>
                      <div className="flex flex-row justify-between items-start">
                        <span
                          className="text-base font-bold mb-1 line-clamp-2"
                          style={{ color: COLOR_CARD_TITLE }}
                        >
                          {item.title}
                        </span>
                        {item.new && (
                          <span
                            className="ml-2 px-2 py-0.5 rounded text-xs font-semibold"
                            style={{
                              background: COLOR_CARD_NEW_BG,
                              color: COLOR_CARD_NEW_TEXT,
                            }}
                          >
                            NEW
                          </span>
                        )}
                      </div>
                      <div
                        className="text-xs mt-1 flex-1 line-clamp-3"
                        style={{ color: COLOR_CARD_DESC }}
                      >
                        {item.metaDescription}
                      </div>
                    </div>
                    <div className="p-3 pt-0 flex items-end">
                      <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        to={
                          item.link !== ""
                            ? item.link
                            : `/news/${item._id}`
                        }
                        className="font-semibold text-xs flex items-center gap-1"
                        style={{
                          color: COLOR_CARD_LINK,
                        }}
                        onMouseOver={(e) =>
                          (e.currentTarget.style.color = COLOR_CARD_LINK_HOVER)
                        }
                        onMouseOut={(e) =>
                          (e.currentTarget.style.color = COLOR_CARD_LINK)
                        }
                      >
                        Read More <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>

        {/* Logo */}
        <div
  className="lg:col-span-2 p-4 flex items-center justify-center"
  style={{ background: COLOR_LOGO_BG }}
>
<div
  className="lg:col-span-2  flex items-center justify-center"
  style={{ background: COLOR_LOGO_BG }}
>
  <div className="grid grid-cols-5 gap-4 items-center w-full max-w-5xl">
    {/* Logo Column */}
    <div className="flex justify-center col-span-1">
      <img
        src="/nitjlogo.png"
        alt="NITJ Logo"
        className="max-w-20 max-h-16 object-contain"
      />
    </div>

    {/* Text Column spanning columns 2 to 5 */}
    <div className="col-span-4 flex items-center">
      <p
        className="text-white text-sm sm:text-base font-light leading-snug text-left"
        style={{
          fontFamily: "'Montserrat', sans-serif",
          letterSpacing: "0.01em",
        }}
      >
        Organised by the Department of Electronics and Communication Engineering
      </p>
    </div>
  </div>
</div>

</div>

      </div>
    </div>
  );
}

export default Slider;
