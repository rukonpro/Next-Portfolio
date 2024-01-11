import React from 'react';
import Link from "next/link";
import FollowUs from "@/components/followUs/followUs";

const Footer = () => {
    return (
        <footer className=" bg-[#0e0e36] relative pt-32 max-h-max">
            <div className="absolute w-full z-10 ">
                <div className=" max-w-[1200px] px-5  mx-auto ">
                    <div className="grid lg:grid-cols-3">
                        <div>
                            <h1 className="text-[30px] md:text-4xl lg:text-left text-center bg-gradient-to-br from-[#816aff]  to-[#d066fd] text-transparent bg-clip-text ">MD.
                                Rukon Uddin</h1>
                            <ol className="text-center lg:text-left pt-10 text-[#fccdff]">
                                <li className="py-3 text-[14px] tracking-[2px]">
                                    Sunamganj-3110, Sylhet, Bangladesh.
                                </li>
                                <li className="py-3 text-[14px] tracking-[2px]">
                                    Tel:- <a href="tel:+8801765459224">+8801765459224</a>
                                </li>
                                <li className="py-3  text-[14px] tracking-[2px]">

                                    Mail:- <a href="mailto: rukon.pro@gmail.com"> rukon.pro@gmail.com</a>
                                </li>
                                <li className="py-3  text-[14px] tracking-[2px]">
                                    (Available : Any time)
                                </li>
                            </ol>
                        </div>

                        <div>
                            <ol className="text-[#fccdff] flex flex-wrap lg:flex-col justify-center items-center lg:items-start gap-1 lg:gap-0 pt-10 lg:pt-0">
                                <li className="py-2 text-[14px] tracking-[2px]">
                                    <a href="/#home">Home</a>
                                </li>
                                <li className="block lg:hidden">|</li>
                                <li className="py-2 text-[14px] tracking-[2px]">
                                    <a href="/#about">About</a>
                                </li>
                                <li className="block lg:hidden">|</li>
                                <li className="py-2 text-[14px] tracking-[2px]">
                                    <a href="/#services"> Services</a>
                                </li>
                                <li className="block lg:hidden">|</li>
                                <li className="py-2 text-[14px] tracking-[2px]">
                                    <a href="/#portfolio">Portfolios</a>
                                </li>
                                <li className="block lg:hidden">|</li>
                                <li className="py-2 text-[14px] tracking-[2px]">
                                    <a href="/#blogs">Blogs</a>
                                </li>
                                <li className="block lg:hidden ">|</li>
                                <li className="py-2 text-[14px] tracking-[2px]">
                                    <a href="/#blogs">skills</a>
                                </li>
                                <li className="block lg:hidden ">|</li>
                                <li className="py-2 text-[14px] tracking-[2px]">
                                    <a href="/#contact">Contact</a>
                                </li>
                            </ol>
                        </div>
                        <div className='w-full flex justify-center'>
                            <div className="pt-10 lg:pt-0">
                                <h1 className="text-center text-[#fccdff] font-bold tracking-[5px]">Follow Us</h1>
                                <FollowUs/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" flex flex-col lg:flex-row justify-between blur-[70px] ">
                <div className=" h-60 w-full  bg-gradient-to-tl from-[#22062d] to-[#532f82] rounded-full"/>
                <div className=" h-[30vh] w-full  bg-gradient-to-tr from-[#230a48] to-[#282f5b]  rounded-full"/>
                <div className="h-10 lg:h-60 w-full  bg-gradient-to-tl from-[#380644] to-[#36084b]  rounded-full"/>
            </div>
            <div className=" flex justify-center py-5 text-white z-10 pt-10">
                <h1 className="text-gray-400">Copy right &copy;{new Date().getFullYear()} <span
                    className="bg-gradient-to-br from-[#816aff] to-[#d066fd] text-transparent bg-clip-text ">Rukon.Pro</span>
                </h1>
            </div>
        </footer>
    );
};

export default Footer;