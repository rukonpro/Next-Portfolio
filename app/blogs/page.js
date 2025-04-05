import React, {Suspense} from 'react';
import BlogsComponent from "@/app/components/blogs/blogs";
import Navigation from "@/app/components/navigation/navigation";
import Footer from "@/app/components/footer/footer";


export const metadata = {
    title: 'Blogs - Rukon.Pro',
    description: 'Dive into a rich collection of articles and tutorials on web development and technology trends. Written by Rukon, a passionate MERN stack developer, these blogs offer valuable insights, practical tips, and in-depth knowledge to help you navigate the world of coding and development. Whether you are a beginner or an experienced developer, there’s something here for everyone to learn and grow.',
    keywords: 'Rukon, Blogs, Web Development, MERN Stack, JavaScript, React, Node.js, MongoDB, Technology, Tutorials',
    authors: 'Rukon',
    creator: 'Rukon',
    publisher: 'Rukon.Pro',
    openGraph: {
      title: 'Blogs - Rukon.Pro',
      description: 'Explore a collection of articles and tutorials by Rukon, a dedicated MERN stack developer. Gain insights into web development and technology trends.',
      url: 'https://rukonpro.vercel.app/blogs',
      siteName: 'Rukon.Pro',
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: 'https://rukonpro.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frukon_cover_photo_2.169d9c02.jpg&w=1920&q=75',
          width: 1200,
          height: 630,
          alt: 'Rukon Blog Image',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Blogs - Rukon.Pro',
      description: 'Read the latest articles and tutorials by Rukon, a skilled MERN stack developer. Explore web development and technology insights.',
      image: 'https://rukonpro.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frukon_cover_photo_2.169d9c02.jpg&w=1920&q=75',
    },
    themeColor: '#382e6b',
  };


const Blogs = () => {
    return (
        <section>

                   <Navigation />
                        <Suspense fallback={<h1>Loading...</h1>}>
                               <BlogsComponent/>
                        </Suspense>
                   <Footer/>

        </section>
    );
};


export default Blogs;
