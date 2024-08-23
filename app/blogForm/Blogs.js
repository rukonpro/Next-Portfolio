"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('/api/blog/blog');
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching Blogs:', error);
      }
    };

    fetchBlogs();
  }, []);


  console.log(blogs)
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Blogs</h1>
      {blogs.length === 0 ? (
        <p className="text-gray-500">No Blogs found.</p>
      ) : (
        blogs.map((blog) => (
          <div key={blog.id} className="mb-8 p-6 bg-slate-500 shadow-md rounded-lg">
            <img src={blog?.thumbnail}  alt={blog?.title} className='w-full'/>
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
