"use client";
import React from "react";

const CertificationsSkeleton = () => {
    return (
        <div className="py-28 certification-bg">
            <div className="relative z-10 max-w-[1200px] mx-auto">
                {/* Heading Skeleton */}
                <div className="flex justify-center">
                    <div className="flex items-center relative">
                        <div className="relative right-10 h-8 md:h-12 w-40 bg-gray-700 rounded animate-pulse" />
                    </div>
                </div>

                {/* Description Skeleton */}
                <div className="flex justify-center">
                    <div className="pt-5 max-w-4xl px-5 space-y-3">
                        <div className="h-4 md:h-5 w-full bg-gray-700 rounded animate-pulse" />
                        <div className="h-4 md:h-5 w-5/6 bg-gray-700 rounded animate-pulse" />
                        <div className="h-4 md:h-5 w-3/4 bg-gray-700 rounded animate-pulse" />
                    </div>
                </div>

                {/* Marquee Certificates Skeleton */}
                <div className="pt-10">
                    <div className="flex gap-7">
                        {[...Array(5)].map((_, index) => (
                            <div
                                key={index}
                                className="h-[200px] w-[250px] lg:w-[500px] lg:h-[400px] bg-gray-700 rounded animate-pulse"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CertificationsSkeleton;
