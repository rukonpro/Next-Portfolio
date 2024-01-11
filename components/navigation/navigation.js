"use client"

import React, { useState} from "react";
import Image from "next/image";
import MenuIcon from "@/public/images/menu-bar.png";
import CloseIcon from "@/public/images/close.png";
import LoginModal from "@/components/authentication/loginModal";
import Link from "next/link";
const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navLinks = [
        {
            title: "Home",
            path: "/#home",
        },
        {
            title: "About",
            path: "/#about",
        },
        {
            title: "Skills",
            path: "/#skills",
        },
        {
            title: "Services",
            path: "/#services",
        },

        {
            title: "Portfolio",
            path: "/#portfolios",
        },
        {
            title: "Blogs",
            path: "/#blogs",
        },
        {
            title: "Contact",
            path: "/#contact",
        },
    ];

    const menuHandler = () =>setMenuOpen(value => !value);
    const loginModal=()=> document.getElementById("login").showModal();

    return (
        <nav className="fixed z-50 top-0  w-screen">

            <div
                className={`  ${menuOpen ? " m-3 rounded-xl bg-gradient-to-tr from-[#5e2594ec] to-[#270257fd]" +
                    " lg:from-[#0a0e36] lg:to-[#0a0e36] lg:m-0 lg:rounded-none" : " bg-gradient-to-tr from-[#0a0e36] to-[#0a0e36] "} ${!menuOpen && " bg-[#0a0e36]"}`}>
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
                                    onClick={()=>setMenuOpen(state=>!state)}
                                    aria-label="Rukon.Pro"
                                    className="bg-gradient-to-br from-[#816aff] to-[#d066fd] text-transparent bg-clip-text text-[22px] font-bold  tracking-[2px] ">Rukon.Pro
                                </button>
                            </Link>

                        </div>

                        <div className=" hidden lg:block">

                            <div>
                                <ul className="flex items-center gap-5 text-white font-bold px-5 text-xl  ">
                                    {
                                        navLinks?.map((nav, index) =>{
                                            return (
                                                nav?.title ? <li className="animated-button" key={index}>
                                                    <Link
                                                        href={nav?.path}
                                                        passHref={true}
                                                        legacyBehavior={true}
                                                        className="tracking-[2px] text-[#fccdff]"
                                                    >
                                                            {nav?.title}
                                                    </Link>
                                                </li>:null
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

                <div className={`lg:hidden p-1 rounded-b-xl  ${menuOpen ? "block" : "hidden"}`}>


                    <ul className=" text-white font-bold  text-xl   ">
                        {
                            navLinks?.map((nav, index) =>
                                <li key={index}>
                                    <Link
                                        href={nav?.path}
                                        onClick={()=>setMenuOpen(state=>!state)}
                                        passHref={true}
                                        legacyBehavior={true}
                                        className="animated-button w-full rounded-l-full inline-block transition-opacity hover:bg-gradient-to-l hover:transition-opacity   from-[#9a4cd00d] to-[#270257fd] px-5 py-3 tracking-[2px] text-[#fccdff]">{nav?.title}</Link>
                                </li>
                            )
                        }
                        <li className=" bg-gradient-to-l from-[#0a0cd00d] to-[#9a4cd09d] px-5 py-3 rounded-l-full my-3 animated-button w-full">
                            <button
                                type="button"
                                id="loginbuttion1"
                                aria-label="Login"
                                onClick={loginModal}
                                className="w-full tracking-[3px] "><span
                                className="bg-gradient-to-r from-[#816aff] to-[#d066fd] text-transparent bg-clip-text">Login</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
                <LoginModal/>
        </nav>
    );
};

export default Navigation;