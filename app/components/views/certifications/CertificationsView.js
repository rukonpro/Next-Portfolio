"use client"
import React, {useState} from 'react';
import Marquee from "react-fast-marquee";
import portfolioData from "@/app/assets/portfolioData/portfolioData";
import Image from "next/image";
import Certificate from "./CertificateView";

const Certifications = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [id,setId] = useState(null);
    const openModal =async (id) => {
       await setId(id)
       await setIsModalOpen(true);

    };

    const closeModal = async () => {
      await  setId(null);
      await  setIsModalOpen(false);
    };
    return (
        <div
            className="py-28 certification-bg "
        >

            <div className="relative  max-w-[1200px] mx-auto z-10">
                <div className="flex justify-center">
                    <div className="flex items-center relative">
                        <h1
                            data-aos="fade-up"
                            data-aos-anchor-placement="bottom-bottom"
                            data-aos-duration="1000"
                            className=" relative right-10 text-white z-10 md:text-5xl text-2xl font-bold  ">Certifications</h1>
                    </div>
                </div>

                <div className="flex justify-center">
                    <desc
                        data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom"
                        data-aos-duration="1000"
                        className="  font-bold  text-base text-slate-400 tracking-[2px]  pt-5 max-w-4xl md:text-center  text-justify px-5 "
                    >
                        {`Each certification represents a milestone in my journey towards becoming a seasoned Full stack
                        developer, equipped with the skills and knowledge to tackle complex projects and deliver
                        exceptional results. Whether you're seeking assurance of my capabilities or inspiration for your
                        own professional development, explore my certification showcase and witness the dedication and
                        passion I bring to every project.`}
                    </desc>
                </div>
                <div className="pt-10">
                    <Marquee
                        pauseOnHover={true}
                    >
                        <ol className="flex gap-7 pr-7">
                            {
                                portfolioData?.certifications?.map((data, index) => {
                                    return (
                                        <li key={index}
                                        onClick={()=>openModal(data?.id)}
                                        >
                                            <Image
                                                className="object-fill h-[200px] w-[250px] lg:w-[500px] lg:h-[400px]"
                                                src={data?.image}
                                                placeholder="blur"
                                                loading="lazy"
                                                    alt={data?.title}/>
                                        </li>
                                    )
                                })
                            }
                        </ol>
                    </Marquee>
                </div>

            </div>
            <Certificate isModalOpen={isModalOpen} closeModal={closeModal} id={id}/>
        </div>
    );
};

export default Certifications;
