"use client";
import React from "react";

const HeaderSkeleton = () => {
    return (
        <header
            id="home"
            className="headerBg overflow-hidden min-h-screen flex flex-col justify-between"
        >
            {/* Navigation Skeleton */}
            <div className="w-full h-16 bg-gray-800 animate-pulse" />

            {/* Main Content Skeleton */}
            <div className="flex items-center max-w-[1200px] mx-auto px-5 py-24">
                <div className="relative z-10 w-full">
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 items-center">
                        {/* Left Side (Text and Button) */}
                        <div className="space-y-4">
                            <div className="h-6 w-40 bg-gray-700 rounded animate-pulse" /> {/* Hello text */}
                            <div className="h-16 md:h-24 w-3/4 bg-gray-700 rounded animate-pulse" /> {/* Name */}
                            <div className="h-5 md:h-6 w-full bg-gray-700 rounded animate-pulse" /> {/* Developer titles */}
                            <div className="flex space-x-2">
                                <div className="h-8 w-8 bg-gray-700 rounded-full animate-pulse" />
                                <div className="h-8 w-8 bg-gray-700 rounded-full animate-pulse" />
                                <div className="h-8 w-8 bg-gray-700 rounded-full animate-pulse" />
                            </div> {/* FollowUs icons */}
                            <div className="h-10 w-32 bg-gray-700 rounded-full animate-pulse" /> {/* Download CV button */}
                        </div>

                        {/* Right Side (Slider) */}
                        <div className="flex justify-center lg:justify-end">
                            <div className="w-64 h-64 md:w-80 md:h-80 bg-gray-700 rounded-full animate-pulse" /> {/* Slider */}
                        </div>
                    </div>

                    {/* Scrolling Button Skeleton */}
                    <div className="flex justify-center mt-10">
                        <div className="h-12 w-12 bg-gray-700 rounded-full animate-pulse" /> {/* ScrollingButton */}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeaderSkeleton;
