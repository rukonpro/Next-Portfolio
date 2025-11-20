"use client";
import React from 'react';
import Sidebar from "@/app/components/dashboard/Sidebar";
import Header from "@/app/components/dashboard/Header";
import useSidebarToggle from '@/app/hooks/useSidebarToggle';
import Overlay from '@/app/components/ui/Overlay'; // Import the Overlay component

const DashboardLayoutClient = ({children}) => {
    const { isSidebarOpen, toggleSidebar, closeSidebar } = useSidebarToggle();

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Overlay for mobile when sidebar is open */}
            <Overlay isOpen={isSidebarOpen} onClick={closeSidebar} />

            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} closeSidebar={closeSidebar} />
            <div className={`flex-1 flex flex-col overflow-hidden transition-all duration-300 ease-in-out ${isSidebarOpen ? 'md:ml-0' : 'md:ml-64'}`}>
                <Header toggleSidebar={toggleSidebar} />
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 mt-16 p-4">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default DashboardLayoutClient;
