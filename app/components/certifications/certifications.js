import React from 'react';
import Marquee from "react-fast-marquee";
import portfolioData from "@/app/assite/portfollioData/portfollioData";
import Image from "next/image";

const Certifications = () => {
    return (
        <div
            className="py-28 relative bg-[#0e0e36]"
        >
            <div className="absolute custom-animate-pulse inset-0 blur-[118px] radial-gradient"></div>
            <div className="relative z-10">
                <div className="flex justify-center">
                    <div className="flex items-center relative">
                        <div
                            className="  w-[55px] h-[55px] bg-gradient-to-tl from-[#17113a] to-[#8907c0]  animate-spin rounded-full  customShadow"></div>
                        <h1
                            data-aos="fade-up"
                            data-aos-anchor-placement="bottom-bottom"
                            data-aos-duration="1000"
                            className=" relative right-10 text-white z-10 md:text-5xl text-2xl font-bold  ">Certifications</h1>
                    </div>
                </div>

                <div className="pt-10">
                    <Marquee
                        pauseOnHover={true}
                    >
                        <ol className="flex gap-7 pr-7">
                            {
                                portfolioData?.certifications?.map((data, index) => {
                                    return (
                                        <li key={index} >
                                                <Image
                                                    className="object-fill h-[200px] w-[250px] lg:w-[500px] lg:h-[400px]"
                                                    src={data?.image}
                                                    placeholder="blur"
                                                    alt={data?.title}/>
                                        </li>
                                    )
                                })
                            }
                        </ol>
                    </Marquee>
                </div>
            </div>
        </div>
    );
};

export default Certifications;