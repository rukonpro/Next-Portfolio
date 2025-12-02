"use client";
import React from 'react';
import BlogForm from '@/app/blogForm/BlogForm';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Loading from '@/app/loading';
import {revalidateBlogData} from "@/app/(dashboard)/dashboard/blogs/actions";


const EditBlogClientPage = ({ initialBlogData, errorBlog }) => {
    const router = useRouter();
    const { data: session, status } = useSession();

    if (status === 'loading') {
        return <Loading/>;
    }

    if (session?.user?.role !== "ADMIN") {
        router.push("/");
        return null;
    }

    if (errorBlog) {
        return (
            <div className="p-4 bg-red-100 text-red-700 rounded-lg shadow-md text-center">
                <p>{errorBlog}</p>
            </div>
        );
    }

    const handleSuccess = async () => {
        if (initialBlogData?.id) {
            await revalidateBlogData(initialBlogData.id); // Call the server action
        }
        router.push('/dashboard/blogs'); // Redirect to the blogs table after successful update
    };

    return (
        <div className="p-4 bg-white rounded-lg shadow-md text-gray-900">
            <h1 className="text-2xl font-bold mb-4">Edit Blog Post</h1>
            {initialBlogData ? (
                <BlogForm initialData={initialBlogData} isEditMode={true} onSuccess={handleSuccess} />
            ) : (
                <p>Blog data not found or failed to load.</p>
            )}
        </div>
    );
};

export default EditBlogClientPage;
