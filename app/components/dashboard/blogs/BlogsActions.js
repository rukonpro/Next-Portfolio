"use client";
import React from 'react';
import Link from 'next/link';

const BlogsActions = () => {
    return (
        <div className="flex justify-end mb-4">
            <Link href="/dashboard/blogs/create" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md">
                New Blog
            </Link>
        </div>
    );
};

export default BlogsActions;
