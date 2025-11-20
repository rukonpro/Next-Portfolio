"use client";
import { useState, useEffect } from 'react';

const useSidebarToggle = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) { // md breakpoint
                setIsSidebarOpen(false);
            } else {
                setIsSidebarOpen(false);
            }
        };

        handleResize(); // Set initial state

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    return { isSidebarOpen, toggleSidebar, closeSidebar };
};

export default useSidebarToggle;
