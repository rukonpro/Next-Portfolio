
import React from 'react';
import Image from "next/image";
import Link from "next/link";
import ArrowIcon from "@/public/images/arrow.png";

const PortfolioCard = ({ data }) => {
    return (
        <li
            key={data?.id}
            className="bg-gradient-to-r from-blue-800/30 to-gray-900/30 hover:bg-purple-500/30 h-full flex items-center py-[16px] px-[32px] font-[400] rounded-2xl hover:z-10 portfolioCardContainer relative"
        >
            <div className="arrowIcon absolute">
                <div className="w-11 rotate-180">
                    <Image src={ArrowIcon} alt="" />
                </div>
            </div>
            <Link href={`/portfolios/${data?.id}`}>
                <div className="grid grid-cols-3 gap-5 items-center">
                    <div className="col-span-1">
                        <h1 className="text-[24px] text-white lg:text-[40px]">
                            {data?.title.split(" ")[0].slice(0, 30)}
                        </h1>
                    </div>
                    <div className="col-span-2 portfolioCardImageContainer">
                        <Image
                            className="cursor-pointer rounded-2xl portfolioCardAnimation"
                            src={data?.images?.[0]}
                            alt={data?.title}
                        />
                    </div>
                </div>
            </Link>
        </li>
    );
};

export default PortfolioCard;
