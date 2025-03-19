"use client";
import React, { useState, useEffect } from "react";

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const moveCursor = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", moveCursor);
        return () => window.removeEventListener("mousemove", moveCursor);
    }, []);

    return (
        <>
            {/* Global CSS to Hide Default Cursor */}
            <style jsx global>{`
                * {
                    cursor: none !important; /* Hide default cursor everywhere */
                }
            `}</style>

            {/* Custom Cursor Image */}
            <div
                style={{
                    position: "fixed",
                    top: position.y,
                    left: position.x,
                    width: "32px",
                    height: "32px",
                    backgroundImage: "url('/images/space-ship.png')",
                    backgroundSize: "cover",
                    pointerEvents: "none",
                    transform: "translate(-50%, -50%)",
                    zIndex: 9999,
                }}
            />
        </>
    );
};

export default CustomCursor;
