"use client";
import React from 'react';
import BlogForm from '@/app/blogForm/BlogForm'; // Assuming BlogForm is here
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Loading from '@/app/loading';

const CreateBlogClientPage = () => {
    const router = useRouter();
    const { data: session, status } = useSession();

    if (status === 'loading') {
        return <Loading/>;
    }

    if (session?.user?.role !== "ADMIN") {
        router.push("/");
        return null;
    }

    const handleSuccess = () => {
        router.push('/dashboard/blogs'); // Redirect to the blogs table after successful creation
    };

    return (
        <div className="p-4 bg-white rounded-lg shadow-md text-gray-900">
            <h1 className="text-2xl font-bold mb-4">Create New Blog Post</h1>
            <BlogForm onSuccess={handleSuccess} />
        </div>
    );
};

export default CreateBlogClientPage;
