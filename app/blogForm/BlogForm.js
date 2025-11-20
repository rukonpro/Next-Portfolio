"use client"
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import axios from 'axios';
import Image from 'next/image'; // Import Image component
import Swal from 'sweetalert2'; // Import SweetAlert2

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

export default function BlogForm({ initialData, isEditMode, onSuccess }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [thumbnail, setThumbnail] = useState(null); // This will store the File object for new uploads
    const [existingThumbnail, setExistingThumbnail] = useState(''); // To display existing thumbnail URL
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (initialData) {
            setTitle(initialData.title || '');
            setContent(initialData.content || '');
            setExistingThumbnail(initialData.thumbnail || ''); // Set existing thumbnail URL
        }
    }, [initialData]);

    const handleThumbnailChange = (e) => {
        setThumbnail(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);

        if (thumbnail) { // Only append if a new file is selected
            formData.append('thumbnail', thumbnail);
        } else if (isEditMode && existingThumbnail) { // If in edit mode and no new file, keep existing
            formData.append('existingThumbnail', existingThumbnail);
        }

        try {
            let response;
            if (isEditMode) {
                response = await axios.patch(`/api/blog/updateBlog/${initialData.id}`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
            } else {
                response = await axios.post('/api/blog/createBlog', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
            }

            if (response.status === 200 || response.status === 201) {
                Swal.fire({
                    icon: 'success',
                    title: `Blog ${isEditMode ? 'updated' : 'saved'} successfully!`,
                    showConfirmButton: false,
                    timer: 1500
                });
                if (onSuccess) {
                    onSuccess();
                }
            } else {
                Swal.fire({
                    icon: 'error',
                    title: `Failed to ${isEditMode ? 'update' : 'save'} the Blog`,
                    text: response.data.error || 'An unknown error occurred.'
                });
            }

            setIsLoading(false);
        } catch (error) {
            console.error(`Error ${isEditMode ? 'updating' : 'saving'} Blog:`, error);
            Swal.fire({
                icon: 'error',
                title: `An error occurred while ${isEditMode ? 'updating' : 'saving'} the Blog`,
                text: error.response?.data?.error || error.message || 'Please try again.'
            });
            setIsLoading(false);
        }
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">{isEditMode ? 'Edit Blog' : 'Create a New Blog'}</h1>
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
                    {isEditMode && existingThumbnail && !thumbnail && (
                        <div className="mt-2">
                            <p className="text-sm text-gray-500">Current Thumbnail:</p>
                            <Image src={existingThumbnail} alt="Current Thumbnail" width={100} height={100} className="mt-1 rounded-md" />
                        </div>
                    )}
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
                    {isLoading ? (isEditMode ? "Updating..." : "Posting...") : (isEditMode ? "Update Blog" : "Post Blog")}
                </button>
            </form>
        </div>
    );
}
