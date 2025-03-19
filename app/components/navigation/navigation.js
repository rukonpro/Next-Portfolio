"use client"
import 'aos/dist/aos.css';
import { useSession, signOut } from 'next-auth/react';
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MenuIcon from "@/public/images/menu-bar.png";
import CloseIcon from "@/public/images/close.png";
import LoginModal from "@/app/components/authentication/loginModal";
import AocFuc from "@/app/utils/AOS";
import MobileMenu from "@/app/components/navigation/MobileMenu";
import DesktopMenu from "@/app/components/navigation/DesktopMenu";
import Logo from "@/public/images/rukonpro_logo.png";
import Dropdown from '../ProfileDropdown/dropdown';

export const loginModal = () => document.getElementById("login").showModal();

const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const menuHandler = () => setMenuOpen(value => !value);

    const { data: session, status } = useSession();


    const handleSingOut = () => {
        signOut()
    }
    useEffect(() => {
        AocFuc()
    }, [])


    return (

        <nav className={` fixed scroll-smooth top-0 left-0 z-50 w-full backdrop-blur-3xl`}>

            <ul>
                <li>
                    <ul
                        className="flex  justify-between  items-center xl:px-0 px-5   py-4  max-w-[1200px] mx-auto ">
                        {/* <DrawerMenuMobile /> */}

                        <li>


                            <Link
                                href="/#home"
                                passHref={true}
                                legacyBehavior={true}
                            >
                                <button
                                    type="button"
                                    aria-label="Rukon.Pro"
                                    onClick={() => setMenuOpen(false)}
                                    className="bg-gradient-to-br from-[#816aff] to-[#d066fd] text-transparent bg-clip-text text-[22px] font-bold  tracking-[2px] ">

                                       <Image src={Logo} alt="rukonpro" className=" w-24 md:w-32"/>

                                </button>
                            </Link>
                        </li>


                        <li>
                            <ul className='flex items-start gap-3'>
                                <li className={`hidden lg:block }`}>
                                    <DesktopMenu />
                                </li>

                                <li className="">
                                    <button
                                        type="button"
                                        id="threeDotButton"
                                        onClick={menuHandler}
                                        className={`lg:hidden p-2  bg-gradient-to-tr from-[#030b55ec] to-[#994cd0f5] rounded-full block ${menuOpen ? "focus:rotate-180" : "rotate-0"} duration-1000`}>
                                        {
                                            !menuOpen ? <Image
                                                    className="h-5 w-5 "
                                                    src={MenuIcon}
                                                    alt="icon" /> :
                                                <Image
                                                    className="h-5 w-5"
                                                    src={CloseIcon}
                                                    alt="icon" />
                                        }
                                    </button>
                                </li>

                                <li className="hidden lg:inline-block">
                                    <Dropdown
                                        status={status}
                                        handleSingOut={handleSingOut}
                                        isDialogOpen={isDialogOpen}
                                        setIsDialogOpen={setIsDialogOpen}
                                    />
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className={`  ${!menuOpen ? "hidden" : "block "} lg:hidden duration-700`}>
                    <MobileMenu
                        setMenuOpen={setMenuOpen}
                        dropdown={<Dropdown
                            status={status}
                            handleSingOut={handleSingOut}
                            isDialogOpen={isDialogOpen}
                            setIsDialogOpen={setIsDialogOpen}
                        />}
                        status={status}
                        handleSingOut={handleSingOut}
                        isDialogOpen={isDialogOpen}
                        setIsDialogOpen={setIsDialogOpen}
                    />
                </li>
                <li>
                    <LoginModal
                        isDialogOpen={isDialogOpen}
                        setIsDialogOpen={setIsDialogOpen}
                    />
                </li>
            </ul>

        </nav>

    );
};

export default Navigation;






