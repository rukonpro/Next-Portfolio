import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import AboutSkeleton from "@/app/components/views/about/AboutSkeleton";

// Lazy load the About component
const About = dynamic(() => import("@/app/components/views/about/AboutView"));

// Static imports for all page components
import Header from "@/app/components/layout/header/header";
import Counter from "@/app/components/views/counter/CounterView";
import Navigation from "@/app/components/layout/navigation/navigation";
import Services from "@/app/components/views/services/ServicesView";
import Footer from "@/app/components/layout/footer/footer";
import Skills from "@/app/components/views/skills/SkillsView";
import Portfolios from "@/app/components/views/portfolios/PortfoliosView";
import Certifications from "@/app/components/views/certifications/CertificationsView";
import Blogs from "@/app/components/views/blogs/BlogsView";
import ContactLayout from "@/app/components/views/contact/ContactLayoutView";
import Pricing from "@/app/components/views/pricing/PricingView";
import AnimatedCodeBlock from "@/app/components/views/codeBlock/CodeBlockView";

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
    themeColor: '#37306b',
};

/**
 * Home page component with all sections statically imported.
 * @returns {JSX.Element} The rendered Home page
 */
export default async function Home() {
    return (
        <div className="overflow-x-hidden">
            <Navigation />
            <Header />
            <Suspense fallback={<AboutSkeleton />}>
                <About />
            </Suspense>
            <Counter />
            <Skills />
            <AnimatedCodeBlock/>
            <Services />
            <Portfolios />
            <Blogs/>
            <Certifications />
            <Pricing />
            <ContactLayout />
            <Footer />
        </div>
    );
}
