"use client";
import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import portfolioData from "@/app/assite/portfollioData/portfollioData";

const Slider = () => {
    const slides = portfolioData?.banner || [];
    const [currentIndex, setCurrentIndex] = useState(0);
    const slideRefs = useRef([]);

    // Function to animate slides using scale and rotation
    const animateSlide = (index) => {
        const prevIndex = (index - 1 + slides.length) % slides.length;

        // Fade out and scale down the previous slide with a slight rotation
        gsap.to(slideRefs.current[prevIndex], {
            opacity: 0,
            scale: 0.8,
            rotation: -10,
            duration: 0.5,
            ease: "power2.out",
            onComplete: () => {
                gsap.set(slideRefs.current[prevIndex], { display: "none" });
            },
        });

        // Fade in the new slide from a scaled-down and rotated state
        gsap.fromTo(
            slideRefs.current[index],
            { opacity: 0, scale: 0.8, rotation: 10 },
            {
                opacity: 1,
                scale: 1,
                rotation: 0,
                duration: 0.5,
                ease: "power2.out",
                display: "block",
            }
        );
    };

    // Automatic slide change every 5 seconds
    useEffect(() => {
        if (slides.length === 0) return;

        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                const newIndex = (prevIndex + 1) % slides.length;
                animateSlide(newIndex);
                return newIndex;
            });
        }, 5000);

        return () => clearInterval(intervalId);
    }, [slides.length]);

    // Initial setup for slides
    useEffect(() => {
        if (slides.length > 0) {
            slideRefs.current.forEach((el, i) => {
                if (i !== currentIndex) {
                    gsap.set(el, { opacity: 0, scale: 1, rotation: 0, display: "none" });
                } else {
                    gsap.set(el, { opacity: 1, scale: 1, rotation: 0, display: "block" });
                }
            });
        }
    }, [slides.length]);

    // Manual control: Go to next slide
    const nextSlide = () => {
        const newIndex = (currentIndex + 1) % slides.length;
        setCurrentIndex(newIndex);
        animateSlide(newIndex);
    };

    // Manual control: Go to previous slide
    const prevSlide = () => {
        const newIndex = (currentIndex - 1 + slides.length) % slides.length;
        setCurrentIndex(newIndex);
        animateSlide(newIndex);
    };

    return (
        <div className="relative w-full h-[20em] md:h-[30em] lg:h-[42em] overflow-hidden">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    ref={(el) => (slideRefs.current[index] = el)}
                    className="absolute top-0 left-0 w-full h-full"
                >
                    <Image
                        src={slide.content}
                        alt={`Slide ${index + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-contain"
                        loading="eager"
                        priority={index === 0}
                    />
                </div>
            ))}

            {/* Manual control buttons, shown only if there are multiple slides */}
            {/*{slides.length > 1 && (*/}
            {/*    <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-4">*/}
            {/*        <button*/}
            {/*            onClick={prevSlide}*/}
            {/*            aria-label="Previous Slide"*/}
            {/*            className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 transition-colors"*/}
            {/*        >*/}
            {/*            ◀*/}
            {/*        </button>*/}
            {/*        <button*/}
            {/*            onClick={nextSlide}*/}
            {/*            aria-label="Next Slide"*/}
            {/*            className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 transition-colors"*/}
            {/*        >*/}
            {/*            ▶*/}
            {/*        </button>*/}
            {/*    </div>*/}
            {/*)}*/}
        </div>
    );
};

export default Slider;
