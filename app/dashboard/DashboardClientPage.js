"use client";
import React from 'react';
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';
import Loading from "@/app/loading";
import Link from 'next/link';
import { Newspaper, Users, Eye, MessageSquare, PlusCircle, List, BarChart2 } from 'lucide-react';

const DashboardClientPage = ({ initialBlogs, metrics }) => {
    const router = useRouter();
    const { data: session, status } = useSession();

    if (status === 'loading') {
        return <Loading/>;
    }

    if (session?.user?.role !== "ADMIN") {
        router.push("/");
        return null;
    }

    return (
        <div className='p-4 bg-white rounded-lg shadow-md text-gray-900'>
            <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>

            {/* Metrics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="bg-blue-100 p-4 rounded-lg shadow flex items-center justify-between">
                    <div>
                        <h2 className="text-lg font-semibold text-blue-800">Total Blogs</h2>
                        <p className="text-3xl font-bold text-blue-900">{metrics.totalBlogs}</p>
                    </div>
                    <Newspaper size={48} className="text-blue-600 opacity-50" />
                </div>
                <div className="bg-green-100 p-4 rounded-lg shadow flex items-center justify-between">
                    <div>
                        <h2 className="text-lg font-semibold text-green-800">Total Users</h2>
                        <p className="text-3xl font-bold text-green-900">{metrics.totalUsers}</p>
                    </div>
                    <Users size={48} className="text-green-600 opacity-50" />
                </div>
                <div className="bg-yellow-100 p-4 rounded-lg shadow flex items-center justify-between">
                    <div>
                        <h2 className="text-lg font-semibold text-yellow-800">Total Views</h2>
                        <p className="text-3xl font-bold text-yellow-900">{metrics.totalViews}</p>
                    </div>
                    <Eye size={48} className="text-yellow-600 opacity-50" />
                </div>
                <div className="bg-purple-100 p-4 rounded-lg shadow flex items-center justify-between">
                    <div>
                        <h2 className="text-lg font-semibold text-purple-800">Total Comments</h2>
                        <p className="text-3xl font-bold text-purple-900">{metrics.totalComments}</p>
                    </div>
                    <MessageSquare size={48} className="text-purple-600 opacity-50" />
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Recent Blogs */}
                <div className="lg:col-span-2 bg-gray-50 p-6 rounded-lg shadow">
                    <h2 className="text-xl font-bold mb-4 text-gray-800">Recent Blogs</h2>
                    {initialBlogs && initialBlogs.length > 0 ? (
                        <ul className="space-y-3">
                            {initialBlogs.map((blog) => (
                                <li key={blog.id} className="flex items-center justify-between bg-white p-3 rounded-md shadow-sm hover:shadow-md transition-shadow">
                                    <Link href={`/dashboard/blogs/edit/${blog.id}`} className="text-blue-600 hover:underline font-medium flex-grow">
                                        {blog.title}
                                    </Link>
                                    <span className="text-sm text-gray-500 ml-4">
                                        {new Date(blog.createdAt).toLocaleDateString()}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-600">No recent blogs found.</p>
                    )}
                </div>

                {/* Quick Actions */}
                <div className="bg-gray-50 p-6 rounded-lg shadow">
                    <h2 className="text-xl font-bold mb-4 text-gray-800">Quick Actions</h2>
                    <div className="space-y-3">
                        <Link href="/dashboard/blogs/create" className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors">
                            <PlusCircle size={20} className="mr-2" /> Create New Blog
                        </Link>
                        <Link href="/dashboard/blogs" className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                            <List size={20} className="mr-2" /> View All Blogs
                        </Link>
                        <Link href="/dashboard/analytics" className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                            <BarChart2 size={20} className="mr-2" /> Go to Analytics
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardClientPage;
