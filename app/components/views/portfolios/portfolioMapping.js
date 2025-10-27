"use client"
import portfolioData from "@/app/assets/portfolioData/portfolioData";
import Link from "next/link";
import Image from "next/image";
import ArrowIcon from "@/public/images/arrow.png";
import { useState } from "react";

const PortfolioMapping = () => {
    const [visibleItems, setVisibleItems] = useState(6); // Initial number of items to show
    const [isLoading, setIsLoading] = useState(false); // Loading state
    const itemsPerPage = 6; // Number of items to load each time

    const handleLoadMore = () => {
        setIsLoading(true);
        // Simulate loading delay (remove if you have actual async data fetching)
        setTimeout(() => {
            setVisibleItems(prev => prev + itemsPerPage);
            setIsLoading(false);
        }, 1000); // 1-second delay for demo; adjust as needed
    };

    const hasMoreItems = visibleItems < portfolioData?.portfolios?.future?.length;

    return (
        <div>
            <ol className="grid grid-cols-1 md:grid-cols-2 items-center gap-5 pb-10">
                {portfolioData?.portfolios?.future?.slice(0, visibleItems).map((data) => {
                    return (
                        <li
                            key={data?.id}
                            className="bg-gradient-to-r from-[#0d1247]/30 to-gray-900/30 hover:bg-[#9669fe]/30 h-full flex items-center py-[16px] px-[32px] font-[400] rounded-2xl hover:z-10 portfolioCardContainer relative"
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
                                            alt="portfoliocover"
                                        />
                                    </div>
                                </div>
                            </Link>
                        </li>
                    );
                })}
            </ol>
            {hasMoreItems && (
                <div className="flex justify-center mt-6">
                    <button
                        onClick={handleLoadMore}
                        disabled={isLoading}
                        className={`flex items-center px-6 py-3 rounded-lg transition-colors duration-300  ${
                            isLoading
                                ? "bg-[#7b55cc]/50 cursor-not-allowed"
                                : "bg-[#9669fe]/50 hover:bg-[#7b55cc]/50"
                        } text-white`}
                    >
                        {isLoading ? (
                            <>
                                <svg
                                    className="animate-spin h-5 w-5 mr-2 text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    ></circle>
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    ></path>
                                </svg>
                                Loading...
                            </>
                        ) : (
                            "Load More"
                        )}
                    </button>
                </div>
            )}
        </div>
    );
};

export default PortfolioMapping;