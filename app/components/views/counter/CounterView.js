"use client"
import CountUp from 'react-countup';
import { InView } from 'react-intersection-observer';
import Image from "next/image";
import DevelopImage from "@/public/images/rukon-pro-develop.png";

const Counter = () => {
    const counter=[
        {
            title:"Year Experience",
            end:3,
            start:0,
        },{
            title:"Complete Projects",
            end:50,
            start:0,
        },{
            title:"Github Contributions",
            end:100,
            start:0,
        },
    ]
    return (
        <div className="counter-bg">
           <div className="flex justify-center ">
               <Image
                   src={DevelopImage} alt="rukon pro developer"
                   placeholder="blur"
                   sizes="100vw"
                   className="absolute size-11/12 w-full "/>
           </div>
            <div className="relative z-10 lg:py-72 py-28">

                <div className="w-full max-w-[1200px] mx-auto  px-5 relative ">

                    <div className="grid grid-cols-3 gap-4 md:gap-5 items-center justify-center ">
                        {counter?.map((counter, index) => (
                            <InView key={index} trackVisibility rootMargin="0px 0px" delay={100}>
                                {({inView, ref}) => (
                                    <div
                                        ref={ref}
                                        style={{
                                            boxShadow: "0 0 5px 0 #a855f7",
                                        }}
                                        className="border border-purple-500 rounded-xl p-3 md:p-5 text-center bg-gradient-to-tr from-[#9c69fe]/20 to-[#260b4b] h-full w-full backdrop-blur-sm"
                                    >
                                        <p
                                            style={{
                                                textShadow: "rgb(167, 92, 238) -0.5px 0px, rgb(131, 21, 236) -1px 0px," +
                                                    " rgb(131, 28, 230) -1.5px 0px, rgb(134, 22, 242) -2px 0px, rgb(121, 0, 236) -2.5px 0px",
                                            }}
                                            className={`text-3xl sm:text-5xl md:text-7xl lg:text-9xl md:p-5 bg-gradient-to-br from-[#816aff] to-[#d066fd] text-transparent bg-clip-text`}>
                                            {counter?.title === "Year Experience" ? 0 : ""}<CountUp
                                            end={inView ? counter?.end : 0} start={counter?.start}/>
                                            +
                                        </p>
                                        <h1 className="md:text-3xl sm:text-2xl text-sm text-[#fccdff]">{counter?.title}</h1>
                                    </div>
                                )}
                            </InView>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;
