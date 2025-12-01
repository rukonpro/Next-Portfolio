import React, { memo } from "react";
import portfolioData from "@/app/assets/portfolioData/portfolioData";
import Link from "next/link";

const DesktopMenu = memo(({ pathname, className }) => (
    <ul className={`flex items-center gap-5 text-white font-bold text-xl ${className}`}>
        {portfolioData?.navLinks?.filter((item) => {
            const title = item.title.trim().toLowerCase();
            return !['dashboard', 'portfolio','profile'].includes(title);
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
));

DesktopMenu.displayName = "DesktopMenu";
export default DesktopMenu;
