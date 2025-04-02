"use client";
import React from "react";

const SkillsSkeleton = () => {
    return (
        <section
            id="skills"
            className="skills-bg relative flex justify-center items-center py-28 px-5"
        >
            <div className="max-w-[1200px] relative z-10 mx-auto">
                {/* Heading Skeleton */}
                <div className="flex justify-center">
                    <div className="flex items-center relative">
                        <div className="w-[55px] h-[55px] bg-gray-700 rounded-full animate-pulse" />
                        <div className="relative right-10 h-8 md:h-12 w-32 bg-gray-700 rounded animate-pulse" />
                    </div>
                </div>

                {/* Description Skeleton */}
                <div className="flex justify-center py-10">
                    <div className="max-w-4xl space-y-3">
                        <div className="h-4 md:h-5 w-full bg-gray-700 rounded animate-pulse" />
                        <div className="h-4 md:h-5 w-5/6 bg-gray-700 rounded animate-pulse" />
                        <div className="h-4 md:h-5 w-3/4 bg-gray-700 rounded animate-pulse" />
                    </div>
                </div>

                {/* Skills Grid Skeleton */}
                <div className="mt-16 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 pb-16">
                    {[...Array(4)].map((_, index) => (
                        <div
                            key={index}
                            className="h-32 md:h-40 w-full bg-gray-700 rounded-xl animate-pulse"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSkeleton;
