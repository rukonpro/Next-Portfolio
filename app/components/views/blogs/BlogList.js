import { getBlogs } from "@/app/lib/data";
import BlogCard from "./BlogCardView";
import { Suspense } from "react";

const BlogList = async () => {
    const blogs = await getBlogs({ fields: 'title,thumbnail,id,createdAt,updatedAt' });
    const errorMessage = !blogs || blogs.length === 0 ? "Could not fetch blogs or no blogs available." : null;

    if (errorMessage) {
        return <p className="text-red-500 pt-5 text-center">{errorMessage}</p>;
    }

    return (
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 gap-y-16 pt-28 text-white">
            {blogs?.map(blog => (
                <Suspense fallback={<p>Loading...</p>} key={blog.id}>
                    <BlogCard blog={blog} />
                </Suspense>
            ))}
        </div>
    );
};

export default BlogList;
