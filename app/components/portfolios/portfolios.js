import portfolioData from "@/app/assite/portfollioData/portfollioData";
import PortfolioMapping from "@/app/components/portfolios/portfolioMapping";
import {Suspense} from "react";
import Link from "next/link";

const Portfolios = () => {
    return (
        <section
            id="portfolios"
            className="relative  bg-[#0e0e36] py-28 px-5">
            <div className="absolute  inset-0  blur-[118px] radial-gradient"/>

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
                    <p
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        data-aos-duration="2000"
                        className="max-w-4xl  font-bold  text-base text-slate-400 tracking-[2px] md:text-center text-justify">
                        {portfolioData?.portfolios?.description}
                    </p>
                </div>

               <Suspense fallback={"<h1>Loading...</h1>"}>
                   <PortfolioMapping/>
               </Suspense>

                <div className="flex justify-center">
                    <Link
                        href="/portfolios"
                        passHref={true}
                        legacyBehavior={true}
                    >
                        <button
                            aria-label="All Project"
                            type="button"
                            className="text-white text-lg font-bold  w-64 border py-2 px-5 rounded-lg hover:bg-[#350b70] shadow-2xl shadow-fuchsia-300 active:shadow-md active:shadow-fuchsia-100/30">
                            All Project
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Portfolios;