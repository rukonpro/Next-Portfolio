"use client";
import React from "react";

const PortfoliosSkeleton = () => {
    return (
        <section id="portfolios" className="portfolio-bg py-28 px-5">
            <div className="relative z-10 max-w-[1200px] mx-auto">
                {/* Heading Skeleton */}
                <div className="flex justify-center relative">
                    <div className="w-[55px] h-[55px] bg-gray-700 rounded-full animate-pulse absolute right-28" />
                    <div className="h-8 md:h-12 w-40 bg-gray-700 rounded animate-pulse" />
                </div>

                {/* Description Skeleton */}
                <div className="flex justify-center mt-10 pb-10">
                    <div className="max-w-4xl space-y-3">
                        <div className="h-4 md:h-5 w-full bg-gray-700 rounded animate-pulse" />
                        <div className="h-4 md:h-5 w-5/6 bg-gray-700 rounded animate-pulse" />
                        <div className="h-4 md:h-5 w-3/4 bg-gray-700 rounded animate-pulse" />
                    </div>
                </div>

                {/* Portfolio Cards Skeleton */}
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5 pb-10">
                    {[...Array(4)].map((_, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-r from-[#0d1247]/30 to-gray-900/30 h-32 md:h-40 flex items-center py-[16px] px-[32px] rounded-2xl animate-pulse relative"
                        >
                            {/* Arrow Icon Skeleton */}
                            <div className="absolute w-11 h-11 bg-gray-700 rounded-full" />

                            {/* Card Content Skeleton */}
                            <div className="grid grid-cols-3 gap-5 items-center w-full">
                                {/* Title Skeleton */}
                                <div className="col-span-1">
                                    <div className="h-6 md:h-10 w-3/4 bg-gray-700 rounded animate-pulse" />
                                </div>
                                {/* Image Skeleton */}
                                <div className="col-span-2">
                                    <div className="h-20 md:h-28 w-full bg-gray-700 rounded-2xl animate-pulse" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Button Skeleton */}
                <div className="flex justify-center">
                    <div className="h-12 w-64 bg-gray-700 rounded-lg animate-pulse" />
                </div>
            </div>
        </section>
    );
};

export default PortfoliosSkeleton;
