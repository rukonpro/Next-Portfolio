import portfolioData from "@/app/assets/portfolioData/portfolioData";
import GetStartButton from "@/app/components/ui/getStartButton/getStartButton";
import RootLayoutAnimated from "@/app/components/rootLayoutAnimated/rootLayoutAnimated";
import { getPricing } from "@/app/lib/data";


const Pricing = async () => {
const pricings = await getPricing();

    return (
        <section className=' pricing-bg'>
            <div
                className="absolute custom-animate-pulse inset-0 m-auto max-w-xs h-[357px] blur-[1000px] sm:max-w-md md:max-w-lg "
                style={{background: "linear-gradient(106.89deg, rgba(141, 76, 206, 0.11) 15.73%, rgb(165, 14, 233) 15.74%, rgba(255, 0, 0, 0.26) 56.49%, rgba(234, 51, 214, 0.4) 115.91%)"}}/>
            <div className="relative  py-28 px-5  z-10">
                <RootLayoutAnimated>
                <div className="relative max-w-[1200px] mx-auto text-gray-300 sm:px-4 md:px-8">
                    <div className='max-w-xl mx-auto space-y-3 px-4 sm:text-center sm:px-0'>
                        <h1 className="bg-gradient-to-r from-[#9e31f7ff] to-[#344dedff] text-transparent bg-clip-text font-boldd"
                            data-aos="fade-up"
                        >
                            {portfolioData?.pricing?.title}
                        </h1>
                        <p className='bg-gradient-to-r from-[#9e31f7ff] to-[#344dedff] text-transparent bg-clip-text text-3xl font-semibold sm:text-4xl'
                            data-aos="fade-up"
                        >
                            {portfolioData?.pricing?.subtitle}
                        </p>
                        <div className='max-w-xl'>
                            <p className="text-slate-300 tracking-[2px]"
                                data-aos="fade-up"
                            >
                                {portfolioData?.pricing?.description}
                            </p>
                        </div>
                    </div>
                    <ol className='mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
                        {
                            pricings?.map((item) => {

                                return (
                                    (
                                        <li key={item.id}
                                            data-aos="fade-up"
                                            className={`relative  mt-5  flex-1 flex flex-col hover:shadow-sky-500/20 shadow-2xl sm:mt-0 sm:rounded-xl sm:max-w-md    bg-gradient-to-t from-gray-950 to-[#05296d26]   rounded-lg  hover:border-orange-500 hover:bg-gradient-to-b   border-transparent `}
                                        >
                                            <div className="p-4 py-8 space-y-4 border-b border-gray-700  md:p-8">
                                                <h2 className='text-gray-200 font-medium tracking-[3px] '
                                                    data-aos="fade-up"

                                                >
                                                    {item.name}
                                                </h2>
                                                <div className='text-orange-500 text-3xl font-semibold'
                                                    data-aos="fade-up"
                                                >
                                                    ${item.price} <span className="text-xl font-normal">/mo</span>
                                                </div>
                                                <p className="text-gray-400 tracking-[1px]"
                                                    data-aos="fade-up"
                                                >
                                                    {item.desc}
                                                </p>

                                                <GetStartButton />

                                            </div>
                                            <ul className='p-4 py-8 space-y-3 md:p-8'>
                                                {
                                                    item.features.map((featureItem, index) => (
                                                        <li key={index} className='flex items-center gap-5'
                                                            data-aos="fade-up"
                                                        >
                                                            <svg
                                                                xmlns='http://www.w3.org/2000/svg'
                                                                className={`h-5 w-5 ${item.isMostPop ? "text-fuchsia-700" : ""}`}
                                                                viewBox='0 0 20 20'
                                                                fill='currentColor'>
                                                                <path
                                                                    fillRule='evenodd'
                                                                    d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                                                    clipRule='evenodd'></path>
                                                            </svg>
                                                            <p className="tracking-[1px] "
                                                                data-aos="fade-up"
                                                            >{featureItem}</p>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </li>
                                    )
                                )
                            })
                        }
                    </ol>
                </div>
                </RootLayoutAnimated>
            </div>
        </section>
    );
};
export default Pricing;
