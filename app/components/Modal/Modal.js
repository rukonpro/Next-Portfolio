"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import CloseIcon from "@/public/images/close.png"; // Assuming this is your close icon

const Modal = ({ isOpen, closeModal, children }) => {
    const modalRef = useRef(null);
    const overlayRef = useRef(null);

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

    const handleOutsideClick = (e) => {
        if (e.target === e.currentTarget) {
            closeModal(); // Close only when clicking outside the modal content
        }
    };

    return (
        <div className="relative">
            {/* Overlay */}
            <div
                ref={overlayRef}
                className="fixed inset-0 bg-black/60 !z-50 hidden h-screen w-screen "
                onClick={handleOutsideClick}
            />

            {/* Modal Content */}
            <div
                ref={modalRef}
                className="fixed inset-0 !z-50 flex items-center justify-center w-full h-screen hidden backdrop-blur-md"
            >
                <div className="relative max-w-xl w-full bg-white/5 backdrop-blur-md rounded-xl shadow-lg p-6">
                    {/* Close Button */}
                    <button
                        type="button"
                        aria-label="Close modal"
                        onClick={closeModal}
                        className="absolute !z-50 top-4 right-4 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300"
                    >
                        <Image
                            src={CloseIcon}
                            alt="close"
                            width={24}
                            height={24}
                            className="h-6 w-6"
                        />
                    </button>
                    {/* Modal Children (Content) */}
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;
