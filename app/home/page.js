import React, { Suspense } from "react";
import dynamic from "next/dynamic";

// Dynamic imports for components with consistent loading fallbacks
const About = dynamic(() => import("@/app/components/views/about/about"), {
    loading: () => <p>Loading...</p>,
});
const Header = dynamic(() => import("@/app/components/layout/header/header"), {
    loading: () => <p>Loading...</p>,
});
const Counter = dynamic(() => import("@/app/components/views/counter/counter"), {
    loading: () => <p>Loading...</p>,
});
const Navigation = dynamic(() => import("@/app/components/layout/navigation/navigation"), {
    loading: () => <p>Loading Navigation...</p>,
});
const Services = dynamic(() => import("@/app/components/views/services/services"), {
    loading: () => <p>Loading...</p>,
});
const Footer = dynamic(() => import("@/app/components/layout/footer/footer"), {
    loading: () => <p>Loading Footer...</p>,
});
const Skills = dynamic(() => import("@/app/components/views/skills/skills"), {
    loading: () => <p>Loading...</p>,
});
const Portfolios = dynamic(() => import("@/app/components/views/portfolios/portfolios"), {
    loading: () => <p>Loading...</p>,
});
const Certifications = dynamic(() => import("@/app/components/views/certifications/certifications"), {
    loading: () => <p>Loading...</p>,
});
const Blogs = dynamic(() => import("@/app/components/views/blogs/blogs"), {
    loading: () => <p>Loading...</p>,
});
const ContactLayout = dynamic(() => import("@/app/components/views/contact/ContactLayout"), {
    loading: () => <p>Loading Contact...</p>,
});
const Pricing = dynamic(() => import("@/app/components/views/pricing/pricing"), {
    loading: () => <p>Loading Pricing...</p>,
});

import AnimatedCodeBlock from "@/app/components/views/codeBlock/CodeBlock";

// Metadata for SEO and page configuration
export const metadata = {
    title: "Full Stack Developer - Rukon.Pro",
    description:
        "Explore the portfolio of Rukon, a skilled Full stack developer specializing in building robust, scalable, and high-performance web applications.",
    keywords: "Full stack, web development, portfolio, Rukon, Next.js, React",
    author: "Rukon",
};

export const viewport = {
    width: "device-width",
    initialScale: 1.0,
};

/**
 * Home page component with lazy-loaded sections and skeleton fallbacks
 * @returns {JSX.Element} The rendered Home page
 */
export default function Home() {
    return (
        <div className="overflow-x-hidden">
            {/* Navigation is not wrapped in Suspense as it’s typically critical */}
            <Navigation />

            {/* Main content with lazy-loaded components and skeleton fallbacks */}
            <Suspense fallback={<p>Loading...</p>}>
                <Header />
            </Suspense>
            <Suspense fallback={<p>Loading...</p>}>
                <About />
            </Suspense>
            <Suspense fallback={<p>Loading...</p>}>
                <Counter />
            </Suspense>



            <Suspense fallback={<p>Loading...</p>}>
                <Skills />
            </Suspense>
                <AnimatedCodeBlock/>
            <Suspense fallback={<p>Loading...</p>}>
                <Services />
            </Suspense>

            <Suspense fallback={<p>Loading...</p>}>
                <Portfolios />
            </Suspense>

            <Suspense fallback={<p>Loading...</p>}>
                <Blogs />
            </Suspense>

            <Suspense fallback={<p>Loading...</p>}>
                <Certifications />
            </Suspense>

            <Suspense fallback={<p>Loading Pricing...</p>}>
                <Pricing />
            </Suspense>

            <Suspense fallback={<p>Loading Contact...</p>}>
                <ContactLayout />
            </Suspense>

            <Suspense fallback={<p>Loading Footer...</p>}>
                <Footer />
            </Suspense>
        </div>
    );
}
