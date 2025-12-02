import BlueBackCover from "@/public/images/BlueBackCover.webp";
import IphonScreen from "@/public/images/MobileScreen.webp";
import Icon from "@/public/images/fluent_design-ideas-20-regular.png";
import Ellipse from "@/public/images/Ellipse 7.png";
import Image from "next/image";
import RootLayoutAnimated from "@/app/components/rootLayoutAnimated/rootLayoutAnimated";

import React from "react";

const Services = () => {
    return (
        <section id="services"
                 className=" services-bg    py-28 px-3">

                 <RootLayoutAnimated>
                    <div className="max-w-[1200px] relative z-10 mx-auto ">
                        <div className="flex justify-center">
                            <div className="flex items-center relative">
                                <div
                                    className="  w-[55px] h-[55px] bg-gradient-to-tl from-[#17113a] to-[#8907c0]  animate-spin rounded-full  customShadow"></div>
                                <h1
                                    data-aos="fade-up"
                                    data-aos-anchor-placement="bottom-bottom"
                                    data-aos-delay='0' suppressHydrationWarning
                                    className=" relative right-10 text-white z-10 md:text-5xl text-2xl font-bold  tracking-[4px]">My services</h1>
                            </div>
                        </div>
                        <div className="flex justify-center px-5 mt-10 pb-10">
                            <p
                                data-aos="fade-up"
                                data-aos-anchor-placement="bottom-bottom"
                                data-aos-duration="1000"
                                data-aos-delay='0' suppressHydrationWarning
                                className="max-w-4xl  font-bold  text-base text-slate-400 tracking-[2px] md:text-center text-justify">If you looking for a developer with expertise in a stack typically associated with web development, here a brief description of the MEAN stack, which is a popular choice</p>
                        </div>

                        <div className="lg:flex flex-none justify-center mt-10">


                            <div className="block lg:hidden pb-20" >
                                <div className="flex justify-center">

                                        <div className="w-[244.63px] h-[494.98px] z-20 p-3 flex justify-center overflow-hidden">
                                            <Image
                                                data-aos="zoom-out-right"
                                                data-aos-offset="10"
                                                data-aos-duration="2000"
                                                data-aos-easing="ease-in-sine"
                                                data-aos-delay='0' suppressHydrationWarning
                                                className="absolute w-[244.63px] h-[494.98px]"
                                                src={BlueBackCover}
                                                alt="BlueBackCover"/>
                                            <Image
                                                data-aos="zoom-out-left"
                                                data-aos-offset="10"
                                                data-aos-duration="2500"
                                                data-aos-easing="ease-in-sine"
                                                data-aos-delay='0' suppressHydrationWarning
                                                className="absolute mt-3  w-[228.63px] h-[470.98px] rounded-3xl "
                                                src={IphonScreen}
                                                alt="IphonScreen"/>
                                        </div>
                                </div>
                            </div>

                            <div className="flex flex-col justify-between  gap-5">
                                <div className="flex gap-2 lg:flex-row-reverse">
                                    <div>
                                        <div className="relative w-[68px] h-[68px] flex justify-center items-center">
                                            <Image
                                                data-aos="zoom-in-right"
                                                data-aos-duration="2000"
                                                data-aos-delay='0' suppressHydrationWarning
                                                className="absolute"
                                                src={Ellipse}
                                                alt="Ellipse"/>
                                            <Image
                                                data-aos="zoom-in-left"
                                                data-aos-duration="2000"
                                                data-aos-delay='0' suppressHydrationWarning
                                                className="absolute"
                                                src={Icon}
                                                alt="Ellipse"
                                                />
                                        </div>
                                    </div>

                                    <div className="md:text-left lg:text-right">
                                        <h1
                                            data-aos="fade-up"
                                            data-aos-anchor-placement="bottom-bottom"
                                            data-aos-delay='0' suppressHydrationWarning
                                            className="  text-white md:text-2xl text-xl font-bold  tracking-[4px]">Front-End</h1>
                                        <p
                                            data-aos="fade-up"
                                            data-aos-anchor-placement="bottom-bottom"
                                            data-aos-delay='0' suppressHydrationWarning
                                            className=" text-gray-300 text-base pt-5 font-bold tracking-[1px]">As well as making responsive front-end development with popular javascript frameworks such as React.js, familiar with Vue.js, HTML5, CSS3, Bootstrap4&5,and MaterialUI.</p>
                                    </div>
                                </div>

                                <div className="flex gap-2 pt-5 lg:flex-row-reverse">
                                    <div>
                                            <div className="relative w-[68px] h-[68px] flex justify-center items-center">
                                                <Image
                                                    data-aos="zoom-in-right"
                                                    data-aos-duration="2000"
                                                    data-aos-delay='0' suppressHydrationWarning
                                                    className="absolute"
                                                    src={Ellipse}
                                                    alt="Ellipse"/>
                                                <Image
                                                    data-aos="zoom-in-left"
                                                    data-aos-duration="2000"
                                                    data-aos-delay='0' suppressHydrationWarning
                                                    className="absolute"
                                                    src={Icon}
                                                    alt="Icon"/>
                                            </div>
                                    </div>

                                    <div className="md:text-left lg:text-right">
                                        <h1
                                            data-aos="fade-up"
                                            data-aos-anchor-placement="bottom-bottom"
                                            data-aos-delay='0' suppressHydrationWarning
                                            className="  text-white md:text-2xl text-xl font-bold  tracking-[4px]">Back-End</h1>
                                        <p data-aos="fade-up"
                                            data-aos-anchor-placement="bottom-bottom"
                                            data-aos-delay='0' suppressHydrationWarning
                                            className=" text-gray-300 text-base pt-5 font-bold  tracking-[1px]">Utilising node.js, express.js, mongoDB, firebase, heroku, including REST APIs, and more. Building e-services, e-commerce, e-learning and more website and web applications. </p>
                                    </div>
                                </div>
                                <div className="flex gap-2   lg:flex-row-reverse">
                                    <div>
                                        <div className="relative w-[68px] h-[68px] flex justify-center items-center">
                                            <Image
                                                data-aos="zoom-in-right"
                                                data-aos-duration="2000"
                                                data-aos-delay='0' suppressHydrationWarning
                                                className="absolute" src={Ellipse}
                                                alt="Ellipse"/>
                                            <Image
                                                data-aos="zoom-in-left"
                                                data-aos-duration="2000"
                                                data-aos-delay='0' suppressHydrationWarning
                                                className="absolute"
                                                src={Icon}
                                                alt="Icon"/>
                                        </div>
                                    </div>
                                    <div className="lg:text-right">
                                        <h1
                                            data-aos="fade-up"
                                            data-aos-anchor-placement="bottom-bottom"
                                            data-aos-delay='0' suppressHydrationWarning
                                            className="  text-white md:text-2xl text-xl font-bold  tracking-[4px]">Template</h1>
                                        <p  data-aos="fade-up"
                                            data-aos-anchor-placement="bottom-bottom"
                                            data-aos-delay='0' suppressHydrationWarning
                                            className="  text-gray-300 pt-5 font-bold  tracking-[1px]">As well as making responsive web template with HTML5, CSS3, Bootstrap4&5, Tailwind-CSS and Metaril UI. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:block hidden px-3">
                                    <div className="w-[244.63px] h-[494.98px] z-20 p-3 flex justify-center overflow-hidden">
                                        <Image className="absolute w-[244.63px] h-[494.98px]"
                                             data-aos="zoom-out-right"
                                             data-aos-offset="10"
                                             data-aos-duration="2000"
                                             data-aos-easing="ease-in-sine"
                                             data-aos-delay='0' suppressHydrationWarning
                                             src={BlueBackCover}
                                             alt="BlueBackCover"/>
                                        <Image className="absolute mt-3  w-[228.63px] h-[470.98px] rounded-3xl "
                                             data-aos="zoom-out-left"
                                             data-aos-offset="10"
                                             data-aos-duration="2500"
                                             data-aos-easing="ease-in-sine"
                                             data-aos-delay='0' suppressHydrationWarning
                                             src={IphonScreen}
                                             alt="IphonScreen"/>
                                    </div>
                            </div>
                            <div className="flex flex-col justify-between gap-5">
                                <div className="flex gap-2 pt-5">
                                    <div>
                                            <div className="relative w-[68px] h-[68px] flex justify-center items-center">
                                                <Image
                                                    data-aos="zoom-in-right"
                                                    data-aos-duration="2000"
                                                    data-aos-delay='0' suppressHydrationWarning
                                                    className="absolute" src={Ellipse}
                                                    alt="Ellipse"/>
                                                <Image
                                                    data-aos="zoom-in-left"
                                                    data-aos-duration="2000"
                                                    data-aos-delay='0' suppressHydrationWarning
                                                    className="absolute" src={Icon}
                                                    alt="Icon"/>
                                            </div>
                                    </div>

                                    <div>
                                        <h1
                                            data-aos="fade-up"
                                            data-aos-anchor-placement="bottom-bottom"
                                            data-aos-delay='0' suppressHydrationWarning
                                            className=" text-left text-white md:text-2xl text-xl  font-bold  tracking-[2px]">Full-Stack Development</h1>
                                        <p
                                            data-aos="fade-up"
                                            data-aos-anchor-placement="bottom-bottom"
                                            data-aos-delay='0' suppressHydrationWarning
                                            className="text-left text-gray-300 text-base pt-5 font-bold  tracking-[1px]"> Full-stack developers are proficient in both frontend and backend development, allowing them to work on the entire web application development process.</p>
                                    </div>

                                </div>
                                <div className="flex gap-2 pt-5">
                                    <div>
                                        <div className="relative w-[68px] h-[68px] flex justify-center items-center">
                                                <Image
                                                    data-aos="zoom-in-right"
                                                    data-aos-duration="2000"
                                                    data-aos-delay='0' suppressHydrationWarning
                                                    className="absolute" src={Ellipse}
                                                    alt="Ellipse"/>
                                                <Image
                                                    data-aos="zoom-in-left"
                                                    data-aos-duration="2000"
                                                    data-aos-delay='0' suppressHydrationWarning
                                                    className="absolute" src={Icon}
                                                    alt="Icon"/>
                                        </div>
                                    </div>
                                    <div>
                                        <h1
                                            data-aos="fade-up"
                                            data-aos-anchor-placement="bottom-bottom"
                                            data-aos-delay='0' suppressHydrationWarning
                                            className=" text-left text-white md:text-2xl text-xl font-bold  tracking-[4px]">Web Hosting and Maintenance</h1>
                                        <p
                                            data-aos="fade-up"
                                            data-aos-anchor-placement="bottom-bottom"
                                            data-aos-delay='0' suppressHydrationWarning
                                            className="text-left text-gray-300 text-base pt-5  font-bold  tracking-[1px]">After development, websites and applications need hosting and ongoing maintenance to ensure they remain secure, updated, and operational.</p>
                                    </div>

                                </div>
                                <div className="flex gap-2 pt-5">
                                    <div>
                                        <div className="relative w-[68px] h-[68px] flex justify-center items-center">
                                                <Image
                                                    data-aos="zoom-in-right"
                                                    data-aos-duration="2000"
                                                    data-aos-delay='0' suppressHydrationWarning
                                                    className="absolute" src={Ellipse}
                                                    alt="Ellipse"/>
                                                <Image
                                                    data-aos="zoom-in-left"
                                                    data-aos-duration="2000"
                                                    data-aos-delay='0' suppressHydrationWarning
                                                    className="absolute" src={Icon}
                                                    alt="Icon"/>
                                        </div>

                                    </div>

                                    <div>
                                        <h1
                                            data-aos="fade-up"
                                            data-aos-anchor-placement="bottom-bottom"
                                            data-aos-delay='0' suppressHydrationWarning
                                            className=" text-left text-white md:text-2xl text-xl  font-bold  tracking-[4px]">E-commerce
                                            Development</h1>
                                        <p
                                            data-aos="fade-up"
                                            data-aos-anchor-placement="bottom-bottom"
                                            data-aos-delay='0' suppressHydrationWarning
                                            className="text-left text-gray-300 text-base pt-5 font-bold  tracking-[1px]">Specialized in creating online stores, e-commerce developers enable businesses to sell products and services online, often integrating payment gateways and shopping cart functionality.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </RootLayoutAnimated>
        </section>
    );
};

export default Services;
