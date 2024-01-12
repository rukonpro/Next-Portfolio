"use client"

import React, { useState} from "react";
import Image from "next/image";
import MenuIcon from "@/public/images/menu-bar.png";
import CloseIcon from "@/public/images/close.png";
import LoginModal from "@/components/authentication/loginModal";
import Link from "next/link";
import portfollioData from "@/app/assite/portfollioData/portfollioData";
const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuHandler = () =>setMenuOpen(value => !value);
    const loginModal=()=> document.getElementById("login").showModal();

    return (
        <nav className="fixed z-50 top-0  w-full  duration-500 ">
            <div className={`${menuOpen?"p-3":"p-0"} duration-500`}>

                <div
                    className={`  ${menuOpen ? "  rounded-xl bg-gradient-to-tr from-[#5e2594ec] to-[#270257fd]" +
                        " lg:from-[#0a0e36] lg:to-[#0a0e36] lg:m-0 lg:rounded-none " : " bg-gradient-to-tr" +
                        " from-[#0a0e36]" +
                        " to-[#0a0e36] "} ${!menuOpen && " bg-[#0a0e36] duration-500"} transition-colors `}>
                    <div>
                        <div className="flex  justify-between items-center md:px-8 px-5 py-4   ">
                            <div>
                                <Link
                                    href="/#home"
                                    passHref={true}
                                    legacyBehavior={true}
                                >
                                    <button
                                        type="button"
                                        aria-label="Rukon.Pro"
                                        className="bg-gradient-to-br from-[#816aff] to-[#d066fd] text-transparent bg-clip-text text-[22px] font-bold  tracking-[2px] ">Rukon.Pro
                                    </button>
                                </Link>

                            </div>

                            <div className=" hidden lg:block">

                                <div>
                                    <ul className="flex items-center gap-5 text-white font-bold px-5 text-xl  ">
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
                                                                    className=" text-left w-full rounded-l-full inline-block transition-opacity  py-1 tracking-[2px] text-[#fccdff]">
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
                                </div>
                            </div>
                            <button
                                type="button"
                                id="threeDotButton"
                                onClick={menuHandler}
                                className="lg:hidden p-2  bg-gradient-to-tr from-[#030b55ec] to-[#994cd0f5] rounded-full block">
                                {
                                    !menuOpen ? <Image
                                            className="h-5 w-5"
                                            src={MenuIcon}
                                            alt="icon"/> :
                                        <Image
                                            className="h-5 w-5"
                                            src={CloseIcon}
                                            alt="icon"/>
                                }
                            </button>
                        </div>
                    </div>

                    <div
                        className={`lg:hidden p-1 rounded-b-xl flex flex-col justify-between  duration-500 relative ${menuOpen ? "h-[85vh]" : " h-[0vh] overflow-hidden"}`}>


                        <ul className=" text-white font-bold  text-xl   ">
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
                                                className="animated-button text-left w-full rounded-l-full inline-block transition-opacity hover:bg-gradient-to-l hover:transition-opacity   from-[#9a4cd00d] to-[#270257fd] px-5 py-3 tracking-[2px] text-[#fccdff]">
                                                {nav?.title}
                                            </button>
                                        </Link>
                                    </li>
                                )
                            }

                        </ul>
                        <div className=" bg-gradient-to-l from-[#0a0cd00d] to-[#9a4cd09d] px-5 py-3 rounded-l-full my-3 animated-button w-full">
                            <button
                                type="button"
                                id="loginbuttion1"
                                aria-label="Login"
                                onClick={loginModal}
                                className="w-full tracking-[3px] "><span
                                className="bg-gradient-to-r from-[#816aff] to-[#d066fd] text-transparent bg-clip-text">Login</span>
                            </button>
                        </div>

                    </div>
                </div>
                <LoginModal/>
            </div>
        </nav>
    );
};

export default Navigation;