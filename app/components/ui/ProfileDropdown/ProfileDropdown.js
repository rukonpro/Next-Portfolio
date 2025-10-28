"use client"
import React, { useState, useRef, useEffect } from 'react';
import ProfileImage from "@/public/images/rukon_cover_photo_2.jpg";
import Image from 'next/image';

const ProfileDropdown = ({ status, handleSingOut, setIsDialogOpen }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            {
                status === "authenticated" ?
                    <div>
                        <button onClick={() => setIsOpen(!isOpen)} className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 focus:outline-none">
                            <Image
                                alt="rukonpro profile photo"
                                src={ProfileImage}
                                className="w-10 h-10 rounded-full object-cover" />
                        </button>
                        {isOpen && (
                            <ul className="absolute right-0 mt-2 w-52 bg-white rounded-md shadow-lg z-10 ring-1 ring-black ring-opacity-5">
                                <li>
                                    <a href="#" className="flex justify-between items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                        Profile
                                        <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">New</span>
                                    </a>
                                </li>
                                <li><a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Dashboard</a></li>
                                <li><a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a></li>
                                <li><button onClick={handleSingOut} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</button></li>
                            </ul>
                        )}
                    </div>
                    :
                    <button
                        type="button"
                        aria-label="Login"
                        className="bg-gradient-to-r from-[#5e2594ec] to-[#270257fd] px-5 py-1 rounded-lg animated-button tracking-[3px] text-[#fccdff]"
                        onClick={() => setIsDialogOpen(true)}><span
                            className="bg-gradient-to-r from-[#816aff] to-[#d066fd] text-transparent bg-clip-text">Login</span>
                    </button>
            }
        </div>
    );
};

export default ProfileDropdown;