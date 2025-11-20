"use client";
import React, { useEffect, useState } from 'react';
import { getBlogs, deleteBlog } from "@/app/lib/data";
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import Loading from "@/app/components/loading/loading";
import BlogsTable from "@/app/components/dashboard/blogs/BlogsTable";
import BlogsActions from "@/app/components/dashboard/blogs/BlogsActions";
import { revalidateBlogData } from '@/app/dashboard/blogs/actions'; // Import the server action

const BlogsClientPage = ({ initialBlogs, error: initialError }) => {
    const router = useRouter();
    const [blogs, setBlogs] = useState(initialBlogs); // Initialize with server-fetched data
    const [loading, setLoading] = useState(false); // Loading for re-fetches, not initial
    const [error, setError] = useState(initialError); // Initialize with server-fetched error

    const fetchBlogsData = async () => {
        try {
            setLoading(true);
            const fetchedBlogs = await getBlogs({ fields: 'title,thumbnail,id,createdAt,updatedAt' });
            setBlogs(fetchedBlogs);
        } catch (err) {
            setError('Failed to fetch blogs. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    // No useEffect for initial fetch, as data comes from props

    const handleDelete = async (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await deleteBlog(id); // Use the new deleteBlog function
                    Swal.fire(
                        'Deleted!',
                        'Your blog post has been deleted.',
                        'success'
                    );
                    // Revalidate paths after deletion
                    await revalidateBlogData(id); // Revalidate the specific blog and the list
                    fetchBlogsData(); // Re-fetch data to update the list
                } catch (err) {
                    console.error('Error deleting blog:', err);
                    Swal.fire(
                        'Error!',
                        err.message || 'Failed to delete blog post.',
                        'error'
                    );
                }
            }
        });
    };

    const handleEdit = (id) => {
        router.push(`/dashboard/blogs/edit/${id}`);
    };

    if (error) {
        return (
            <div className="p-4 bg-red-100 text-red-700 rounded-lg shadow-md text-center">
                <p>{error}</p>
            </div>
        );
    }

    return (
        <div className="p-4 bg-white rounded-lg shadow-md text-gray-900">
            <h1 className="text-2xl font-bold mb-6">Blogs Management</h1>
            <BlogsActions />
            {loading && blogs.length === 0 ? ( // Show loading only if re-fetching and no blogs are displayed
                <Loading />
            ) : blogs.length === 0 ? (
                <p className="text-gray-600">No blog posts found.</p>
            ) : (
                <BlogsTable blogs={blogs} handleEdit={handleEdit} handleDelete={handleDelete} />
            )}
        </div>
    );
};

export default BlogsClientPage;
