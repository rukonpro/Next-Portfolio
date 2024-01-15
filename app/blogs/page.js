import React from 'react';
import BlogsComponent from "@/app/components/blogs/blogs";
import Navigation from "@/app/components/navigation/navigation";
import Footer from "@/app/components/footer/footer";
const Blogs = () => {
    return (
        <section>
            <Navigation/>
            <div className="pt-16">
                <BlogsComponent/>
            </div>
                <Footer/>
        </section>
    );
};

export default Blogs;

export const metadata = {
    title: 'MERN Stack Dev. - Blogs',
    description: 'Explore the portfolio of Your Name, a skilled MERN stack developer with expertise in building robust web applications.',
}