
import React from 'react';
import Image from "next/image";
import Ellipse from "@/public/images/Ellipse 7.png";
import Icon from "@/public/images/fluent_design-ideas-20-regular.png";

const ServiceItem = ({ title, description, reverse }) => {
    return (
        <div className={`flex gap-2 pt-5 ${reverse ? 'lg:flex-row-reverse' : ''}`}>
            <div>
                <div className="relative w-[68px] h-[68px] flex justify-center items-center">
                    <Image
                        data-aos="zoom-in-right"
                        data-aos-duration="2000"
                        data-aos-delay='0' suppressHydrationWarning
                        className="absolute"
                        src={Ellipse}
                        alt=""/>
                    <Image
                        data-aos="zoom-in-left"
                        data-aos-duration="2000"
                        data-aos-delay='0' suppressHydrationWarning
                        className="absolute"
                        src={Icon}
                        alt=""/>
                </div>
            </div>

            <div className={`md:text-left ${reverse ? 'lg:text-right' : ''}`}>
                <h2
                    data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                    data-aos-delay='0' suppressHydrationWarning
                    className="text-white md:text-2xl text-xl font-bold tracking-[4px]">{title}</h2>
                <p
                    data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                    data-aos-delay='0' suppressHydrationWarning
                    className="text-gray-300 text-base pt-5 font-bold tracking-[1px]">{description}</p>
            </div>
        </div>
    );
};

export default ServiceItem;
