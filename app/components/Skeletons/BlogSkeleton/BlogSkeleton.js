import React from 'react';
import BlogCardSkeleton from "@/app/components/Skeletons/BlogSkeleton/BlogCardSkeleton";

const BlogSkeleton = () => {


    return (
        <div className="max-w-[1200px] mx-auto py-28 px-5">
            <div className="flex justify-center">
                <div className="flex items-center gap-3">
                    <div className="h-16 w-16 bg-slate-200 rounded-full animate-pulse"></div>
                    <div className="w-28 h-10 bg-slate-200 animate-pulse"></div>
                </div>
            </div>

            <div className="pt-20">
                <div className="bg-slate-200 h-16 w-11/12 animate-pulse"></div>
                <div className="bg-slate-200 h-16 w-10/12 animate-pulse mt-10"></div>
                <div className="bg-slate-200 h-16  animate-pulse mt-10"></div>
                <div className="bg-slate-200 h-16 w-11/12 animate-pulse mt-10"></div>
            </div>

        <BlogCardSkeleton/>

        </div>
    );
};

export default BlogSkeleton;