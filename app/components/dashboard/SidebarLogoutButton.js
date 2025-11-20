"use client";
import React from 'react';
import { LogOut } from 'lucide-react';
import { signOut } from 'next-auth/react';

const SidebarLogoutButton = () => {
    const handleSignOut = async () => {
        await signOut({ callbackUrl: '/' });
    };

    return (
        <div className="px-4">
            <button
                onClick={handleSignOut}
                className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md mt-auto w-full"
            >
                <LogOut className="mr-3" size={20} />
                Logout
            </button>
        </div>

    );
};

export default SidebarLogoutButton;
