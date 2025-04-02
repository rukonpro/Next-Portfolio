"use client";
import React from "react";

const BlogsSkeleton = () => {
    return (
        <section id="blogs" className="relative blogs-bg">
            <div className="px-5 py-28">
                <article className="relative max-w-[1200px] mx-auto z-10 flex-none md:flex justify-around items-center">
                    <div>
                        {/* Heading Skeleton */}
                        <div className="flex justify-center relative">
                            <div className="w-[55px] h-[55px] bg-gray-700 rounded-full animate-pulse absolute right-16 top-2" />
                            <div className="h-8 md:h-12 w-32 bg-gray-700 rounded animate-pulse" />
                        </div>

                        {/* Description Skeleton */}
                        <div className="pt-16 mx-auto text-justify space-y-6">
                            {[...Array(4)].map((_, index) => (
                                <div key={index} className="space-y-3">
                                    <div className="h-4 md:h-5 w-full bg-gray-700 rounded animate-pulse" />
                                    <div className="h-4 md:h-5 w-5/6 bg-gray-700 rounded animate-pulse" />
                                    <div className="h-4 md:h-5 w-3/4 bg-gray-700 rounded animate-pulse" />
                                </div>
                            ))}
                        </div>

                        {/* Blog Cards Skeleton */}
                        <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 gap-y-16 pt-28">
                            {[...Array(4)].map((_, index) => (
                                <div
                                    key={index}
                                    className="h-64 md:h-72 w-full bg-gray-700 rounded-xl animate-pulse"
                                />
                            ))}
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default BlogsSkeleton;
