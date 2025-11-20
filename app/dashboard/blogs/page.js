import React from 'react';
import { getBlogs } from '@/app/lib/data';
import Loading from '@/app/components/loading/loading'; // Assuming this Loading component can be used in Server Components or is a client component that will be rendered by suspense
import BlogsClientPage from './BlogsClientPage'; // Import the new client component

const BlogsServerPage = async () => {
    let initialBlogs = [];
    let error = null;

    try {
        initialBlogs = await getBlogs({ fields: 'title,thumbnail,id,createdAt,updatedAt' });
    } catch (err) {
        error = 'Failed to fetch blogs. Please try again later.';
        console.error('Error fetching blogs in Server Component:', err);
    }

    // The client component will handle its own loading for re-fetches
    // and display the error if present.
    return (
        <BlogsClientPage initialBlogs={initialBlogs} error={error} />
    );
};

export default BlogsServerPage;