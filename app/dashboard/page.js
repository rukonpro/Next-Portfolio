import React from 'react';
import BlogForm from '../blogForm/BlogForm';
import Blogs from '../blogForm/Blogs';

const Dashboard = () => {
    return (
        <div className='bg-slate-400  w-screen h-screen overflow-y-auto'>
            <h1>Dashboard</h1>
            <BlogForm />
            <Blogs/>
        </div>
    );
};

export default Dashboard;