import React, { memo, useEffect, useRef } from "react";
import { gsap } from "gsap";
import portfollioData from "@/app/assite/portfollioData/portfollioData";
import Link from "next/link";
import CloseIcon from "@/public/images/close.png";
import Image from "next/image";

const MobileMenu = memo(({ isOpen, setMenuOpen, dropdown }) => {
    const modalRef = useRef(null);
    const overlayRef = useRef(null);

    const toggleMenu = () => setMenuOpen((prev) => !prev);

    useEffect(() => {
        const modal = modalRef.current;
        const overlay = overlayRef.current;

        if (isOpen) {
            gsap.set(modal, { display: "flex" });
            gsap.set(overlay, { display: "block" });

            // Animate overlay fade-in
            gsap.to(overlay, {
                opacity: 0.6,
                duration: 0.3,
                ease: "power2.out",
            });

            // Animate modal from small (top-right) to full-screen
            gsap.fromTo(
                modal,
                {
                    scale: 0.3, // Start small
                    x: "75%", // Start near right edge
                    y: "-75%", // Start near top edge
                    opacity: 0,
                },
                {
                    scale: 1, // Grow to full size
                    x: "0%", // Move to left edge
                    y: "0%", // Move to top edge
                    opacity: 1,
                    duration: 0.5,
                    ease: "back.out(1.7)",
                }
            );
        } else {
            // Animate overlay fade-out
            gsap.to(overlay, {
                opacity: 0,
                duration: 0.3,
                ease: "power2.in",
                onComplete: () => {
                    overlay.style.display = "none";
                },
            });

            // Animate modal back to small (top-right)
            gsap.to(modal, {
                scale: 0.3, // Shrink back
                x: "75%", // Move to right edge
                y: "-75%", // Move above top edge
                opacity: 0,
                duration: 0.4,
                ease: "power2.in",
                onComplete: () => {
                    modal.style.display = "none";
                },
            });
        }
    }, [isOpen]);

    return (
        <>
            {/* Overlay */}
            <div
                ref={overlayRef}
                className="fixed inset-0 bg-black/60 z-50 lg:hidden hidden"
                onClick={toggleMenu}
            />

            {/* Modal Content */}
            <div
                ref={modalRef}
                className="fixed inset-0 z-50 items-center justify-center lg:hidden hidden h-screen w-full flex-col  backdrop-blur-xl"
            >
                <div className="relative w-full h-full flex flex-col items-center justify-center">
                    {/* Close Button */}
                    <button
                        type="button"
                        aria-label="Close menu"
                        onClick={toggleMenu}
                        className="absolute top-4 right-4 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300"
                    >
                        <Image
                            src={CloseIcon}
                            alt="close"
                            width={24}
                            height={24}
                            className="h-6 w-6"
                        />
                    </button>

                    {/* Menu Container */}
                    <div className="w-full max-w-md">
                        <ul className="text-white font-bold text-xl space-y-6">
                            {portfollioData?.navLinks?.map((nav) => (
                                <li key={nav?.title} className="flex justify-center">
                                    <Link href={nav?.path} passHref legacyBehavior>
                                        <button
                                            type="button"
                                            onClick={toggleMenu}
                                            className="w-full max-w-xs px-6 py-3 text-center text-[16px] text-[#fccdff] bg-gradient-to-r from-[#816aff] to-[#d066fd] text-transparent bg-clip-text hover:bg-gradient-to-l hover:bg-white/10 rounded-full transition-all duration-300"
                                        >
                                            {nav?.title}
                                        </button>
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* Dropdown Section */}
                        <div className="mt-8 flex justify-center">
                            {dropdown}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
});

MobileMenu.displayName = "MobileMenu";
export default MobileMenu;
