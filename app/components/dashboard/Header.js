"use client";
import React from 'react';
import { Menu, ArrowLeft } from 'lucide-react'; // Import ArrowLeft icon
import Dropdown from "@/app/components/ui/ProfileDropdown/Dropdown";
import { useRouter, usePathname } from 'next/navigation'; // Import useRouter and usePathname

const Header = ({ toggleSidebar }) => {
    const router = useRouter();
    const pathname = usePathname();

    // Function to get the title based on the current pathname
    const getTitle = (path) => {
        if (path === '/dashboard') {
            return 'Dashboard Overview';
        } else if (path.startsWith('/dashboard/blogs/create')) {
            return 'Create New Blog Post';
        } else if (path.startsWith('/dashboard/blogs/edit')) {
            return 'Edit Blog Post';
        } else if (path.startsWith('/dashboard/blogs')) {
            return 'Blogs Management';
        } else if (path.startsWith('/dashboard/analytics')) {
            return 'Analytics';
        }
        // Add more cases for other dashboard routes
        return 'Dashboard'; // Default title
    };

    const currentTitle = getTitle(pathname);

    // Determine if the back button should be shown
    // It should not be shown on the root dashboard page
    const showBackButton = pathname !== '/dashboard';

    // Placeholder for session status and sign out, assuming it will be passed or fetched here
    const session = { user: { name: "Admin" } }; // Replace with actual session data
    const status = "authenticated"; // Replace with actual status
    const handleSignOut = () => console.log("Sign out clicked"); // Replace with actual sign out logic

    const dropdownProps = {
        status,
        handleSignOut,
        isModalOpen: false, // Assuming modal is not needed in header, or handled differently
        setIsModalOpen: () => {}, // Placeholder
    };

    return (
        <header className="fixed top-0 left-0 md:left-64 right-0 z-20 bg-white shadow-md h-16 flex items-center justify-between px-4 transition-all duration-300 ease-in-out">
            <div className="flex items-center space-x-4">
                <button onClick={toggleSidebar} className="md:hidden text-gray-600 hover:text-gray-900 focus:outline-none">
                    <Menu size={24} />
                </button>
                {showBackButton && (
                    <button onClick={() => router.back()} className="text-gray-600 hover:text-gray-900 focus:outline-none">
                        <ArrowLeft size={24} />
                    </button>
                )}
                <h2 className="text-xl font-semibold text-gray-800">{currentTitle}</h2>
            </div>
            <div className="flex items-center space-x-4">
                {/* Add other header elements here, e.g., notifications, search */}
                <Dropdown {...dropdownProps} />
            </div>
        </header>
    );
};

export default Header;
