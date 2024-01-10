import React from 'react';
import Navigation from "@/components/navigation/navigation";
import PortfolioMapping from "@/components/portfolios/portfolioMapping";
import BackButton from "@/components/backButton/backButton";

const Portfolios = () => {
    return (
        <div className=" bg-[#0e0e36] min-h-screen overflow-hidden  relative ">
            <Navigation/>

            <div className=" z-10 max-w-[1200px] mx-auto px-5   py-20">
                <div className="flex justify-between items-center py-3"
                     data-aos="fade-up"
                     data-aos-anchor-placement="bottom-bottom"
                     data-aos-duration="1000"
                >
                    <h1 className={`text-white text-xl  font-bold  pt-15 `}>All projects</h1>
                    <BackButton/>
                </div>
                <PortfolioMapping/>
                <div className="flex  justify-center py-3"
                     data-aos="fade-up"
                     data-aos-anchor-placement="bottom-bottom"
                     data-aos-duration="1000"
                >
                    <BackButton/>
                </div>
            </div>

{/*
            <div className="absolute custom-animate-pulse inset-0 blur-[118px] radial-gradient"></div>
*/}


        </div>
    );
};

export default Portfolios;