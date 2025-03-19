// components/Dropdown.js
"use client"
import { useState, useEffect, useRef } from 'react';
import ProfileImage from "@/public/images/rukon_cover_photo_2.jpg";
import Image from 'next/image';
import Link from "next/link";

export default function Dropdown({ status, handleSingOut, setIsDialogOpen }) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);

    return (

        <>
            {
                status === "authenticated" ?
                    <div className="relative inline-block text-left" ref={dropdownRef}>


                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type='button'
                            className="w-10 hover:outline outline-2   outline-offset-2 outline-[#836aff] rounded-full overflow-hidden ">
                            <div className='rounded-full '>
                                <Image
                                    height={40}
                                    width={40}
                                    alt="rukonpro profile photo"
                                    src={ProfileImage} />
                            </div>
                        </button >


                        {isOpen && (
                            <div
                                className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg backdrop-blur-3xl ring-1 ring-black ring-opacity-5 focus:outline-none"
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="menu-button"
                                tabIndex="-1"
                            >
                                <div className="p-1" role="none">
                                    <Link
                                        href="/contact"
                                        className="block px-4 py-2 text-sm text-gray-200 hover:bg-slate-500/30 hover:rounded"
                                        role="menuitem"
                                        tabIndex="-1"
                                        id="menu-item-0"
                                    >
                                        Profile
                                    </Link>
                                    <Link
                                        href="/dashboard"
                                        className="block px-4 py-2 text-sm text-gray-200 hover:bg-slate-500/30 hover:rounded"
                                        role="menuitem"
                                        tabIndex="-1"
                                        id="menu-item-0"
                                    >
                                        Dashboard
                                    </Link>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-200 hover:bg-slate-500/30 hover:rounded"
                                        role="menuitem"
                                        tabIndex="-1"
                                        id="menu-item-0"
                                    >
                                        Settings
                                    </a>



                                    <button

                                        onClick={handleSingOut}
                                        type='button'
                                        className="block w-full text-left px-4 py-2 text-sm text-gray-200 hover:bg-slate-500/30 hover:rounded"
                                        role="menuitem"
                                        tabIndex="-1"
                                        id="menu-item-3"
                                    >
                                        Sign out
                                    </button>

                                </div>
                            </div>
                        )
                        }
                    </div > :

                    <button
                        type="button"
                        aria-label="Login"
                        className=" bg-gradient-to-r from-[#5e2594ec] to-[#270257fd] px-5 py-1 rounded-lg  animated-button tracking-[3px]  text-[#fccdff]"
                        onClick={() => setIsDialogOpen(true)}><span
                            className="bg-gradient-to-r from-[#816aff] to-[#d066fd] text-transparent bg-clip-text">Login</span>
                    </button>
            }
        </>
    );
}
