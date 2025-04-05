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

                    <div>
                        <h1 className="  pb-2  text-xl text-white pt-7">{image?.title}</h1>
                        <Image src={image?.image} alt={image?.title}   loading="lazy" className="object-contain " />
                    </div>

            }
        </Modal>
    );
};

export default Certificate;
