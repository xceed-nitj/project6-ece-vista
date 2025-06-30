
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
        <div className="relative h-full w-full overflow-hidden">
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
        <div className="bg-white text-white container max-w-8xl mx-auto px-4 sm:px-20 lg:px-8">
            <div className="flex justify-center" > <button className="bg-[#BFA77A] text-[#854D0E] text-xl font-semibold rounded-3xl p-4 justify-center">About the Conference</button></div>
        <div className="grid grid-rows-1 md:grid-rows-1 gap-8">
            <div className="bg-[#854D0E] border border-yellow-950 rounded-xl shadow-md hover:shadow-lg hover:shadow-yellow-900/30 transition-all duration-300 grid grid-cols-1 lg:grid-cols-5 gap-0 mx-12 mb-12 mt-8">

            {/* Text Content (4 columns) */}
            <div className="text-base mb-4 text-justify text-white lg:col-span-3 p-5">
                <p className="p-5 ">
                    International Conference on International Conference on Intelligent Processing, Hardware, Electronics, and Radio Systems (CIPHER-2026) aims to be a forum for the eminent researchers in the field of Communication, Signal Processing, Biomedical, VLSI Design, Antenna Design, Emerging Technologies, Computer and IT to present their research works, practices and methods, to promote networking and collaboration with peers, and to discuss the state-of-the-art research into Communication Computing and Signal Processing through invited papers from leading experts within India and abroad. CIPHER-2026 being an evolving contemporary multidisciplinary field providing innovative solutions to our real-life social problems, a number of challenging socio-technological concerns has evolved from the massive multidimensional dependence of the society on the Communication Computing and Signal Processing, which has instigated a direct impact on society. This demands innovative solutions to ensure the sustainable coexistence of society and technology. This conference will be beneficial to academia, industry and research community. 
                </p>
            </div>

            {/* Slider (1 column) */}
            <div className="lg:col-span-2 flex items-center justify-center">
                <Slider />
            </div>
            </div>
        </div>
        </div>
    );
}

export default AboutNITJ;
