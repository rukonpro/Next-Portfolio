import React from 'react';
import Modal from "@/app/components/Modal/Modal";
import Image from "next/image";
import portfolioData from "@/app/assite/portfollioData/portfollioData";
import CloseIcon from "/public/images/close.png";


const Certificate = ({isOpen,closeModal,id}) => {
const image=portfolioData?.certifications?.find(data=>data?.id===id);
    return (
        <Modal isOpen={isOpen} closeModal={closeModal}>
            {
                image?.image &&
                <div className="">
                    <div className="flex justify-between gap-4">
                        <h1 className="text-black pt-5 pb-2  text-xl text-white">{image?.title}</h1>
                        <button type="button"
                                onClick={closeModal}
                                className="text-red-500 text-xl">
                            <Image height={24} src={CloseIcon} alt="close icon" loading="lazy" placeholder="blur"/>
                        </button>
                    </div>
                    <div className="max-w-md">
                        <Image src={image?.image} alt={image?.title} placeholder="blur" loading="lazy" className="object-contain w-full h-full"/>
                    </div>
                </div>
            }
        </Modal>
    );
};

export default Certificate;