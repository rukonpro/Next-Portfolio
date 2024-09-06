import React from 'react';

const BlogCardSkeleton = () => {
    return (
        <div className="grid xl:grid-cols-4 lg:grid-cols-3  sm:grid-cols-2 grid-cols-1 gap-4 gap-y-16  pt-28">
            {
                Array.from({length: 8}, (x, i) =>

                    <div key={i} className="border rounded animate-pulse">
                        <div className="h-36 w-full bg-slate-200 "></div>
                        <div className="h-5  bg-slate-200 mt-10 mx-3 "></div>
                        <div className=" flex  items-center gap-5 mt-16 m-3 ">
                            <div className="h-16 w-16 bg-slate-200 rounded-full"></div>
                            <div>
                                <div className="h-5 w-36 bg-slate-200"></div>
                                <div className="h-5 w-24 mt-3 bg-slate-200"></div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default BlogCardSkeleton;