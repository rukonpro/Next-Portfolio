"use client"
import { useEffect, useState } from 'react';
import { getBlogs } from "@/app/lib/data";
// import Image from 'next/image';

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogsData = await getBlogs();
        setBlogs(blogsData);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      }
    };

    fetchBlogs();
  }, []);
  

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Blogs</h1>
      {blogs.length === 0 ? (
        <p className="text-gray-500">No Blogs found.</p>
      ) : (
        blogs.map((blog) => (
          <div key={blog.id} className="mb-8 p-6 bg-slate-500 shadow-md rounded-lg">
            <img src={blog?.thumbnail} alt={blog?.title} className='w-full' />

            {/* <Image
              src="https://i.ibb.co/hMcTjN1/d10734f0cbd100aef4fbaca00.jpg"
              alt="Image description"
              width={800}  // ইমেজের প্রস্থ
              height={600} // ইমেজের উচ্চতা
              quality={75} // কোয়ালিটি সেট করুন, যদি প্রয়োজন হয়
            /> */}
            <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
            <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </div>
        ))
      )}
    </div>
  );
}
