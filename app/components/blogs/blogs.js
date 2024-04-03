import Link from "next/link";
import HowToConnectionOfMongooseInNodeJs from "@/public/BlogsImage/how_to_mongoose_Connection.webp";
import WhatsIsFeatureInJavasriptES6 from "@/public/BlogsImage/javascript_ES6.png";
import TheDifferentWaysToDefineAFunctionInJavaScript from "@/public/BlogsImage/The_different_ways_to_define_a_function_in_JavaScript.webp";
import HowToDuplicateGitRepository  from "@/public/BlogsImage/HowToDuplicateRepository .jpg";

import BlogCard from "@/app/components/blogs/BlogCard";

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

                    <div className="grid md:grid-cols-4 grid-cols-1 gap-4  pt-10 text-white">
                        <BlogCard
                            banner={HowToConnectionOfMongooseInNodeJs}
                            title="How to Connection of Mongoose in Node Js."
                            date="2 min read · Mar 4, 2022"
                            path="/blogs/HowToConnectionOfMongooseInNodeJs"
                        />

                        <BlogCard
                            banner={WhatsIsFeatureInJavasriptES6}
                            title="What's features in Javascript ES6."
                            date="2 min read · Mar 4, 2022"
                            path="/blogs/Whats_Is_Features_In_Javascript_EE6"

                        />
                        <BlogCard
                            banner={TheDifferentWaysToDefineAFunctionInJavaScript}
                            title="The different ways to define a function in JavaScript."
                            date="3 min read, May 26, 2021"
                            path="/blogs/TheDifferentWaysToDefineAFunctionInJavaScript"

                        />
                        <BlogCard
                            banner={HowToDuplicateGitRepository}
                            title="How to Duplicating a repository?"
                            date="Dec 15, 2023"
                            path="/blogs/HowToDuplicateGitRepository"

                        />
                    </div>
                </div>
            </article>
        </section>
    );
};

export default Blogs;