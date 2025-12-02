"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LogOut } from 'lucide-react';

const ProfileNavContent = ({ user, sidebarLinks, activeTab, setActiveTab, closeSidebar, handleSignOut }) => {
    return (
        <>
            <div className="flex flex-col items-center mb-8">
                <Image
                    src={user?.image || '/images/rukon.jpeg'}
                    alt="Profile Picture"
                    width={100}
                    height={100}
                    className="rounded-full border-4 border-purple-500 object-cover"
                />
                <h2 className="mt-4 text-xl font-bold">{user?.name}</h2>
                <p className="text-sm text-gray-400">{user?.email}</p>
            </div>
            <nav className="flex flex-col space-y-2 w-full">
                {sidebarLinks.map(link => (
                    <Link
                        key={link.id}
                        href={link.href}
                        onClick={() => { setActiveTab(link.id); closeSidebar(); }}
                        className={`flex items-center px-4 py-3 rounded-lg transition-all duration-300 ${
                            activeTab === link.id
                                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 shadow-md'
                                : 'hover:bg-white/10'
                        }`}
                    >
                        <link.icon className="w-5 h-5 mr-3" />
                        <span>{link.label}</span>
                    </Link>
                ))}
                <button
                    onClick={handleSignOut}
                    className="flex items-center px-4 py-3 rounded-lg transition-all duration-300 hover:bg-red-500/20 text-red-400"
                >
                    <LogOut className="w-5 h-5 mr-3" />
                    <span>Logout</span>
                </button>
            </nav>
        </>
    );
};

export default ProfileNavContent;
