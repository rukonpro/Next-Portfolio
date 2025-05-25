import React, { Suspense } from "react";
import dynamic from "next/dynamic";

// Dynamic imports for components with consistent loading fallbacks
const About = dynamic(() => import("@/app/components/about/about"), {
    loading: () => <AboutSkeleton />,
});
const Header = dynamic(() => import("@/app/components/header/header"), {
    loading: () => <HeaderSkeleton />,
});
const Counter = dynamic(() => import("@/app/components/counter/counter"), {
    loading: () => <CounterSkeleton />,
});
const Navigation = dynamic(() => import("@/app/components/navigation/navigation"), {
    loading: () => <p>Loading Navigation...</p>,
});
const Services = dynamic(() => import("@/app/components/services/services"), {
    loading: () => <ServicesSkeleton />,
});
const Footer = dynamic(() => import("@/app/components/footer/footer"), {
    loading: () => <p>Loading Footer...</p>,
});
const Skills = dynamic(() => import("@/app/components/skills/skills"), {
    loading: () => <SkillsSkeleton />,
});
const Portfolios = dynamic(() => import("@/app/components/portfolios/portfolios"), {
    loading: () => <PortfoliosSkeleton />,
});
const Certifications = dynamic(() => import("@/app/components/certifications/certifications"), {
    loading: () => <CertificationsSkeleton />,
});
const Blogs = dynamic(() => import("@/app/components/blogs/blogs"), {
    loading: () => <BlogsSkeleton />,
});
const ContactLayout = dynamic(() => import("@/app/components/contact/ContactLayout"), {
    loading: () => <p>Loading Contact...</p>,
});
const Pricing = dynamic(() => import("@/app/components/pricing/pricing"), {
    loading: () => <p>Loading Pricing...</p>,
});

// Static imports for skeleton components
import HeaderSkeleton from "@/app/components/Skeletons/HeaderSkeleton/HeaderSkeleton";
import CounterSkeleton from "@/app/components/Skeletons/CounterSkeleton/CounterSkeleton";
import AboutSkeleton from "@/app/components/Skeletons/AboutSkeleton/AboutSkeleton";
import SkillsSkeleton from "@/app/components/Skeletons/SkillsSkeleton/SkillsSkeleton";
import ServicesSkeleton from "@/app/components/Skeletons/ServicesSkeleton/ServicesSkeleton";
import PortfoliosSkeleton from "@/app/components/Skeletons/PortfoliosSkeleton/PortfoliosSkeleton";
import BlogsSkeleton from "@/app/components/Skeletons/BlogSkeleton/BlogSkeleton";
import CertificationsSkeleton from "@/app/components/Skeletons/CertificationsSkeleton/CertificationsSkeleton";
import AnimatedCodeBlock from "@/app/components/codeBlock/CodeBlock";

// Metadata for SEO and page configuration
export const metadata = {
    title: "MERN Stack Developer - Rukon.Pro",
    description:
        "Explore the portfolio of Rukon, a skilled MERN stack developer specializing in building robust, scalable, and high-performance web applications.",
    keywords: "MERN stack, web development, portfolio, Rukon, Next.js, React",
    author: "Rukon",
    viewport: "width=device-width, initial-scale=1.0",
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
            <Suspense fallback={<HeaderSkeleton />}>
                <Header />
            </Suspense>
            <Suspense fallback={<AboutSkeleton />}>
                <About />
            </Suspense>
            <Suspense fallback={<CounterSkeleton />}>
                <Counter />
            </Suspense>



            <Suspense fallback={<SkillsSkeleton />}>
                <Skills />
            </Suspense>
                <AnimatedCodeBlock/>
            <Suspense fallback={<ServicesSkeleton />}>
                <Services />
            </Suspense>

            <Suspense fallback={<PortfoliosSkeleton />}>
                <Portfolios />
            </Suspense>

            <Suspense fallback={<BlogsSkeleton />}>
                <Blogs />
            </Suspense>

            <Suspense fallback={<CertificationsSkeleton />}>
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
