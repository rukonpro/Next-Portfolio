"use client";
import "aos/dist/aos.css";
import { useSession, signOut } from "next-auth/react";
import React, { useEffect, useState, memo } from "react";
import Link from "next/link";
import Image from "next/image";
import MenuIcon from "@/public/images/menu-bar.png";
import CloseIcon from "@/public/images/close.png";
import RegisterAndLogin from "@/app/components/authentication/loginModal";
import AocFuc from "@/app/utils/AOS";
import MobileMenu from "@/app/components/navigation/MobileMenu";
import DesktopMenu from "@/app/components/navigation/DesktopMenu";
import Logo from "@/public/images/rukonpro_logo.png";
import Dropdown from "../ProfileDropdown/dropdown";
import { usePathname } from "next/navigation";


const Navigation = memo(() => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const pathname = usePathname();
    const { data: session, status } = useSession();

    const toggleMenu = () => setMenuOpen((prev) => !prev);
    const handleSignOut = () => signOut();

    useEffect(() => {
        AocFuc();
    }, []);

    const dropdownProps = {
        status,
        handleSignOut,
        isModalOpen,
        setIsModalOpen,
    };

    return (
       <>
           <nav className="fixed top-0 left-0 z-50 w-full backdrop-blur-3xl">
               <div className="flex justify-between items-center px-5 py-4 max-w-[1200px] mx-auto">
                   <Link href="/home" passHref legacyBehavior>
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
                   </Link>

                   <div className="flex items-center gap-3">
                       {/* Desktop Menu (Visible only on lg and above) */}
                       <DesktopMenu pathname={pathname} className="hidden lg:flex" />

                       {/* Mobile Menu Toggle (Visible only below lg) */}
                       <button
                           type="button"
                           aria-label={menuOpen ? "Close menu" : "Open menu"}
                           onClick={toggleMenu}
                           className={`lg:hidden p-2 bg-gradient-to-tr from-[#030b55ec] to-[#994cd0f5] rounded-full transition-transform duration-500 ${
                               menuOpen ? "rotate-180" : "rotate-0"
                           }`}
                       >
                           <Image
                               src={menuOpen ? CloseIcon : MenuIcon}
                               alt={menuOpen ? "close" : "menu"}
                               width={20}
                               height={20}
                               className="h-5 w-5"
                           />
                       </button>
                       {/* Desktop Dropdown (Visible only on lg and above) */}
                       <div className="hidden lg:inline-block">
                           <Dropdown {...dropdownProps} />
                       </div>
                   </div>
               </div>


           </nav>
           {/* Mobile Menu Modal (Visible only below lg) */}
           <MobileMenu
               pathname={pathname}
               isOpen={menuOpen}
               setMenuOpen={setMenuOpen}

               dropdown={<Dropdown {...dropdownProps} />}
           />
           <RegisterAndLogin
               isModalOpen={isModalOpen}
               setIsModalOpen={setIsModalOpen}
           />
       </>
    );
});

Navigation.displayName = "Navigation";
export default Navigation;
