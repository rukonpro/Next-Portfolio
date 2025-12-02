"use client";

import React, {useEffect} from "react";
import Link from "next/link";
import Image from "next/image";
import DesktopMenu from "./DesktopMenu";
import Logo from "@/public/images/rukonpro_logo.png";
import AocFuc from "@/app/utils/AOS";
import "aos/dist/aos.css";

const Navigation =() => {
    useEffect(() => {
        AocFuc();
    }, []);
    return (
       <React.Fragment>
           <nav className="fixed top-0 left-0 z-50 w-full backdrop-blur-3xl bg-transparent">
               <div className="flex justify-between items-center px-5 py-4 max-w-[1200px] mx-auto">
                   <Link href="/home" passHref legacyBehavior>
                       <button
                           type="button"
                           aria-label="Rukon.Pro"
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
                   <DesktopMenu />
               </div>
           </nav>
       </React.Fragment>
    );
};

Navigation.displayName = "Navigation";
export default Navigation;
