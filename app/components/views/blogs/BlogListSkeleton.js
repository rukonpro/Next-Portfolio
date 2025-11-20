import React from 'react';
import BlogCardSkeleton from './BlogCardSkeleton';

const BlogListSkeleton = () => {
    return (
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 gap-y-16 pt-28 text-white">
            {Array.from({ length: 8 }).map((_, index) => (
                <BlogCardSkeleton key={index} />
            ))}
        </div>
    );
};

export default BlogListSkeleton;
