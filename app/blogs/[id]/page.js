import React from 'react';
import Navigation from "@/app/components/navigation/navigation";
import Footer from "@/app/components/footer/footer";
import axios from 'axios';
import { H1 } from '@/app/components/blogs/BlogComponents/BlogComponents';
import BlogUser from '@/app/components/blogs/BlogUser';
import AvatarRukon from "/public/images/rukon.jpg";




const BlogDetails = async ({ params }) => {
    const id = params?.id;
    let blog = null;

    try {
        const response = await axios.get(`http://localhost:3000/api/blog/${id}`);
        blog = response?.data;

    } catch (error) {
        // toast.success(error?.response?.data?.error);
    }




    return (
        <article>
            <Navigation />
            <div className="relative  bg-[#0e0e36]     overflow-x-hidden  pt-28 ">
                <div className="max-w-[800px] mx-auto px-5 text-white">
                    {
                        blog &&
                        <div>
                            <H1>{blog?.title}</H1>
                            <BlogUser
                                userName="Rukon Uddin"
                                profilePhoto={AvatarRukon}
                                date={blog?.createdAt} />
                            <br />
                            <img src={blog?.thumbnail} alt={blog?.title} />
                            <div className="ql-editor" dangerouslySetInnerHTML={{ __html: blog.content }} />
                        </div>
                    }

                </div>
            </div>
            <Footer />
        </article>
    );

};



export default BlogDetails;


const blogs = async () => {
    try {
        const response = await axios.get(`http://localhost:3000/api/blog/getBlogs`, {
            params: {
                fields: 'title,thumbnail,id,createdAt,updatedAt,content',
            }
        });
        return response?.data;

    } catch (error) {
        // errorMassage = error?.response?.data?.error
    }
}


export async function generateStaticParams() {
    const blogsData = await blogs();
    return blogsData?.map((blog) => ({
        id: blog.id,
    }))
}

export async function getStaticPaths() {
    const blogsData = await blogs();
    const paths = await blogsData?.map(blog => {
        return {
            params: { id: blog.id }
        }
    })
    return {
        paths,
        fallback: 'blocking', // false or "blocking"
    }
}