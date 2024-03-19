import Image from "next/image";
import ProfileImage from "@/public/images/rukon_cover_photo.jpg";

const About = () => {
    return (
        <section id="about" className='relative bg-[#121837] px-5 py-28'>
            <div className="relative z-10">
                <div className='max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-10 items-center'>
                        <Image
                            data-aos="fade-up"
                            data-aos-easing="linear"
                            data-aos-duration="1500"
                            className='h-full w-full rounded-xl object-contain scale-x-[-1] !transform rotate-X-190'
                            placeholder="blur"
                            src={ProfileImage}
                            alt="profilephoto" />
                    <div>
                        <div>
                            <div className="relative ">
                                <div>
                                    <div
                                        className="absolute w-[55px] h-[55px] bg-gradient-to-tl from-[#17113a] to-[#8907c0]  animate-spin rounded-full customShadow "
                                    ></div>
                                    <h1
                                        data-aos="fade-up"
                                        data-aos-easing="linear"
                                        data-aos-duration="1300"
                                        className="absolute top-3 text-white  md:text-5xl text-2xl font-bold  tracking-[4px] ">About
                                        me</h1>
                                </div>
                            </div>

                            <article
                                data-aos="fade-up"
                                data-aos-easing="linear"
                                data-aos-duration="1000"
                                className="text-white  md:text-xl text-base   tracking-[1px] pt-20"><span

                                className='text-2xl font-extrabold'>Hello!</span> <br/>

                                I am a Web Developer, React Developer, MERN stack developer, and JavaScript enthusiast.
                                <br/>
                                <br/>
                                I have good knowledge of building web applications with React.js for the client side, Node.js / express.js for the server side, and MongoDB for the database. I’m curious, and I enjoy work that challenges me to learn something new and stretch in a different direction. I do my best to stay on top of changes in the state of the art so that I can meet challenges with tools well suited to the job at hand.

                                <br/>
                                <br/>

                                I am currently available for a job. If your company needs a React developer, web developer, or MERN stack developer, get in touch.
                            </article>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute inset-0   blur-[150px]   radial-gradient"></div>
        </section>
    );
};

export default About;