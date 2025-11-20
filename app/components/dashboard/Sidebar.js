import React, { useRef, useEffect } from 'react';
import { X, Menu } from 'lucide-react';
import SidebarNav from './SidebarNav'; // Import SidebarNav
import SidebarLogoutButton from './SidebarLogoutButton'; // Import SidebarLogoutButton

const Sidebar = ({ isOpen, toggleSidebar, closeSidebar }) => {
    const sidebarRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            // Close sidebar only if it's open and the click is outside the sidebar and not on the toggle button
            if (isOpen && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                // Check if the click target is not the toggle button itself
                const isToggleButton = event.target.closest('button') && event.target.closest('button').classList.contains('md:hidden');
                if (!isToggleButton) {
                    closeSidebar(); // Use closeSidebar instead of toggleSidebar
                }
            }
        };

        // Add event listener only when sidebar is open
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        // Cleanup event listener
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, closeSidebar]); // Re-run effect when isOpen or closeSidebar changes

    return (
        <div
            ref={sidebarRef} // Attach ref to the sidebar div
            className={`fixed inset-y-0 left-0 z-30 w-64 bg-gray-800 text-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out`}
        >
            <div className="flex items-center justify-between h-16 px-4 bg-gray-900">
                <h1 className="text-2xl font-semibold">Admin Panel</h1>
                <button onClick={toggleSidebar} className="md:hidden text-gray-400 hover:text-white focus:outline-none">
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
            <SidebarNav closeSidebar={closeSidebar} /> {/* Pass closeSidebar to SidebarNav */}
            <SidebarLogoutButton />
        </div>
    );
};
export default Sidebar;