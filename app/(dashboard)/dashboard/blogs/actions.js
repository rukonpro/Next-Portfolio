"use server";
import { revalidatePath, revalidateTag } from 'next/cache';

export async function revalidateBlogData(id) {
    revalidatePath(`/dashboard/blogs/edit/${id}`); // Revalidate the individual blog edit page
    revalidatePath('/dashboard/blogs'); // Revalidate the main blogs listing page
    revalidateTag(`blog-${id}`); // Revalidate the specific blog data fetched by getBlogById
}
