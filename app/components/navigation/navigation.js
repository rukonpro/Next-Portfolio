"use client"
import 'aos/dist/aos.css';
import React, {useEffect, useState} from "react";
import Link from "next/link";
import Image from "next/image";
import MenuIcon from "@/public/images/menu-bar.png";
import CloseIcon from "@/public/images/close.png";
import LoginModal from "@/app/components/authentication/loginModal";
import AocFuc from "@/app/utils/AOS";
import MobileMenu from "@/app/components/navigation/MobileMenu";
import DesktopMenu from "@/app/components/navigation/DesktopMenu";

export const loginModal = () => document.getElementById("login").showModal();
const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuHandler = () => setMenuOpen(value => !value);



    useEffect(() => {
        AocFuc()
    }, [])


    return (
        <nav className={`fixed z-50 top-0 items-center  w-full ${menuOpen?"h-[100vh] lg:h-16 ":"lg:h-18" +
            " via-violet-900/30"}   bg-gradient-to-tr from-blue-950/95 to-purple-950/95 via-sky-950/95  `}>
            <div>
                <div>
                    <div>
                        <div
                            className="flex  justify-between items-center xl:px-0 px-5   py-4  max-w-[1200px] mx-auto ">
                            <Link
                                href="/#home"
                                passHref={true}
                                legacyBehavior={true}
                            >
                                <button
                                    type="button"
                                    aria-label="Rukon.Pro"
                                    onClick={()=>setMenuOpen(false)}
                                    className="bg-gradient-to-br from-[#816aff] to-[#d066fd] text-transparent bg-clip-text text-[22px] font-bold  tracking-[2px] ">Rukon.Pro
                                </button>
                            </Link>

                            <button
                                type="button"
                                id="threeDotButton"
                                onClick={menuHandler}
                                className={`lg:hidden p-2  bg-gradient-to-tr from-[#030b55ec] to-[#994cd0f5] rounded-full block ${menuOpen?"focus:rotate-180":"rotate-0"} duration-1000`}>
                                {
                                    !menuOpen ? <Image
                                            className="h-5 w-5 "
                                            src={MenuIcon}
                                            alt="icon"/> :
                                        <Image
                                            className="h-5 w-5"
                                            src={CloseIcon}
                                            alt="icon"/>
                                }
                            </button>

                            <div className={`hidden lg:block }`}>
                                <DesktopMenu />
                            </div>
                        </div>
                    </div>

                    <div className={`  ${!menuOpen ? "hidden" : "block "} lg:hidden duration-700`}>
                        <MobileMenu setMenuOpen={setMenuOpen}/>
                    </div>
                </div>
                <LoginModal/>
            </div>
        </nav>
    );
};

export default Navigation;






