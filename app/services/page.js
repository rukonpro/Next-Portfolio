import React from 'react';
import ServicesComponent from "@/app/components/views/services/services";
import Navigation from "@/app/components/layout/navigation/navigation";
import Footer from "@/app/components/layout/footer/footer";
import Head from 'next/head';

const Services = () => {

    return (
        <section>
            <Navigation />
            <ServicesComponent />
            <Footer />
        </section>
    );
};

export default Services;

export const metadata = {
    title: "My Services | Web Development Expertise",
    description: "Explore my web development services including front-end, back-end, and full-stack development. Specializing in responsive web applications and e-commerce solutions.",
    keywords: "web development, front-end, back-end, full-stack, e-commerce, responsive design, JavaScript, React, Node.js, Express.js",
    openGraph: {
        title: "My Services | Web Development Expertise",
        description: "Explore my web development services including front-end, back-end, and full-stack development.",
        url: "https://rukonpro.vercel.app/services", // Your actual services page URL
        siteName: "Rukon Pro", // Your website name
        images: [
            {
                url: "/images/BlueBackCover.webp", // Update if necessary
                width: 800,
                height: 600,
                alt: "My Services Cover Image",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "My Services | Web Development Expertise",
        description: "Explore my web development services including front-end, back-end, and full-stack development.",
        images: [
            {
                url: "/images/BlueBackCover.webp", // Update if necessary
                alt: "My Services Cover Image",
            },
        ],
    },
};
