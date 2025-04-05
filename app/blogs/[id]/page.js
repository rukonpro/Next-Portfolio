import React from 'react';
import Navigation from "@/app/components/navigation/navigation";
import Footer from "@/app/components/footer/footer";
import axios from 'axios';
import { H1 } from '@/app/components/blogs/BlogComponents/BlogComponents';
import BlogUser from '@/app/components/blogs/BlogUser';
import AvatarRukon from "/public/images/rukon.jpg";
import baseURL from '@/app/utils/baseURL/baseURL';

const fetchBlog = async (id) => {
    try {
        const response = await axios.get(`${baseURL}/api/blog/${id}`);
        return response?.data;

    } catch (error) {

    }
}


export async function generateMetadata({ params }) {
  const blogId = params.id;
  const blogPost = await fetchBlog(blogId); // Fetching blog post data dynamically

  return {
    title: `${blogPost?.title} - Blogs - Rukon.Pro`,
    description: `Read this comprehensive guide on "${blogPost?.title}". This article explains JSX, State, and Props in React, and compares JSX with HTML syntax to make learning React easier.`,
    keywords: 'JSX, React Props, React State, ReactJS, React development, JavaScript, HTML in React',
    authors: 'Rukon',
    creator: 'Rukon',
    publisher: 'Rukon.Pro',
    openGraph: {
      title: `${blogPost?.title} - Blogs - Rukon.Pro`,
      description: `Explore the fundamentals of JSX and React Props/State in this blog post.`,
      url: `https://rukonpro.vercel.app/blogs/${blogId}`,
      siteName: 'Rukon.Pro',
      locale: 'en_US',
      type: 'article',
      publishedTime: blogPost?.createdAt,
      modifiedTime: blogPost?.updatedAt,
      images: [
        {
          url: blogPost?.thumbnail || 'https://i.ibb.co/cbkLWr5/225f953fb79eb8d1c5cac0803.webp',
          width: 1200,
          height: 630,
          alt: blogPost?.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${blogPost?.title} - Blogs - Rukon.Pro`,
      description: `Check out this detailed blog post explaining JSX, State, and Props in React development.`,
      image: blogPost?.thumbnail || 'https://i.ibb.co/cbkLWr5/225f953fb79eb8d1c5cac0803.webp',
    },
    themeColor: '#382e6b',
  };
}




const BlogDetails = async ({ params }) => {
    const id = params?.id;
    let blog = await fetchBlog(id);


    return (
        <article className="relative blogs-bg">

            <div
            className=" custom-animate-pulse inset-0 m-auto max-w-xs h-[500px] blur-[118px] sm:max-w-md md:max-w-lg fixed"
            style={{
                background:
                    "linear-gradient(106.89deg, rgb(136, 0, 213) 15.73%, rgba(113, 14, 233, 0.41) 15.74%, rgba(209, 121, 249, 0.26) 56.49%, rgb(229, 70, 70) 115.91%)",
            }}
        ></div>

            <Navigation />
            <div className="relative    overflow-x-hidden  pt-28 z-10">
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
                            <div className="ql-editor" dangerouslySetInnerHTML={{ __html: blog?.content }} />
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
        const response = await axios.get(`${baseURL}/api/blog/getBlogs`, {
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
