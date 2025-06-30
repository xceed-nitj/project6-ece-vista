import { useState, useEffect } from "react";

const sliderData = [
    { image: "/img1.jpg", label: " " },
    { image: "/img2.jpg", label: " " },
    { image: "/img3.jpg", label: " " },
    { image: "/nitj.png", label: " " },
];

function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % sliderData.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-64 md:h-80 lg:h-full overflow-hidden lg:rounded-r-xl">
            {sliderData.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 w-full h-full bg-center bg-cover transition-opacity duration-1000 ${
                        index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                    }`}
                    style={{ backgroundImage: `url(${slide.image})` }}
                />
            ))}
        </div>
    );
}

function AboutNITJ() {
    return (
        <div className="bg-white text-white container max-w-8xl mx-auto px-4 sm:px-6 lg:px-20">
            <div className="flex justify-center my-4 md:my-8">
                <button className="bg-[#1A1307] text-white text-lg md:text-xl font-semibold rounded-3xl px-6 py-3 md:px-8 md:py-4">
                    About CIPHER 2026
                </button>
            </div>
            {/*  Temp change to reopen PR */}
            <div className="bg-[#854D0E] border border-yellow-950 rounded-xl shadow-md hover:shadow-lg hover:shadow-yellow-900/30 transition-all duration-300 flex flex-col lg:flex-row mx-auto mb-8 md:mb-12 mt-4 md:mt-8 max-w-7xl">
                {/* Text Content - Takes full width on mobile, 60% on desktop */}
                <div className="p-5 md:p-8 lg:w-3/5">
                    <p className="text-sm md:text-base leading-relaxed">
                        International Conference on International Conference on Intelligent Processing, Hardware, Electronics, and Radio Systems (CIPHER-2026) aims to be a forum for the eminent researchers in the field of Communication, Signal Processing, Biomedical, VLSI Design, Antenna Design, Emerging Technologies, Computer and IT to present their research works, practices and methods, to promote networking and collaboration with peers, and to discuss the state-of-the-art research into Communication Computing and Signal Processing through invited papers from leading experts within India and abroad. CIPHER-2026 being an evolving contemporary multidisciplinary field providing innovative solutions to our real-life social problems, a number of challenging socio-technological concerns has evolved from the massive multidimensional dependence of the society on the Communication Computing and Signal Processing, which has instigated a direct impact on society. This demands innovative solutions to ensure the sustainable coexistence of society and technology. This conference will be beneficial to academia, industry and research community. 
                    </p>
                </div>

                {/* Slider - Takes full width on mobile, 40% on desktop */}
                <div className="lg:w-2/5 ">
                    <Slider />
                </div>
            </div>
        </div>
    );
}

export default AboutNITJ;