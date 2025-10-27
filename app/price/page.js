import React from 'react';
import Navigation from "@/app/components/layout/navigation/navigation";
import PricingComponent from "@/app/components/views/pricing/pricing";
import Footer from "@/app/components/layout/footer/footer";


export const metadata = {
    title: 'Full Stack Dev. - price',
    description: 'Pay as you grow\n' +
        '\n' +
        'I offer comprehensive Full stack development expertise to bring your portfolios to life. My service structure is designed to provide flexibility based on the scope and complexity of your needs.',
}
const Pricing = () => {
    return (
        <section>
            <Navigation/>
                <PricingComponent/>
            <Footer/>
        </section>
    );
};

export default Pricing;