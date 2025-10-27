"use client";
import { useState, useEffect, useRef } from "react";
import ProfileImage from "@/public/images/rukon_cover_photo_2.jpg";
import Image from "next/image";
import Link from "next/link";

export default function Dropdown({ status, handleSignOut, setIsModalOpen }) {
    const [isOpen, setIsOpen] = useState(false);
    const [position, setPosition] = useState({
        position: "absolute",
        top: "100%",
        bottom: "auto",
        left: "0",
        right: "auto",
    });
    const dropdownRef = useRef(null);
    const buttonRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Calculate and update dropdown position dynamically
    const updatePosition = () => {
        if (!buttonRef.current || !dropdownRef.current) return;

        const buttonRect = buttonRef.current.getBoundingClientRect();
        const dropdownRect = dropdownRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const viewportWidth = window.innerWidth;

        let top = "100%";
        let bottom = "auto";
        let left = "0";
        let right = "auto";

        // Flip to top if no space below
        if (buttonRect.bottom + dropdownRect.height > viewportHeight && buttonRect.top > dropdownRect.height) {
            top = "auto";
            bottom = "100%";
        } else {
            top = "100%";
            bottom = "auto";
        }

        // Flip to right if no space on the left
        if (buttonRect.left + dropdownRect.width > viewportWidth && buttonRect.right > dropdownRect.width) {
            left = "auto";
            right = "0";
        } else {
            left = "0";
            right = "auto";
        }

        setPosition({
            position: "absolute",
            top,
            bottom,
            left,
            right,
        });
    };

    // Update position when dropdown opens or window resizes
    useEffect(() => {
        if (isOpen) {
            updatePosition();
            window.addEventListener("resize", updatePosition);
            return () => window.removeEventListener("resize", updatePosition);
        }
    }, [isOpen]);

    return (
        <>
            {status === "authenticated" ? (
                <div className="relative inline-block text-left" ref={dropdownRef}>
                    <button
                        ref={buttonRef}
                        onClick={() => setIsOpen(!isOpen)}
                        type="button"
                        className="hover:outline outline-2 outline-offset-2 outline-[#836aff] rounded-full overflow-hidden"
                    >
                        <div className="rounded-full">
                            <Image
                                height={40}
                                width={40}
                                alt="rukonpro profile photo"
                                src={ProfileImage}
                            />
                        </div>
                    </button>

                    {isOpen && (
                        <div
                            className="mt-2 w-56 rounded-md shadow-lg backdrop-blur-3xl ring-1 ring-black ring-opacity-5 z-10"
                            style={position} // Use dynamic position state
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
                                    id="menu-item-1"
                                >
                                    Dashboard
                                </Link>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-200 hover:bg-slate-500/30 hover:rounded"
                                    role="menuitem"
                                    tabIndex="-1"
                                    id="menu-item-2"
                                >
                                    Settings
                                </a>
                                <button
                                    onClick={handleSignOut}
                                    type="button"
                                    className="block w-full text-left px-4 py-2 text-sm text-gray-200 hover:bg-slate-500/30 hover:rounded"
                                    role="menuitem"
                                    tabIndex="-1"
                                    id="menu-item-3"
                                >
                                    Sign out
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <button
                    type="button"
                    aria-label="Login"
                    className="bg-gradient-to-r from-[#5e2594ec] to-[#270257fd] px-5 py-1 rounded-lg animated-button tracking-[3px] text-[#fccdff] text-[16px] font-bold"
                    onClick={() => setIsModalOpen(true)}
                >
          <span className="bg-gradient-to-r from-[#816aff] to-[#d066fd] text-transparent bg-clip-text">
            Login
          </span>
                </button>
            )}
        </>
    );
}
