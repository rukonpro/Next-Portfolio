"use client";
import React from 'react';
import Link from 'next/link';
import { Pencil, Trash2 } from 'lucide-react';

const BlogsTable = ({ blogs, handleEdit, handleDelete }) => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b text-left">Title</th>
                        <th className="py-2 px-4 border-b text-left">Author</th>
                        <th className="py-2 px-4 border-b text-left">Date</th>
                        <th className="py-2 px-4 border-b text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {blogs.map((blog) => (
                        <tr key={blog.id} className="hover:bg-gray-50">
                            <td className="py-2 px-4 border-b">{blog.title}</td>
                            <td className="py-2 px-4 border-b">{blog.author || 'N/A'}</td>
                            <td className="py-2 px-4 border-b">{new Date(blog.createdAt).toLocaleDateString()}</td>
                            <td className="py-2 px-4 border-b text-center">
                                <button
                                    onClick={() => handleEdit(blog.id)}
                                    className="text-blue-600 hover:text-blue-900 mr-3"
                                    title="Edit"
                                >
                                    <Pencil size={18} />
                                </button>
                                <button
                                    onClick={() => handleDelete(blog.id)}
                                    className="text-red-600 hover:text-red-900"
                                    title="Delete"
                                >
                                    <Trash2 size={18} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BlogsTable;
