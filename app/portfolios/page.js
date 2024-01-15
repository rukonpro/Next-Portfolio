import React from 'react';
import Navigation from "@/app/components/navigation/navigation";
import PortfolioMapping from "@/app/components/portfolios/portfolioMapping";
import BackButton from "@/app/components/backButton/backButton";
import Footer from "@/app/components/footer/footer";


export const metadata = {
    title: 'MERN stack dev - Portfolios',
    description: 'Welcome to my portfolios! As a MERN stack developer, I specialize in crafting dynamic and efficient web applications. Below are some key portfolios that showcase my skills and passion for creating seamless user experiences.',
}
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

            <Footer/>

        </div>
    );
};

export default Portfolios;