import React from 'react';
import ServicesComponent from "@/app/components/services/services";
import Navigation from "@/app/components/navigation/navigation";
import Footer from "@/app/components/footer/footer";
export const metadata = {
    title: 'MERN stack dev - Services',
    description: 'If you looking for a developer with expertise in a stack typically associated with web development, here a brief description of the MEAN stack, which is a popular choice',
}
const Services = () => {

    return (
        <section>
            <Navigation/>
            <div className="pt-16">
            <ServicesComponent/>
            </div>
            <Footer/>
        </section>
    );
};

export default Services;