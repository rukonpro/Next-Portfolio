import React, {Suspense} from 'react';
import Navigation from "@/app/components/navigation/navigation";
import Footer from "@/app/components/footer/footer";
import portfolioData from "@/app/assite/portfollioData/portfollioData";


const BlogDetails = ({params}) => {

    const blog=portfolioData.blogs.find(data=>data?.id===params?.id);

    return (
        <article>
            <Navigation/>
            <div className="relative  bg-[#0e0e36]     overflow-x-hidden  pt-28 ">
                <div className="max-w-[800px] mx-auto px-5 text-white">
                        {blog?.blog}
                </div>
            </div>
            <Footer/>
        </article>
    );
};



export default BlogDetails;


export function generateStaticParams() {
    return portfolioData?.blogs?.map((blog) => ({
        id: blog.id,
    }))
}