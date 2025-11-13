import Carousel from "./CarouselView";
import BackButton from "@/app/components/ui/backButton/backButton";
import React from "react";
import Image from "next/image";
const Portfolio = ({ data }) => {
    return (
        <div className="text-[#fccdff]">
            <div className="flex justify-between pb-3 z-10">
                <a href={data?.links?.liveLink?.link} aria-label={data?.title} target="_blank"
                   rel="noopener noreferrer">
                    <h1 className='text-lg font-semibold border-b border-purple-500 bg-gradient-to-r from-[#9e31f7ff] to-[#344dedff] text-transparent bg-clip-text '>{data?.title}</h1>
                </a>
              <div>
                  <BackButton/>
              </div>
            </div>
            <div>
                <Carousel images={data?.images}/>
            </div>

            <div>
                <div className='flex  justify-between flex-wrap pb-4'>
                    <a href={data?.links?.liveLink?.link} aria-label={data?.title} target="_blank" rel="noopener noreferrer">
                        <h1 className='text-lg font-semibold border-b border-purple-500 bg-gradient-to-r from-[#9e31f7ff] to-[#344dedff] text-transparent bg-clip-text  mt-5'>{data?.title}</h1>
                    </a>

                    <ol className='flex gap-4 mt-5'>
                        {data?.links?.liveLink?.icon && <li>
                            <a
                                href={data?.links?.liveLink?.link}
                                target="_blank"
                                aria-label={data?.title}
                                rel="noopener noreferrer"
                                className='text-[#454545]'
                            >

                                    <Image
                                        className='h-10 w-10'
                                        src={data?.links?.liveLink?.icon}
                                        alt="Live"/>

                            </a>
                        </li>}
                        {data?.links?.fontEndCode?.icon && <li>
                            <a
                                href={data?.links?.fontEndCode?.link}
                                aria-label={data?.title}
                                target="_blank"
                                rel="noopener noreferrer">
                                    <Image
                                        className='h-10 w-10'
                                        src={data?.links?.fontEndCode?.icon}
                                         alt="Github" loading="lazy"/>
                            </a>

                        </li>}
                        {data?.links?.backEndCode?.icon && <li>
                            <a
                                href={data?.links?.backEndCode?.link}
                                aria-label={data?.title} target="_blank"
                                rel="noopener noreferrer">
                                    <Image
                                        className='h-10 w-10'
                                        src={data?.links?.backEndCode?.icon}
                                        alt="Global" loading="lazy"/>
                            </a>
                        </li>}
                    </ol>
                </div>


                <article className='text-justify mb-3'>
                    <span className='font-bold   underline underline-offset-[5px]'>Description: </span>
                    <span className='text-base '>{data?.description}</span>
                </article>


                <h1 className='font-bold mb-3   underline underline-offset-[5px]'>Technology:</h1>

                <div className='border rounded-md p-2'>

                    <ul className='flex flex-wrap justify-center'>
                        {data?.technology?.map((t, i) =>
                            <li key={i}
                                className='px-5 py-1 m-1 border bg-gradient-to-br from-inherit to-transparent rounded-full text-sm font-bold text-white'>{t}</li>
                        )}
                    </ul>
                </div>


                <br />


                <h1 className='font-bold   underline underline-offset-[5px]'>Points:</h1>
                <ol className='list-disc'>
                    {
                        data.point.map((p, i) =>
                            <li key={i} className=' text-justify mt-2'>{p}</li>
                        )
                    }
                </ol>

            </div>
        </div>
    );
};

export default Portfolio;
