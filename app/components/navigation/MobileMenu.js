import React from 'react';
import portfollioData from "@/app/assite/portfollioData/portfollioData";
import Link from "next/link";
import { loginModal } from "@/app/components/navigation/navigation";

const MobileMenu = ({ setMenuOpen}) => {

    return (
        <ul className=" text-white font-bold  text-xl  ">
            {
                portfollioData?.navLinks?.map((nav, index) =>
                    <li key={index}>
                        <Link
                            href={nav?.path}
                            passHref={true}
                            legacyBehavior={true}>
                            <button
                                type="button"
                                onClick={() => setMenuOpen(state => !state)}
                                className="animated-button text-center w-full rounded-l-full inline-block transition-opacity hover:bg-gradient-to-l hover:transition-opacity    px-5 py-3 tracking-[2px] text-[#fccdff] bg-gradient-to-r from-[#816aff] to-[#d066fd] text-transparent bg-clip-text">
                                {nav?.title}
                            </button>
                        </Link>
                    </li>
                )
            }
        </ul>
    );
};

export default MobileMenu;