"use client";
import React from 'react';
import { LogOut } from 'lucide-react';
import { signOut } from 'next-auth/react';
import Swal from 'sweetalert2'; // Import SweetAlert2

const SidebarLogoutButton = () => {
    const handleSignOut = async () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You will be logged out!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, log me out!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                await signOut({ callbackUrl: '/' }); // Redirect to home page after logout
            }
        });
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
