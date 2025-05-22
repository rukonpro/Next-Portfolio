import portfolioData from "@/app/assite/portfollioData/portfollioData";
import PortfolioMapping from "@/app/components/portfolios/portfolioMapping";
import {Suspense} from "react";
import Link from "next/link";

const Portfolios = () => {
    return (
        <section
            id="portfolios"
            className="  py-28 px-5 portfolio-bg">


            <div className="relative z-10 max-w-[1200px] mx-auto">
                <div className="flex justify-center">
                    <div
                        className="relative  w-[55px] h-[55px] bg-gradient-to-tl from-[#17113a] to-[#8907c0]  animate-spin  rounded-full right-28 customShadow"></div>
                    <h1
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        data-aos-duration="2000"
                        className="text-white z-10 md:text-5xl text-2xl font-bold  absolute tracking-[4px]">
                        {portfolioData?.portfolios?.title}
                    </h1>
                </div>
                <div className="flex justify-center  mt-10 pb-10">
                    <desc
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        data-aos-duration="2000"
                        className="max-w-4xl  font-bold  text-base text-slate-400 tracking-[2px] md:text-center text-justify">
                        {portfolioData?.portfolios?.description}
                    </desc>
                </div>

               <Suspense fallback={"<h1>loading...</h1>"}>
                   <PortfolioMapping/>
               </Suspense>
            </div>
        </section>
    );
};

export default Portfolios;
