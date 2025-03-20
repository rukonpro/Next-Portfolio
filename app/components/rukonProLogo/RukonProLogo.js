"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const RukonProLogo = () => {
    const textRef = useRef(null);
    const underlineRef = useRef(null);
    const laptopRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ repeat: -1, repeatDelay: 10 }); // Loop every 10s

        tl.fromTo(
            textRef.current,
            { opacity: 0, scale: 0.5 },
            { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" }
        )
            .fromTo(
                underlineRef.current,
                { opacity: 0, width: 0 },
                { opacity: 1, width: "200px", duration: 1, ease: "power2.out" },
                "-=1"
            )
            .fromTo(
                laptopRef.current,
                { opacity: 0, y: -50, x: 50 },
                { opacity: 1, y: 0, x: 0, duration: 1, ease: "power2.out" },
                "-=1"
            )
            .to(textRef.current, { opacity: 0, scale: 0.5, duration: 1 }, "+=7") // After 7s, fade out
            .to(underlineRef.current, { opacity: 0, width: 0, duration: 1 }, "-=1")
            .to(laptopRef.current, { opacity: 0, y: -50, x: 50, duration: 1 }, "-=1");
    }, []);

    return (
        <div className="rukonproLogo">
            <span ref={textRef} className="rukonproText">RukonPro</span>
            <div ref={underlineRef} className="rukonproUnderline"></div>
            <div ref={laptopRef} className="rukonproLaptop"></div>
        </div>
    );
};

export default RukonProLogo;
