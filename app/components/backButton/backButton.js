"use client"
import Arrow from "@/public/images/arrow.png";
import Image from "next/image";

const BackButton = () => {
    return (
        <button
            type="button"
            className="border border-purple-500/70 hover:animate-pulse hover:shadow-fuchsia-300/20  shadow-xl px-5 py-1 rounded"
            onClick={() => {
                window.history.back()
            }}
        >
            <Image src={Arrow} className="h-5 w-6" alt="arrow"/>
        </button>
    );
};

export default BackButton;