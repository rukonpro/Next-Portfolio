import React from 'react';
import Navigation from "@/app/components/navigation/navigation";
import PricingComponent from "@/app/components/pricing/pricing";
import Footer from "@/app/components/footer/footer";


export const metadata = {
    title: 'MERN Stack Dev. - price',
    description: 'Pay as you grow\n' +
        '\n' +
        'I offer comprehensive MERN stack development expertise to bring your portfolios to life. My pricing structure is designed to provide flexibility based on the scope and complexity of your needs.',
}
const Pricing = () => {
    return (
        <section>
            <Navigation/>
            <div className="pt-16">
                <PricingComponent/>
            </div>
            <Footer/>
        </section>
    );
};

export default Pricing;