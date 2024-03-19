"use client"
import React, {useEffect, useState} from 'react';
import { useSpring, animated } from 'react-spring';
import Image from "next/image";
import portfolioData from "@/app/assite/portfollioData/portfollioData";

const Slider = () => {

    const slides = portfolioData?.banner;
    const [currentIndex, setCurrentIndex] = useState(0);

    const slideAnimation = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        reset: true,
    });

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 5000);

        return () => clearInterval(intervalId);
    }, [slides.length]);


    return (
        <div>
            {slides.map((slide, index) => {
                return (
                    <animated.div
                        key={slide.id}
                        style={{
                            display: index === currentIndex ? 'block' : 'none',
                            transition: 'opacity 0.5s, transform 2s',
                        }}
                    >
                        <Image
                            src={slide.content}
                            loading="eager"
                            className=" h-[20em] md:w-[30em] lg:w-[50em] lg:h-[42em]"
                            alt="bannerphoto"
                        />

                    </animated.div>
                )
            })}
        </div>
    );
};


export default Slider;