import BlogCard from "@/app/components/blogs/BlogCard";
import portfollioData from "@/app/assite/portfollioData/portfollioData";

const Blogs = () => {
    return (
        <section id="blogs" className="relative  bg-[#0e0e36]     overflow-x-hidden px-5 py-28">
            <div className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg"
                 style={{background: "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)"}}></div>
            <article
                className="relative  max-w-[1200px]  mx-auto z-10 flex-none md:flex justify-around items-center backdrop-blur-3xl  backdrop-opacity-70 ">
                <div>
                    <div className="flex justify-center">
                        <div
                            className="relative  w-[55px] h-[55px] bg-gradient-to-bl transition from-[#17113a] to-[#8907c0]  animate-spin rounded-full right-16 top-2  customShadow "></div>
                        <h1
                            data-aos="fade-up"
                            data-aos-anchor-placement="center-center"
                            data-aos-duration="1000"
                            className="text-white z-10 md:text-5xl text-2xl font-bold  absolute tracking-[4px]">Blogs</h1>
                    </div>

                    <div className="pt-16">
                        <desc className=" mx-auto text-justify ">
                            <blockquote
                                data-aos="fade-up"
                                data-aos-anchor-placement="bottom-bottom"
                                data-aos-duration="1000"
                                className="  font-bold  text-base text-slate-400 tracking-[2px]  pt-5 ">
                                {`Welcome to my portfolio blog where I delve into the dynamic world of MERN (MongoDB,
                            Express.js,
                            React.js, Node.js) stack development! As a passionate Full Stack Developer, I am committed
                            to
                            creating innovative and seamless web experiences. Here, I document my journey, insights, and
                            the
                            challenges I encounter while architecting robust applications using the MERN stack.`}
                            </blockquote>
                            <blockquote
                                data-aos="fade-up"
                                data-aos-anchor-placement="bottom-bottom"
                                data-aos-duration="1000"
                                className="font-bold  text-base text-slate-400 tracking-[2px]  pt-5">
                                {`Discover how I leverage MongoDB's flexibility for database management, harness the power of
                            Express.js for building scalable APIs, and utilize React.js to craft interactive user
                            interfaces. Follow along as I showcase my proficiency in Node.js, enabling server-side
                            scripting
                            and handling asynchronous operations effortlessly.`}
                            </blockquote>
                            <blockquote
                                data-aos="fade-up"
                                data-aos-anchor-placement="bottom-bottom"
                                data-aos-duration="1000"
                                className="font-bold  text-base text-slate-400 tracking-[2px]  pt-5">
                                {`From tackling complex application logic to optimizing performance, my portfolio blog offers
                            a
                            glimpse into my expertise in developing modern web solutions. Whether you're a fellow
                            developer
                            seeking inspiration or a business owner looking to elevate your online presence, explore my
                            projects and learn how MERN stack development can elevate your digital footprint.`}
                            </blockquote>
                            <blockquote
                                data-aos="fade-up"
                                data-aos-anchor-placement="bottom-bottom"
                                data-aos-duration="1000"
                                className=" font-bold  text-base text-slate-400 tracking-[2px]  pt-5">
                                {` Join me on this exhilarating journey of innovation and continuous learning as I push the
                            boundaries of what's possible in the realm of Full Stack and React development. Let's embark
                            together on the quest to build exceptional web experiences that captivate and engage users
                            worldwide.`}
                            </blockquote>
                        </desc>
                    </div>
                    <div
                        className="grid xl:grid-cols-4 lg:grid-cols-3  sm:grid-cols-2 grid-cols-1 gap-4 gap-y-16  pt-28 text-white">
                        {
                            portfollioData?.blogs?.map(blog => {
                                return (
                                    <BlogCard
                                        key={blog.id}
                                        blog={blog}
                                    />
                                )
                            })
                        }


                    </div>
                </div>
            </article>
        </section>
    );
};

export default Blogs;