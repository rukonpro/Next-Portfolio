import React, { Suspense } from "react";
import About from "@/app/components/about/about";
import Header from "@/app/components/header/header";
import Counter from "@/app/components/counter/counter";
import Navigation from "@/app/components/navigation/navigation";
import Services from "@/app/components/services/services";
import Footer from "@/app/components/footer/footer";
import Skills from "@/app/components/skills/skills";
import Portfolios from "@/app/components/portfolios/portfolios";
import Certifications from "@/app/components/certifications/certifications";
import Blogs from "@/app/components/blogs/blogs";
import ContactLayout from "@/app/components/contact/ContactLayout";
import Pricing from "@/app/components/pricing/pricing";


export const metadata = {
    title: 'MERN Stack Dev. - Rukon.Pro',
    description: 'Explore the portfolio of Your Name, a skilled MERN stack developer with expertise in building robust web applications.',
}

export default function Home() {

    return (
        <React.Fragment>
            <Navigation />
            <Suspense fallback={<p>Loading...</p>}>
                <Header />
            </Suspense>
            <Suspense fallback={<p>Loading...</p>}>
                <Counter />
            </Suspense>
            <Suspense fallback={<p>Loading...</p>}>
                <About />
            </Suspense>
            <Suspense fallback={<p>Loading...</p>}>
                <Skills />
            </Suspense>
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
            <Suspense fallback={<p>Loading...</p>}>
                <Pricing />
            </Suspense>
            <Suspense fallback={<p>Loading...</p>}>
                <ContactLayout />
            </Suspense>
            <Suspense fallback={<p>Loading...</p>}>
                <Footer />
            </Suspense>
        </React.Fragment>
    )
}
