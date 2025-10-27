import React from 'react';
import Navigation from "@/app/components/layout/navigation/navigation";
import Footer from "@/app/components/layout/footer/footer";
import { H1 } from '@/app/components/views/blogs/BlogComponents/BlogComponents';
import BlogUser from '@/app/components/views/blogs/BlogUser';
import AvatarRukon from "/public/images/rukon.jpg";
import Image from 'next/image';
import { getBlogById, getBlogs } from "@/app/lib/data";

export async function generateMetadata({ params }) {
  const blogId = params.id;
  const blogPost = await getBlogById(blogId);

  if (!blogPost) {
    return {
      title: "Blog not found",
      description: "The blog post you are looking for does not exist.",
    };
  }

  return {
    title: `${blogPost.title} - Blogs - Rukon.Pro`,
    description: `Read this comprehensive guide on "${blogPost.title}". This article explains JSX, State, and Props in React, and compares JSX with HTML syntax to make learning React easier.`,
    keywords: 'JSX, React Props, React State, ReactJS, React development, JavaScript, HTML in React',
    authors: 'Rukon',
    creator: 'Rukon',
    publisher: 'Rukon.Pro',
    openGraph: {
      title: `${blogPost.title} - Blogs - Rukon.Pro`,
      description: `Explore the fundamentals of JSX and React Props/State in this blog post.`,
      url: `https://rukonpro.vercel.app/blogs/${blogId}`,
      siteName: 'Rukon.Pro',
      locale: 'en_US',
      type: 'article',
      publishedTime: blogPost.createdAt,
      modifiedTime: blogPost.updatedAt,
      images: [
        {
          url: blogPost.thumbnail || 'https://i.ibb.co/cbkLWr5/225f953fb79eb8d1c5cac0803.webp',
          width: 1200,
          height: 630,
          alt: blogPost.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${blogPost.title} - Blogs - Rukon.Pro`,
      description: `Check out this detailed blog post explaining JSX, State, and Props in React development.`,
      image: blogPost.thumbnail || 'https://i.ibb.co/cbkLWr5/225f953fb79eb8d1c5cac0803.webp',
    },
  };
}

export async function generateViewport({ params }) {
    return {
        themeColor: '#382e6b',
    };
}

const BlogDetails = async ({ params }) => {
    const id = params?.id;
    const blog = await getBlogById(id);

    if (!blog) {
        return <div className="text-white text-center py-40">Blog not found.</div>;
    }

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
                    <div>
                        <H1>{blog.title}</H1>
                        <BlogUser
                            userName="Rukon Uddin"
                            profilePhoto={AvatarRukon}
                            date={blog.createdAt} />
                        <br />
                        <Image src={blog.thumbnail} alt={blog.title} width={800} height={450} className="w-full h-auto rounded-lg my-8" priority />
                        <div className="ql-editor" dangerouslySetInnerHTML={{ __html: blog.content }} />
                    </div>
                </div>
            </div>
            <Footer />
        </article>
    );
};

export default BlogDetails;

export async function generateStaticParams() {
    const blogsData = await getBlogs({ fields: 'id' });
    return blogsData?.map((blog) => ({
        id: blog.id,
    })) || [];
}
