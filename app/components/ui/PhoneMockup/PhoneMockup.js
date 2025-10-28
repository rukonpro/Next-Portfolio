
import React from 'react';
import Image from "next/image";
import BlueBackCover from "@/public/images/BlueBackCover.webp";
import IphonScreen from "@/public/images/MobileScreen.webp";

const PhoneMockup = () => {
    return (
        <div className="w-[244.63px] h-[494.98px] z-20 p-3 flex justify-center overflow-hidden">
            <Image
                data-aos="zoom-out-right"
                data-aos-offset="10"
                data-aos-duration="2000"
                data-aos-easing="ease-in-sine"
                data-aos-delay='0' suppressHydrationWarning
                className="absolute w-[244.63px] h-[494.98px]"
                src={BlueBackCover}
                alt=""/>
            <Image
                data-aos="zoom-out-left"
                data-aos-offset="10"
                data-aos-duration="2500"
                data-aos-easing="ease-in-sine"
                data-aos-delay='0' suppressHydrationWarning
                className="absolute mt-3  w-[228.63px] h-[470.98px] rounded-3xl "
                src={IphonScreen}
                alt="iPhone screen showing a web application"/>
        </div>
    );
};

export default PhoneMockup;
