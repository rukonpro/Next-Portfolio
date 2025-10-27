import BlogCard from "./BlogCard";
import { Suspense } from "react";
import RootLayoutAnimated from "@/app/components/rootLayoutAnimated/rootLayoutAnimated";
import { getBlogs } from "@/app/lib/data";


const Blogs = async () => {
    const blogs = await getBlogs({ fields: 'title,thumbnail,id,createdAt,updatedAt' });
    const errorMassage = !blogs || blogs.length === 0 ? "Could not fetch blogs or no blogs available." : null;



    return (
        <section id="blogs" className="relative blogs-bg ">

                <div
                    className="  px-5 py-28 relative  max-w-[1200px]  mx-auto z-10 flex-none md:flex justify-around items-center  ">
                    <RootLayoutAnimated>
                    <div >
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
                            <div className=" mx-auto text-justify ">
                                <blockquote
                                    data-aos="fade-up"
                                    data-aos-anchor-placement="bottom-bottom"
                                    data-aos-duration="1000"
                                    className="  font-bold  text-base text-slate-400 tracking-[2px]  pt-5 ">
                                    {`Welcome to my portfolio blog where I delve into the dynamic world of Full stack development! As a passionate Full Stack Developer, I am committed
                            to
                            creating innovative and seamless web experiences. Here, I document my journey, insights, and
                            the
                            challenges I encounter while architecting robust applications.`}
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
                            projects and learn how Full stack development can elevate your digital footprint.`}
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
                            </div>
                        </div>

                        {
                            errorMassage && <p className="text-red-500 pt-5 text-center">{errorMassage}</p>
                        }
                        <div
                            className="grid xl:grid-cols-4 lg:grid-cols-3  sm:grid-cols-2 grid-cols-1 gap-4 gap-y-16  pt-28 text-white">
                            {
                                blogs?.map(blog => {
                                    return (
                                        <Suspense fallback={<p>Loading...</p>} key={blog.id}>
                                            <BlogCard
                                                blog={blog}
                                            />
                                        </Suspense>
                                    )
                                })
                            }
                        </div>
                    </div>
                    </RootLayoutAnimated>
                </div>


        </section>
    );
};

export default Blogs;
