import portfolioData from "@/app/assite/portfollioData/portfollioData";
import Link from "next/link";
import Image from "next/image";

const PortfolioMapping = () => {
    return (
        <div>
            <ol className="grid grid-cols-1 md:grid-cols-2 items-center  gap-5  pb-10">
                {portfolioData?.portfolios?.future.map((data) =>{
                    return (
                       <li key={data?.id}
                           data-aos="fade-up"
                           data-aos-anchor-placement="center-bottom"
                           data-aos-duration="1000"
                           className="bg-gradient-to-r from-[#0d1247]/30 to-gray-900/30 hover:bg-[#9669fe]/30 h-full flex items-center py-[16px] px-[32px]  font-[400] rounded-2xl portfolioCardContainer">
                                <Link href={`/portfolios/${data?.id}`}>
                                        <div className="grid grid-cols-3 gap-5 items-center">

                                            <div className="col-span-1">
                                                <h1 className="text-[24px] text-white lg:text-[40px]">{data?.title.split(" ")[0].slice(0, 30)}</h1>
                                            </div>
                                            <div className="col-span-2 portfolioCardImageContainer">
                                                <Image
                                                    className="cursor-pointer  rounded-2xl   portfolioCardAnimation "
                                                    src={data?.images?.[0]}
                                                    alt="protfoliocover"
                                                />
                                            </div>
                                        </div>
                                </Link>
                            </li>
                    )
                })}

            </ol>
        </div>
    );
};

export default PortfolioMapping;