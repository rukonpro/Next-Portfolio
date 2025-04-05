"use client";
import FollowUs from "@/app/components/followUs/followUs";
import Slider from "@/app/components/slider/slider";
import { chewy } from "@/app/utils/fonts/fonts";
import ScrollingButton from "@/app/components/scroolButton/scroolButton";
import { useEffect, useRef, useCallback } from "react";
import { gsap } from "gsap";



const Header = () => {
    const headerRef = useRef(null);
    const sliderRef = useRef(null);

    // মাউস মুভমেন্ট হ্যান্ডলার
    const handleMouseMove = useCallback((e) => {
        const header = headerRef.current;
        const slider = sliderRef.current;
        if (!header || !slider) return;

        const rect = header.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const moveX = (x - centerX) / 10;
        const moveY = (y - centerY) / 10;

        gsap.to(slider, {
            x: moveX,
            y: moveY,
            duration: 0.5,
            ease: "power2.out",
        });
    }, []);

    // মাউস লিভ হ্যান্ডলার
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
            className="headerBg  overflow-hidden h-screen"
        >
            <div className="flex items-center max-w-[1200px] mx-auto px-5 py-[30px]">
                <div className="relative z-10 w-full">
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 items-center">
                        <div className="space-y-4">
                            <p className="text-xl md:text-4xl font-bold bg-gradient-to-r from-[#816aff] to-[#d066fd] text-transparent bg-clip-text tracking-[5px]">
                                Hello!, I'm
                            </p>
                            <h1 className="md:text-8xl text-5xl font-bold">
                                <span
                                    className={`${chewy.className} bg-gradient-to-br from-[#816aff] to-[#d066fd] text-transparent bg-clip-text tracking-[2px]`}
                                >
                                    Rukon Uddin
                                </span>
                            </h1>
                            <p className="md:text-xl text-lg font-bold md:tracking-[3px] tracking-[1px] text-[#fccdff] flex flex-wrap">
                                MERN-stack | React | React-Native | Javascript | Kotlin Developer
                            </p>
                            <FollowUs position="left" />
                            <a
                                data-aos="fade-right"
                                data-aos-offset="10"
                                data-aos-duration="600"
                                data-aos-easing="ease-in-sine"
                                href="https://drive.google.com/file/d/1S8dFRWC7f3QH6ZVnGp6miYLwPz8s4coh/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block"
                            >
                                <button
                                    id="downloadcv"
                                    aria-label="Download CV"
                                    className="text-white md:text-xl text-base font-bold bg-gradient-to-l from-[#1355b7] to-[#0e0e36] rounded-full hover:shadow-2xl hover:shadow-[#263458] tracking-[1px] px-4 py-2 transition-all duration-300"
                                >
                                    <span className="bg-gradient-to-r from-[#816aff] to-[#d066fd] text-transparent bg-clip-text">
                                        Download CV
                                    </span>
                                </button>
                            </a>
                        </div>
                        <div className="flex justify-center lg:justify-end">
                            <Slider />
                        </div>
                    </div>
                    <div className="flex justify-center mt-8">
                        <div ref={sliderRef}>
                            <ScrollingButton />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
