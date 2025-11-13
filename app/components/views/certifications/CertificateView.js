import React from 'react';
import Modal from "@/app/components/ui/Modal/Modal";
import Image from "next/image";
import portfolioData from "@/app/assets/portfolioData/portfolioData";
import CloseIcon from "/public/images/close.png";


const Certificate = ({isModalOpen,closeModal,id}) => {
const image=portfolioData?.certifications?.find(data=>data?.id===id);
    return (
        <Modal isModalOpen={isModalOpen} closeModal={closeModal}>
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
