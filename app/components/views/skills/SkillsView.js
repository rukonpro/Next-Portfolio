import React from 'react';
import portfolioData from "@/app/assets/portfolioData/portfolioData";
import SkillsMapping from "./SkillsMappingView";
import RootLayoutAnimated from "@/app/components/rootLayoutAnimated/rootLayoutAnimated";

const Skills = () => {

    return (
        <section id="skills"
                 className=" skills-bg  relative flex justify-center items-center  px-5 pt-28">

            {/*<RootLayoutAnimated>*/}
            <div className="max-w-[1200px] relative z-10 mx-auto">
                <div className="flex justify-center">
                    <div className="flex items-center relative">
                        <div
                            className="  w-[55px] h-[55px] bg-gradient-to-tl from-[#17113a] to-[#8907c0]  animate-spin rounded-full  customShadow"></div>
                        <h1
                            data-aos="fade-up"
                            data-aos-anchor-placement="bottom-bottom"
                            data-aos-duration="1000"
                            className=" relative right-10 text-white z-10 md:text-5xl text-2xl font-bold  ">Skills</h1>
                    </div>
                </div>

                <div className="flex justify-center  py-10">
                    <p
                        data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom"
                        data-aos-duration="1000"
                        className="max-w-4xl  font-bold  text-base text-slate-400 tracking-[2px] md:text-center text-justify"> I
                        am a dynamic Full stack developer passionate about transforming ideas into powerful and
                        user-friendly
                        web applications. With a strong foundation in MongoDB, Express.js, React, and Node.js, I
                        specialize in
                        building seamless, responsive, and scalable solutions.</p>
                </div>

                <ol className="mt-16 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2  pb-16">
                    {
                        portfolioData?.skills?.map((data, index) => {
                            return (
                                <li key={index}>
                                    <SkillsMapping data={data}/>
                                </li>
                            )
                        })
                    }
                </ol>
            </div>
            {/*</RootLayoutAnimated>*/}
        </section>
    );
};

export default Skills;
