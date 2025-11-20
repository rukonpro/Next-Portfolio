import React from 'react';

const BlogCardSkeleton = () => {
    return (
        <div className="border-b border-gray-700 flex flex-col justify-between rounded overflow-hidden duration-500">
            <div className="pb-10">
                <div className="w-full h-44 bg-gray-700 animate-pulse"></div>
                <div className="h-6 bg-gray-700 animate-pulse rounded w-3/4 mt-3 mx-2"></div>
            </div>
            <div className="flex gap-4 pb-10 px-2 items-center">
                <div>
                    <div className="w-[50px] h-[50px] bg-gray-700 animate-pulse rounded-full"></div>
                </div>
                <div className="flex-1">
                    <div className="h-5 bg-gray-700 animate-pulse rounded w-1/2 mb-2"></div>
                    <div className="h-3 bg-gray-700 animate-pulse rounded w-1/3"></div>
                </div>
            </div>
        </div>
    );
};

export default BlogCardSkeleton;
