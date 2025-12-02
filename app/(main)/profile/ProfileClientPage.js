"use client";
import React, { useState } from 'react';
import { signOut } from 'next-auth/react'; // Keep signOut for client-side logout
import { useRouter } from 'next/navigation';
import Swal from "sweetalert2";
import Drawer from '@/app/components/ui/Drawer/Drawer';

// Import modular components
import ProfileSidebar from '@/app/components/profile/ProfileSidebar';
import ProfileMobileDrawerContent from '@/app/components/profile/ProfileMobileDrawerContent';
import ProfileContent from '@/app/components/profile/ProfileContent';

import { User, Shield, Edit, ShoppingBag, Menu, X } from 'lucide-react';


const ProfileClientPage = ({ initialSession }) => {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState('profile');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for mobile sidebar

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const closeSidebar = () => setIsSidebarOpen(false);

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
                await signOut({ redirect: false, callbackUrl: '/' });
                router.push('/');
            }
        });
    };

    const user = initialSession?.user;

    const sidebarLinks = [
        { id: 'profile', label: 'My Profile', icon: User, href: '/profile' },
        { id: 'edit', label: 'Edit Profile', icon: Edit, href: '/profile/edit' },
        { id: 'security', label: 'Security', icon: Shield, href: '/profile/security' },
        { id: 'orders', label: 'My Orders', icon: ShoppingBag, href: '/profile/orders' },
    ];

    return (
        <div className="relative min-h-screen bg-gradient-to-r from-[#17113a] to-[#3a07c0] text-white p-5 pt-28">
             <div
            className=" absolute custom-animate-pulse inset-0 m-auto max-w-xs h-[500px] blur-[118px] sm:max-w-md md:max-w-lg"
            style={{
                background:
                    "linear-gradient(106.89deg, rgb(136, 0, 213) 15.73%, rgba(113, 14, 233, 0.41) 15.74%, rgba(209, 121, 249, 0.26) 56.49%, rgb(229, 70, 70) 115.91%)",
            }}
        ></div>
            {/* Fixed Mobile Toggle Button */}
            <button
                onClick={toggleSidebar}
                className="fixed top-16 left-4 md:hidden z-50 p-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                aria-label="Toggle Profile Sidebar"
            >
                {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row gap-10">

                {/* Desktop Sidebar */}
                <ProfileSidebar
                    user={user}
                    sidebarLinks={sidebarLinks}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    closeSidebar={closeSidebar}
                    handleSignOut={handleSignOut}
                />

                {/* Drawer for Mobile */}
                <Drawer isOpen={isSidebarOpen} onClose={closeSidebar} side="left" width="w-64">
                    <ProfileMobileDrawerContent
                        user={user}
                        sidebarLinks={sidebarLinks}
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                        closeSidebar={closeSidebar}
                        handleSignOut={handleSignOut}
                    />
                </Drawer>

                {/* Main Content */}
                <ProfileContent
                    user={user}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />
            </div>
        </div>
    );
};

export default ProfileClientPage;
