"use client";
import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import portfolioData from "@/app/assite/portfollioData/portfollioData";

const Slider = () => {
    const slides = portfolioData?.banner || [];
    const [currentIndex, setCurrentIndex] = useState(0);
    const slideRefs = useRef([]);

    const animateSlide = (index) => {
        const prevIndex = (index - 1 + slides.length) % slides.length;

        gsap.to(slideRefs.current[prevIndex], {
            opacity: 0,
            scale: 0.8,
            rotation: -5,
            duration: 0.5,
            ease: "power2.out",
            onComplete: () => {
                gsap.set(slideRefs.current[prevIndex], { display: "none" });
            },
        });

        gsap.fromTo(
            slideRefs.current[index],
            { opacity: 0, scale: 0.8, rotation: 5 },
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
    }, [slides.length, currentIndex]);

    return (
        <div className="relative w-full h-[40vh] overflow-hidden">
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
                        sizes="(max-width: 360px) 100vw, (max-width: 768px) 75vw, 50vw"
                        className="object-contain"
                        loading="eager"
                        priority={index === 0}
                    />
                </div>
            ))}
        </div>
    );
};

export default Slider;
