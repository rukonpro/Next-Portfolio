"use client";
import React from 'react';
import Link from 'next/link';

const ProfileInfo = ({ user, setActiveTab }) => {
    return (
        <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-[#9e31f7ff] to-[#344dedff] text-transparent bg-clip-text mb-6">
                Profile Information
            </h1>
            <div className="space-y-6">
                <div className="flex flex-col">
                    <span className="font-semibold text-gray-400">Full Name</span>
                    <p className="text-lg">{user?.name}</p>
                </div>
                <div className="flex flex-col">
                    <span className="font-semibold text-gray-400">Email Address</span>
                    <p className="text-lg">{user?.email}</p>
                </div>
                <div className="flex flex-col">
                    <span className="font-semibold text-gray-400">Role</span>
                    <p className="text-lg capitalize bg-purple-500/20 px-3 py-1 rounded-full w-fit">
                        {user?.role?.toLowerCase()}
                    </p>
                </div>
                 <div className="flex flex-col">
                    <span className="font-semibold text-gray-400">Joined</span>
                    <p className="text-lg">
                        {user?.createdAt ? new Date(user.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : 'N/A'}
                    </p>
                </div>
                <div className="pt-4">
                     <Link href="/profile/edit" onClick={() => setActiveTab('edit')} className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-2 px-6 rounded-lg hover:opacity-90 transition-opacity">
                        Edit Profile
                     </Link>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;
