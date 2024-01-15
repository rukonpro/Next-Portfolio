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
        <section>
            <Navigation/>
            <Header/>
            <Counter/>
            <About/>
            <Skills/>
            <Services/>
            <Portfolios/>
            <Blogs/>
            <Certifications/>
            <Pricing/>
            <ContactLayout/>
            <Footer/>
        </section>
    )
}
