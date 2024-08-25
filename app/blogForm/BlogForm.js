"use client"
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import axios from 'axios';


const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const modules = {
    toolbar: [
        [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
        [{ size: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote',],
        [{ 'list': 'ordered' }, { 'list': 'bullet' },
        { 'indent': '-1' }, { 'indent': '+1' }],
        ['link', 'image', 'video'],
        ['clean'],
    ]
};

export default function BlogForm() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [thumbnail, setThumbnail] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    console.log(content)
    const handleThumbnailChange = (e) => {
        setThumbnail(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        formData.append('thumbnail', thumbnail);

        try {
            const response = await axios.post('/api/blog/createBlog', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.status === 201) {
                alert('Blog saved successfully!');
            } else {
                alert('Failed to save the Blog');
            }

            setIsLoading(false);
        } catch (error) {
            console.error('Error saving Blog:', error);
            alert('An error occurred while saving the Blog');
            setIsLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-8  shadow-md rounded-lg">
            <h1 className="text-2xl font-bold mb-4">Create a New Blog</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Title:</label>



                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="mt-1 block w-full p-2 border border-gray-300 bg-white text-gray-900 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                    />


                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Thumbnail:</label>
                    <input
                        type="file"
                        onChange={handleThumbnailChange}
                        className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Content:</label>
                    <ReactQuill
                        value={content}
                        theme="snow"
                        onChange={setContent}
                        modules={modules}
                        className="mt-1"
                    />
                </div>

                <button
                    type="submit"
                    disabled={isLoading}
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    {isLoading ? "Posting..." : "Post Blog"}
                </button>
            </form>
        </div>
    );
}
