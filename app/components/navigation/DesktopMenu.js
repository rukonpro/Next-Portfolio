import React from 'react';
import portfollioData from "@/app/assite/portfollioData/portfollioData";
import Link from "next/link";


const DesktopMenu = () => {


    return (
        <ul className="flex items-center gap-5 text-white font-bold  text-xl  ">
            {
                portfollioData?.navLinks?.map((nav, index) => {
                    return (
                        nav?.title ? <li key={index} className="animated-button">
                            <Link
                                href={nav?.path}
                                passHref={true}
                                legacyBehavior={true}
                            >
                                <button
                                    type="button"
                                    className=" text-left w-full rounded-l-full inline-block transition-opacity  py-1 tracking-[2px] text-[#fccdff] bg-gradient-to-r from-[#816aff] to-[#d066fd] text-transparent bg-clip-text">
                                    {nav?.title}
                                </button>
                            </Link>
                        </li> : null
                    )
                }
                )
            }

        </ul>
    );
};

export default DesktopMenu;