import PageLayout from "@/app/components/layout/PageLayout/PageLayout";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import AboutSkeleton from "@/app/components/views/about/AboutSkeleton";

// Dynamically import the AboutComponent to lazy-load it
const AboutComponent = dynamic(() => import("@/app/components/views/about/AboutView"));


export const metadata = {
    title: 'About Me',
    description: 'Welcome to Rukon.Pro! I am Rukon, a passionate Full stack developer dedicated to creating dynamic and user-friendly web applications. With a strong foundation in JavaScript, React, Node.js, and MongoDB, I excel at building responsive, scalable solutions that enhance user experiences. My portfolio showcases a variety of projects, from e-commerce platforms to innovative web tools, reflecting my commitment to quality and performance. Join me on this exciting journey in the tech world as I continue to learn, grow, and bring ideas to life through code.',
    keywords: 'Rukon, Full stack developer, web applications, JavaScript, React, Node.js, MongoDB, portfolio, e-commerce, innovative tools',
    authors: 'Rukon',
    creator: 'Rukon',
    publisher: 'Rukon.Pro',
    openGraph: {
        title: 'Full Stack Dev. - Rukon.Pro',
        description: 'Explore the portfolio of Rukon, a dedicated Full stack developer skilled in creating robust web applications. Discover projects that demonstrate creativity and technical proficiency.',
        url: 'https://rukonpro.vercel.app/about',
        siteName: 'Rukon.Pro',
        locale: 'en_US',
        type: 'website',
        images: [
            {
                url: 'https://rukonpro.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frukon.930a2ad6.jpeg&w=1200&q=75',
                width: 1200,
                height: 630,
                alt: 'Rukon Portfolio Image',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Full Stack Dev. - Rukon.Pro',
        description: 'Dive into the world of Rukon, a talented Full stack developer passionate about crafting exceptional web applications. Check out my projects!',
        image: 'https://rukonpro.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frukon.930a2ad6.jpeg&w=1200&q=75',
    },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#382e6b',
};

const About = () => {
    return (
        <PageLayout>
            <Suspense fallback={<AboutSkeleton />}>
                <AboutComponent />
            </Suspense>
        </PageLayout>
    );
};

export default About;