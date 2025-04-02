"use client";
import React from "react";

const ServicesSkeleton = () => {
    return (
        <section
            id="services"
            className="services-bg py-28 px-3"
        >
            <div className="max-w-[1200px] relative z-10 mx-auto">
                {/* Heading Skeleton */}
                <div className="flex justify-center">
                    <div className="flex items-center relative">
                        <div className="w-[55px] h-[55px] bg-gray-700 rounded-full animate-pulse" />
                        <div className="relative right-10 h-8 md:h-12 w-40 bg-gray-700 rounded animate-pulse" />
                    </div>
                </div>

                {/* Description Skeleton */}
                <div className="flex justify-center px-5 mt-10 pb-10">
                    <div className="max-w-4xl space-y-3">
                        <div className="h-4 md:h-5 w-full bg-gray-700 rounded animate-pulse" />
                        <div className="h-4 md:h-5 w-5/6 bg-gray-700 rounded animate-pulse" />
                    </div>
                </div>

                {/* Services Content Skeleton */}
                <div className="lg:flex flex-none justify-center mt-10">
                    {/* Mobile Image Skeleton (Visible on small screens) */}
                    <div className="block lg:hidden pb-20">
                        <div className="flex justify-center">
                            <div className="w-[244.63px] h-[494.98px] bg-gray-700 rounded-3xl animate-pulse" />
                        </div>
                    </div>

                    {/* Left Column Services (3 Cards) */}
                    <div className="flex flex-col justify-between gap-5">
                        {[...Array(3)].map((_, index) => (
                            <div key={index} className="flex gap-2">
                                <div className="w-[68px] h-[68px] bg-gray-700 rounded-full animate-pulse" />
                                <div className="space-y-3 w-full">
                                    <div className="h-6 md:h-8 w-1/3 bg-gray-700 rounded animate-pulse" />
                                    <div className="h-4 md:h-5 w-full bg-gray-700 rounded animate-pulse" />
                                    <div className="h-4 md:h-5 w-5/6 bg-gray-700 rounded animate-pulse" />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Desktop Image Skeleton (Visible on large screens) */}
                    <div className="lg:block hidden px-3">
                        <div className="w-[244.63px] h-[494.98px] bg-gray-700 rounded-3xl animate-pulse" />
                    </div>

                    {/* Right Column Services (3 Cards) */}
                    <div className="flex flex-col justify-between gap-5">
                        {[...Array(3)].map((_, index) => (
                            <div key={index} className="flex gap-2">
                                <div className="w-[68px] h-[68px] bg-gray-700 rounded-full animate-pulse" />
                                <div className="space-y-3 w-full">
                                    <div className="h-6 md:h-8 w-1/3 bg-gray-700 rounded animate-pulse" />
                                    <div className="h-4 md:h-5 w-full bg-gray-700 rounded animate-pulse" />
                                    <div className="h-4 md:h-5 w-5/6 bg-gray-700 rounded animate-pulse" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSkeleton;
