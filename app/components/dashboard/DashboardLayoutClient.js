"use client";
import React, { useState, useEffect } from 'react';
import Sidebar from "@/app/components/dashboard/Sidebar";
import Header from "@/app/components/dashboard/Header";

const DashboardLayoutClient = ({children}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Default to false for mobile-first approach

    useEffect(() => {
        const handleResize = () => {
            // Set sidebar open by default for desktop (md breakpoint is 768px)
            if (window.innerWidth >= 768) {
                setIsSidebarOpen(true);
            } else {
                setIsSidebarOpen(false);
            }
        };

        // Set initial state
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty dependency array means this runs once on mount and cleanup on unmount

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex h-screen bg-gray-100">
             <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <div className={`flex-1 flex flex-col overflow-hidden transition-all duration-300 ease-in-out ${isSidebarOpen ? 'md:ml-64' : 'md:ml-0'}`}>
                <Header toggleSidebar={toggleSidebar} />
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 mt-16 p-4">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default DashboardLayoutClient;
