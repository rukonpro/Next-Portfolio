"use client"
import FollowUs from "@/app/components/followUs/followUs";
import Slider from "@/app/components/slider/slider";
import { chewy } from "@/app/utils/fonts/fonts";
import ScrollingButton from "@/app/components/scroolButton/scroolButton";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Navigation from "@/app/components/navigation/navigation";

const Header = () => {
    const headerRef = useRef(null);
    const sliderRef = useRef(null);

    useEffect(() => {
        const header = headerRef.current;
        const slider = sliderRef.current;

        const handleMouseMove = (e) => {
            const rect = header.getBoundingClientRect();
            const x = e.clientX - rect.left; // X position within header
            const y = e.clientY - rect.top;  // Y position within header

            // Calculate center point of header
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            // Calculate movement range (adjust these values for more/less movement)
            const moveX = (x - centerX) / 20; // Divide to reduce movement intensity
            const moveY = (y - centerY) / 20;

            // GSAP animation
            gsap.to(slider, {
                x: moveX,
                y: moveY,
                duration: 0.5, // Smooth transition duration
                ease: "power2.out", // Smooth easing
            });
        };

        const handleMouseLeave = () => {
            // Return to original position when mouse leaves
            gsap.to(slider, {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: "power2.out",
            });
        };

        header.addEventListener("mousemove", handleMouseMove);
        header.addEventListener("mouseleave", handleMouseLeave);

        // Cleanup
        return () => {
            header.removeEventListener("mousemove", handleMouseMove);
            header.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <header
            id="home"
            ref={headerRef}
            // style={{backgroundColor:"rgba(41, 5, 58, 0.7)"}}
            className="relative "
        >
            <Navigation />
            <div className="flex items-center max-w-[1200px] mx-auto px-5 py-24">
                <div ref={sliderRef} className="relative z-10">
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 items-center">
                        <div>
                            <div>
                                <p className="text-xl md:text-4xl font-bold bg-gradient-to-r from-[#816aff] to-[#d066fd] text-transparent bg-clip-text tracking-[5px]">
                                    {"Hello!, I'm"}
                                </p>
                                <h1 ref={sliderRef} className="md:text-8xl text-5xl font-bold pt-2">
                  <span
                      className={`${chewy.className} font-bold bg-gradient-to-br from-[#816aff] to-[#d066fd] text-transparent bg-clip-text tracking-[2px]`}
                  >
                    Rukon Uddin
                  </span>
                                </h1>

                                <div className="md:text-xl text-lg font-bold mt-2 md:tracking-[3px] tracking-[1px] text-[#fccdff] flex">
                                    <p>MERN-stack Developer | React Developer | Javascript Developer</p>
                                </div>

                                <FollowUs position={"left"} />
                                <a
                                    data-aos="fade-right"
                                    data-aos-offset="10"
                                    data-aos-duration="600"
                                    data-aos-easing="ease-in-sine"
                                    href="https://drive.google.com/file/d/1S8dFRWC7f3QH6ZVnGp6miYLwPz8s4coh/view?usp=sharing"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <button
                                        id="downloadcv"
                                        aria-label="Download CV"
                                        className="mt-5 text-center text-white md:text-xl text-base font-bold bg-gradient-to-l from-[#1355b7] to-[#0e0e36] rounded-full active:bg-gradient-to-l hover:shadow-2xl hover:shadow-[#263458] tracking-[1px] px-4 py-2"
                                    >
                    <span className="bg-gradient-to-r from-[#816aff] to-[#d066fd] text-transparent bg-clip-text">
                      Download CV
                    </span>
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className="flex justify-center lg:justify-end">
                            <div >
                                <Slider />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center relative">
                        <ScrollingButton />
                    </div>
                </div>
                <div
                    className="absolute custom-animate-pulse inset-0 m-auto max-w-xs h-[500px] blur-[118px] sm:max-w-md md:max-w-lg"
                    style={{
                        background:
                            "linear-gradient(106.89deg, rgb(136, 0, 213) 15.73%, rgba(113, 14, 233, 0.41) 15.74%, rgba(209, 121, 249, 0.26) 56.49%, rgb(229, 70, 70) 115.91%)",
                    }}
                />
            </div>
        </header>
    );
};

export default Header;
