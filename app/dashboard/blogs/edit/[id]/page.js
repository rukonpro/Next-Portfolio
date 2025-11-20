import React from 'react';
import { getBlogById } from '@/app/lib/data';
import EditBlogClientPage from './EditBlogClientPage'; // Import the new client component

const EditBlogServerPage = async ({ params }) => {
    const { id } = params;
    let initialBlogData = null;
    let errorBlog = null;

    if (!id) {
        errorBlog = 'Blog ID is missing.';
    } else {
        try {
            initialBlogData = await getBlogById(id);
            if (!initialBlogData) {
                errorBlog = 'Blog not found.';
            }
        } catch (err) {
            errorBlog = 'Failed to fetch blog data for editing.';
            console.error('Error fetching blog for edit:', err);
        }
    }

    // The client component will handle its own loading for session
    // and display the error if present.
    return (
        <EditBlogClientPage initialBlogData={initialBlogData} errorBlog={errorBlog} />
    );
};

export default EditBlogServerPage;