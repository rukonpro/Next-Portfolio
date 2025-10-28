"use client"
import React, { useState } from 'react';

const DrawerMenuMobile = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            {/* Hamburger Button */}
            <button onClick={toggleDrawer} className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>

            {/* Drawer Overlay */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={toggleDrawer}
            ></div>

            {/* Drawer Panel */}
            <div
                className={`fixed top-0 left-0 h-full w-80 bg-gray-800 text-white p-4 z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <h2 className="text-xl font-bold mb-4">Menu</h2>
                <ul>
                    <li><a href="#" className="block p-2 hover:bg-gray-700 rounded-md">Sidebar Item 1</a></li>
                    <li><a href="#" className="block p-2 hover:bg-gray-700 rounded-md">Sidebar Item 2</a></li>
                </ul>
            </div>
        </div>
    );
};

export default DrawerMenuMobile;
