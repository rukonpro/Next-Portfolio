"use client";

import React from 'react';
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import gsap from "gsap";
const RootLayoutAnimated = ({ children }) => {

    const pathname = usePathname();
    const containerRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            containerRef.current,
            { x: "100%", rotationY: 90, opacity: 0 },
            { x: "0%", rotationY: 0, opacity: 1, duration: 1, ease: "power2.out" }
        );
    }, [pathname]);

    return (
        <div ref={containerRef} className="animatedPage">
            {children}
        </div>
    );
};

export default RootLayoutAnimated;
