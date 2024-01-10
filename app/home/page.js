import React from "react";
import About from "@/components/about/about";
import Header from "@/components/header/header";
import Counter from "@/components/counter/counter";
import Navigation from "@/components/navigation/navigation";
import Services from "@/components/services/services";
import Footer from "@/components/footer/footer";
import Skills from "@/components/skills/skills";
import Portfolios from "@/components/portfolios/portfolios";
import Certifications from "@/components/certifications/certifications";
import Blogs from "@/components/blogs/blogs";
import ContactLayout from "@/components/contact/ContactLayout";
export default function Home() {
    return (
        <React.Fragment>
            <Navigation/>
            <Header/>
            <Counter/>
            <About/>
            <Skills/>
            <Services/>
            <Portfolios/>
            <Blogs/>
            <Certifications/>
            <ContactLayout/>
            <Footer/>
        </React.Fragment>
    )
}
