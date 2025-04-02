"use client";
import React from "react";

const CounterSkeleton = () => {
    return (
        <div className="counter-bg relative">
            {/* Background Image Skeleton */}

            {/* Counter Cards Skeleton */}
            <div className="relative z-10 lg:py-72 py-28">
                <div className="w-full max-w-[1200px] mx-auto px-5">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5 items-center justify-center">
                        {/* Three Counter Cards */}
                        {[...Array(3)].map((_, index) => (
                            <div
                                key={index}
                                className="border border-purple-500 rounded-xl p-3 md:p-5 text-center bg-gradient-to-tr from-[#9c69fe]/20 to-[#260b4b] h-full w-full backdrop-blur-sm animate-pulse"
                                style={{
                                    boxShadow: "0 0 5px 0 #a855f7",
                                }}
                            >
                                {/* Number Placeholder */}
                                <div className="h-16 sm:h-20 md:h-24 lg:h-32 w-3/4 mx-auto bg-gray-700 rounded animate-pulse" />
                                {/* Title Placeholder */}
                                <div className="h-6 sm:h-8 md:h-10 w-2/3 mx-auto mt-4 bg-gray-700 rounded animate-pulse" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CounterSkeleton;
