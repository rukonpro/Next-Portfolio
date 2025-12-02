"use client";
import React, { memo } from "react";
import portfolioData from "@/app/assets/portfolioData/portfolioData";
import Link from "next/link";
import {usePathname} from "next/navigation";
import { useSession } from "next-auth/react";

const DesktopMenu = memo(() => {
    const { data: session, status } = useSession();
    const pathname = usePathname();
    return(
        <div className="hidden md:block ">
            <ul className={`flex items-center gap-5 text-white font-bold text-xl `}>
                {portfolioData?.navLinks?.filter((item) => {
                    const title = item.title.trim().toLowerCase();
                    const userRole = session?.user?.role;

                    // Always hide portfolio link from desktop nav
                    if (title === 'portfolio') {
                        return false;
                    }

                    if (status === 'authenticated') {
                        if (userRole === 'ADMIN') {
                            // ADMIN sees both Profile and Dashboard, but not Login
                            return title !== 'login';
                        } else {
                            // Regular authenticated USER sees Profile, but not Dashboard or Login
                            return !['login', 'dashboard'].includes(title);
                        }
                    } else {
                        // Not authenticated: show Login, hide Profile and Dashboard
                        return !['profile', 'dashboard'].includes(title);
                    }
                }).map((nav, index) =>
                    nav?.title ? (
                        <li
                            key={index}
                            className={pathname === nav?.path ? "active-button" : "animated-button"}
                        >
                            <Link href={nav?.path} passHref legacyBehavior>
                                <button
                                    type="button"
                                    className="py-1 tracking-[2px] text-[16px] text-[#fccdff] bg-gradient-to-r from-[#816aff] to-[#d066fd] text-transparent bg-clip-text hover:bg-gradient-to-l transition-opacity rounded-l-full"
                                >
                                    {nav?.title}
                                </button>
                            </Link>
                        </li>
                    ) : null
                )}
            </ul>
        </div>
    )
});

DesktopMenu.displayName = "DesktopMenu";
export default DesktopMenu;