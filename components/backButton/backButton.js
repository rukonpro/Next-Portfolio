"use client"
import Arrow from "@/public/images/arrow.png";
import Image from "next/image";

const BackButton = () => {
    return (
        <button
            type="button"
            className="border-2 px-5 py-1 rounded"
            onClick={() => {
                window.history.back()
            }}
        >
            <Image src={Arrow} className="h-8 w-8" alt="arrow"/>
        </button>
    );
};

export default BackButton;