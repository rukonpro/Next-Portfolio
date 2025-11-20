import React from 'react';
import Navigation from "@/app/components/layout/navigation/navigation";
import Footer from "@/app/components/layout/footer/footer";
import { H1 } from '@/app/components/views/blogs/Blog';
import BlogUser from '@/app/components/views/blogs/BlogUserView';
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

  // Generate dynamic description from the blog's content
  const textContent = blogPost.content.replace(/<[^>]*>?/gm, '').replace(/\s+/g, ' ').trim();
  const description = textContent.length > 155 ? textContent.slice(0, 155) + '...' : textContent;

  return {
    title: `${blogPost.title} - Blogs - Rukon.Pro`,
    description: description,
    authors: 'Rukon',
    creator: 'Rukon',
    publisher: 'Rukon.Pro',
    alternates: {
      canonical: `https://rukonpro.vercel.app/blogs/${blogId}`,
    },
    openGraph: {
      title: `${blogPost.title} - Blogs - Rukon.Pro`,
      description: description,
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
      description: description,
      image: blogPost.thumbnail || 'https://i.ibb.co/cbkLWr5/225f953fb79eb8d1c5cac0803.webp',
    },
  };
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#382e6b',
};

const BlogDetails = async ({ params }) => {
    const id = params?.id;
    const blog = await getBlogById(id);

    if (!blog) {
        return <div className="text-white text-center py-40">Blog not found.</div>;
    }

    const textContent = blog.content.replace(/<[^>]*>?/gm, '').replace(/\s+/g, ' ').trim();
    const description = textContent.length > 155 ? textContent.slice(0, 155) + '...' : textContent;

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: blog.title,
        description: description,
        image: blog.thumbnail || 'https://i.ibb.co/cbkLWr5/225f953fb79eb8d1c5cac0803.webp',
        author: {
            '@type': 'Person',
            name: 'Rukon Uddin',
            url: 'https://rukonpro.vercel.app/about',
        },
        publisher: {
            '@type': 'Organization',
            name: 'Rukon.Pro',
            logo: {
                '@type': 'ImageObject',
                url: 'https://rukonpro.vercel.app/images/rukon.jpg',
            },
        },
        datePublished: blog.createdAt,
        dateModified: blog.updatedAt,
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `https://rukonpro.vercel.app/blogs/${id}`,
        },
    };

    return (
        <article className="relative blogs-bg">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

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
    return blogsData.map((blog) => ({
        id: blog.id,
    }));
}
