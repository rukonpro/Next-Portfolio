"use client";
import React from "react";

const AboutSkeleton = () => {
    return (
        <section id="about" className="relative px-5 py-28 about-bg">
            <div className="relative z-10">
                <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 grid-cols-1 gap-10 items-center">
                    {/* Left Side: Image Skeleton */}
                    <div className="h-64 md:h-96 w-full bg-gray-700 rounded-xl animate-pulse" />

                    {/* Right Side: Text Skeleton */}
                    <div className="space-y-6">
                        {/* Heading Skeleton */}
                        <div className="relative">
                            <div className="absolute w-[55px] h-[55px] bg-gray-700 rounded-full animate-pulse" />
                            <div className="absolute top-3 h-8 md:h-12 w-40 bg-gray-700 rounded animate-pulse" />
                        </div>

                        {/* Description Skeleton */}
                        <div className="pt-36 space-y-4">
                            <div className="h-6 w-1/4 bg-gray-700 rounded animate-pulse" /> {/* Hello */}
                            <div className="h-4 md:h-5 w-full bg-gray-700 rounded animate-pulse" />
                            <div className="h-4 md:h-5 w-5/6 bg-gray-700 rounded animate-pulse" />
                            <div className="h-4 md:h-5 w-full bg-gray-700 rounded animate-pulse" />
                            <div className="h-4 md:h-5 w-3/4 bg-gray-700 rounded animate-pulse" />
                            <div className="h-4 md:h-5 w-5/6 bg-gray-700 rounded animate-pulse" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSkeleton;
