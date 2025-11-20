import React from 'react';

const AboutSkeleton = () => {
    return (
        <section id="about-skeleton" className='relative px-5 py-28'>
            <div className='max-w-[1200px] mx-auto grid md:grid-cols-2 gap-16 items-center'>
                {/* Image Placeholder */}
                <div className="w-full h-[500px] bg-gray-700/50 rounded-xl animate-pulse"></div>

                {/* Text Content Placeholder */}
                <div>
                    {/* Title Placeholder */}
                    <div className="relative mb-8">
                        <div className="w-[55px] h-[55px] bg-gray-700/50 rounded-full animate-pulse"></div>
                        <div className="absolute top-3 h-8 w-48 bg-gray-700/50 rounded animate-pulse ml-4"></div>
                    </div>
                    
                    {/* Paragraph Placeholders */}
                    <div className="space-y-4">
                        <div className="h-4 bg-gray-700/50 rounded w-1/4 animate-pulse"></div>
                        <div className="h-4 bg-gray-700/50 rounded w-full animate-pulse"></div>
                        <div className="h-4 bg-gray-700/50 rounded w-full animate-pulse"></div>
                        <div className="h-4 bg-gray-700/50 rounded w-3/4 animate-pulse"></div>
                        <div className="h-4 bg-gray-700/50 rounded w-full mt-4 animate-pulse"></div>
                        <div className="h-4 bg-gray-700/50 rounded w-5/6 animate-pulse"></div>
                         <div className="h-4 bg-gray-700/50 rounded w-full mt-4 animate-pulse"></div>
                        <div className="h-4 bg-gray-700/50 rounded w-4/6 animate-pulse"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSkeleton;
