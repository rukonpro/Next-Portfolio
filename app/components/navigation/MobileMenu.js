import React, { memo, useEffect, useRef } from "react";
import { gsap } from "gsap";
import portfollioData from "@/app/assite/portfollioData/portfollioData";
import Link from "next/link";
import CloseIcon from "@/public/images/close.png";
import Image from "next/image";
import Logo from "@/public/images/rukonpro_logo.png";

const MobileMenu = memo(({ pathname, isOpen, setMenuOpen, dropdown }) => {
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

            // Animate modal with only opacity
            gsap.fromTo(
                modal,
                { opacity: 0 },
                { opacity: 1, duration: 0.5, ease: "power2.out" }
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

            // Animate modal fade-out
            gsap.to(modal, {
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
                className="fixed inset-0 bg-black/60 z-40 hidden top-0"
                onClick={toggleMenu}
            />

            {/* Modal Content */}
            <div
                ref={modalRef}
                className="fixed inset-0 z-50 items-center justify-center hidden h-full w-full flex-col  backdrop-blur-3xl"
                style={{ willChange: "backdrop-filter, opacity" }}
            >
                <div className="w-full flex justify-between px-5 py-4 top-0 fixed z-10 backdrop-blur-3xl ">
                    <button
                        type="button"
                        aria-label="Rukon.Pro"
                        onClick={() => setMenuOpen(false)}
                        className="bg-gradient-to-br from-[#816aff] to-[#d066fd] text-transparent bg-clip-text text-[22px] font-bold tracking-[2px]"
                    >
                        <Image
                            src={Logo}
                            alt="rukonpro"
                            width={96}
                            height={32}
                            className="md:w-32"
                            priority
                        />
                    </button>
                    {/* Close Button */}
                    <button
                        type="button"
                        aria-label="Close menu"
                        onClick={toggleMenu}
                        className={`lg:hidden p-2 bg-gradient-to-tr from-[#030b55ec] to-[#994cd0f5] rounded-full transition-transform duration-500 ${
                            isOpen ? "rotate-180" : "rotate-0"
                        }`}
                    >
                        <Image
                            src={CloseIcon}
                            alt="close"
                            width={20}
                            height={20}
                            className="h-5 w-5"
                        />
                    </button>
                </div>
                <div className=" w-full h-full flex flex-col items-center justify-center relative overflow-y-auto overflow-x-hidden">
                    {/* Menu Container */}
                    <div className="w-full ">
                        <ul className="text-white font-bold text-xl flex flex-col items-center justify-center">
                            {portfollioData?.navLinks?.map((nav) => (
                                <li
                                    key={nav?.title}
                                    className={`${pathname === nav?.path ? "active-button" : "animated-button"} justify-center inline-block`}
                                >
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
                            {/* Dropdown Section */}
                            <li>
                                <div className="my-8 flex justify-center">{dropdown}</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    );
});

MobileMenu.displayName = "MobileMenu";
export default MobileMenu;
