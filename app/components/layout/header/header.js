"use client";
import ScrollingButton from "@/app/components/ui/scrollButton/scrollButton";
import React, {useEffect, useRef, useCallback, useState} from "react";
import { gsap } from "gsap";
import Slider from "@/app/components/ui/slider/slider";
import FollowUs from "@/app/components/followUs/followUs";

const Header = () => {
    const headerRef = useRef(null);
    const sliderRef = useRef(null);

    const handleMouseMove = useCallback((e) => {
        const header = headerRef.current;
        const slider = sliderRef.current;
        if (!header || !slider) return;

        const rect = header.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const moveX = (x - centerX) / 15;
        const moveY = (y - centerY) / 15;

        gsap.to(slider, {
            x: moveX,
            y: moveY,
            duration: 0.3,
            ease: "power2.out",
        });
    }, []);

    const handleMouseLeave = useCallback(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        gsap.to(slider, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
        });
    }, []);

    useEffect(() => {
        const header = headerRef.current;
        if (!header) return;

        let animationFrameId;
        const throttledMouseMove = (e) => {
            cancelAnimationFrame(animationFrameId);
            animationFrameId = requestAnimationFrame(() => handleMouseMove(e));
        };

        header.addEventListener("mousemove", throttledMouseMove);
        header.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            header.removeEventListener("mousemove", throttledMouseMove);
            header.removeEventListener("mouseleave", handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, [handleMouseMove, handleMouseLeave]);

    return (
        <header
            id="home"
            ref={headerRef}
            role="banner"
            className="headerBg  h-svh md:max-h-screen lg:h-svh  flex justify-center items-center px-4 py-6 "
        >
            <div className="flex items-center max-w-[1200px] w-full mx-auto">
                <div className="relative z-10 w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                        <div className="space-y-3 md:space-y-2 lg:space-y-3">
                            <p className="text-lg md:text-2xl lg:text-4xl font-bold bg-gradient-to-r from-[#816aff] to-[#d066fd] text-transparent bg-clip-text tracking-[2px] sm:tracking-[5px]">
                                Hello!, I'm
                            </p>
                            <h1 className={`font-chewy bg-gradient-to-br from-[#816aff] to-[#d066fd] text-transparent bg-clip-text tracking-[1px] text-4xl md:text-3xl lg:text-7xl font-bold`}>Rukon Uddin</h1>
                            <p className="text-sm sm:text-base md:text-sm lg:text-xl font-bold tracking-[1px] text-[#fccdff] flex flex-wrap">Full Stack | React | React-Native | Javascript | Kotlin Developer</p>
                            <FollowUs position="left" />
                            <a
                                data-aos="fade-right"
                                href="https://drive.google.com/file/d/1S8dFRWC7f3QH6ZVnGp6miYLwPz8s4coh/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block"
                                suppressHydrationWarning
                            >
                                <button
                                    id="downloadcv"
                                    aria-label="Download CV"
                                    className="text-white text-sm sm:text-base md:text-xl font-bold bg-gradient-to-l from-[#1355b7] to-[#0e0e36] rounded-full hover:shadow-2xl hover:shadow-[#263458] tracking-[1px] px-3 py-1 sm:px-4 sm:py-2 transition-all duration-300"
                                >
                                  <span className="bg-gradient-to-r from-[#816aff] to-[#d066fd] text-transparent bg-clip-text">Download CV</span>
                                </button>
                            </a>
                        </div>
                        <div className="flex justify-center lg:justify-end mt-4 lg:mt-0">
                            <Slider />
                        </div>
                    </div>
                </div>

            </div>
            <div ref={sliderRef} className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10">

                <ScrollingButton />
            </div>
        </header>
    );
};

export default Header;
