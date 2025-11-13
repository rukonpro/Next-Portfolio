import React from 'react';
import PricingComponent from "@/app/components/views/pricing/PricingView";
import PageLayout from "@/app/components/layout/PageLayout/PageLayout";


export const metadata = {
    title: 'Pricing Plans',
    description: 'Find the right pricing plan for your web development needs. I offer flexible plans for projects of all sizes.',
    keywords: 'pricing, web development, cost, budget, full stack developer',
    author: 'Rukon Pro',
    openGraph: {
        title: 'Pricing Plans - Rukon.Pro',
        description: 'Flexible pricing for web development projects.',
        url: 'https://rukonpro.vercel.app/price',
        type: 'website',
    },
    twitter: {
        card: 'summary',
        title: 'Pricing Plans - Rukon.Pro',
        description: 'Flexible pricing for web development projects.',
    },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#37306b',
};
const Pricing = () => {
    return (
        <PageLayout>
            <PricingComponent/>
        </PageLayout>
    );
};

export default Pricing;