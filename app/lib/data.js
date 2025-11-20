import baseURL from "@/app/utils/baseURL/baseURL";
import {cache} from 'react'

// Cached function to get pricing data
export const getPricing = cache(async () => {
    try {
        const res = await fetch(`${baseURL}/api/service/findMany`, { next: { revalidate: 3600 } }); // Revalidate every hour
        if (!res.ok) {
            throw new Error('Failed to fetch pricing data');
        }
        return await res.json();
    } catch (error) {
        console.error("Error fetching pricing data:", error);
        return { data: [] };
    }
});

// Cached function to get all blogs with optional query parameters
export const getBlogs = cache(async (params = {}) => {
    try {
        const query = new URLSearchParams(params).toString();
        const url = query ? `${baseURL}/api/blog/getBlogs?${query}` : `${baseURL}/api/blog/getBlogs`;
        const res = await fetch(url, { next: { revalidate: 600 } }); // Revalidate every 10 minutes
        if (!res.ok) {
            throw new Error('Failed to fetch blogs');
        }
        return await res.json();
    } catch (error) {
        console.error("Error fetching blogs:", error);
        // Return an empty array or a specific error object
        return [];
    }
});


// Cached function to get a single blog by ID
export const getBlogById = cache(async (id) => {
    try {
        const res = await fetch(`${baseURL}/api/blog/${id}`, { next: { revalidate: 3600, tags: [`blog-${id}`] } }); // Revalidate every hour
        if (!res.ok) {
            throw new Error('Failed to fetch blog');
        }
        return await res.json();
    } catch (error) {
        console.error(`Error fetching blog with id: ${id}` , error);
        return null;
    }
});

// Function to delete a blog by ID
export async function deleteBlog(id) {
    try {
        const res = await fetch(`${baseURL}/api/blog/deleteBlog?id=${id}`, {
            method: 'DELETE',
        });

        if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData.error || 'Failed to delete blog');
        }

        return { success: true };
    } catch (error) {
        console.error(`Error deleting blog with id: ${id}`, error);
        throw error; // Re-throw to be caught by the caller
    }
}
