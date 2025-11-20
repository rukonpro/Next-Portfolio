import React from 'react';
import { X, Menu } from 'lucide-react';
import SidebarNav from './SidebarNav'; // Import SidebarNav
import SidebarLogoutButton from './SidebarLogoutButton'; // Import SidebarLogoutButton

const Sidebar = ({ isOpen, toggleSidebar }) => {
    return (
        <div className={`fixed inset-y-0 left-0 z-30 w-64 bg-gray-800 text-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out`}>
            <div className="flex items-center justify-between h-16 px-4 bg-gray-900">
                <h1 className="text-2xl font-semibold">Admin Panel</h1>
                <button onClick={toggleSidebar} className="md:hidden text-gray-400 hover:text-white focus:outline-none">
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
            <SidebarNav />
            <SidebarLogoutButton />
        </div>
    );
};
export default Sidebar;