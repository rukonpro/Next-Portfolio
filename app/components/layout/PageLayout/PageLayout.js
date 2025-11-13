import React from 'react';
import Navigation from "@/app/components/layout/navigation/navigation";
import Footer from "@/app/components/layout/footer/footer";

const PageLayout = ({ children }) => {
    return (
        <section className="overflow-x-hidden">
            <Navigation />
            {children}
            <Footer />
        </section>
    );
};

export default PageLayout;
