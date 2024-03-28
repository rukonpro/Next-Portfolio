import React from 'react';
import portfollioData from "@/app/assite/portfollioData/portfollioData";
import Link from "next/link";
import {loginModal} from "@/app/components/navigation/navigation";

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
            <li>
                <button
                    type="button"
                    aria-label="Login"
                    className=" bg-gradient-to-r from-[#5e2594ec] to-[#270257fd] px-5 py-1 rounded-lg  animated-button tracking-[3px]  text-[#fccdff]"
                    onClick={loginModal}><span
                    className="bg-gradient-to-r from-[#816aff] to-[#d066fd] text-transparent bg-clip-text">Login</span>
                </button>
            </li>
        </ul>
    );
};

export default DesktopMenu;