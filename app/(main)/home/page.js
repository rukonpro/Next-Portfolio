import React, { Suspense } from "react";
import dynamic from "next/dynamic";

// Static imports for all page components
import About from "@/app/components/views/about/AboutView";
import Header from "@/app/components/layout/header/header";
import Counter from "@/app/components/views/counter/CounterView";
import Navigation from "@/app/components/layout/navigation/navigation";
import Services from "@/app/components/views/services/ServicesView";
import RukonGithubSection from "@/app/components/views/rukonGithubSection"
import Footer from "@/app/components/layout/footer/footer";
import Skills from "@/app/components/views/skills/SkillsView";
import Portfolios from "@/app/components/views/portfolios/PortfoliosView";
import Certifications from "@/app/components/views/certifications/CertificationsView";
import Blogs from "@/app/components/views/blogs/BlogsView";
import ContactLayout from "@/app/components/views/contact/ContactLayoutView";
import Pricing from "@/app/components/views/pricing/PricingView";

// Dynamic import for AnimatedCodeBlock
import AnimatedCodeBlockSkeleton from "@/app/components/views/codeBlock/AnimatedCodeBlockSkeleton";
import AboutSkeleton from "@/app/components/views/about/AboutSkeleton";
import BottomNav from "@/app/components/layout/bottomNav";
const AnimatedCodeBlock = dynamic(() => import("@/app/components/views/codeBlock/CodeBlockView"), {
    loading: () => <AnimatedCodeBlockSkeleton />,
});

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
            <Header />
            <Suspense fallback={<AboutSkeleton />}>
                <About />
            </Suspense>
            <Counter />
            <RukonGithubSection/>
            <Skills />
            <Suspense fallback={<AnimatedCodeBlockSkeleton />}>
                <AnimatedCodeBlock/>
            </Suspense>
            <Services />
            <Portfolios />
            <Blogs/>
            <Certifications />
            <Pricing />
            <ContactLayout />
        </div>
    );
}
