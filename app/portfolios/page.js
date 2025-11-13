import React from 'react';
import Navigation from "@/app/components/layout/navigation/navigation";
import PortfolioMapping from "@/app/components/views/portfolios/PortfolioMappingView";
import BackButton from "@/app/components/ui/backButton/backButton";
import Footer from "@/app/components/layout/footer/footer";
import RootLayoutAnimated from "@/app/components/rootLayoutAnimated/rootLayoutAnimated";

export async function generateMetadata() {
    return {
      title: 'My Portfolio',
      description:
        'Discover Rukon’s web development projects, including full-stack applications, eCommerce platforms, and modern web solutions built with the latest cutting-edge technologies.',
      keywords: 'Rukon projects, web development portfolio, full-stack projects, ReactJS, NodeJS, full-stack applications, programming projects, eCommerce development',
      authors: 'Rukon',
      creator: 'Rukon',
      publisher: 'Rukon.Pro',
      openGraph: {
        title: 'Projects - Showcasing Web Development Expertise | Rukon.Pro',
        description:
          'Explore Rukon’s project portfolio featuring cutting-edge web development projects, built with the latest technologies such as React, Node.js, and more.',
        url: 'https://rukonpro.vercel.app/portfolios',
        siteName: 'Rukon.Pro',
        locale: 'en_US',
        type: 'website',
        images: [
          {
            url: 'https://rukonpro.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frukon_cover_photo_2.169d9c02.jpg&w=1920&q=75',
            width: 1200,
            height: 630,
            alt: 'Rukon Project Portfolio Cover',
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Projects - Showcasing Web Development Expertise | Rukon.Pro',
        description:
          'Browse through Rukon’s web development projects portfolio, featuring full-stack applications and innovative web solutions built with modern technologies.',
        image: 'https://rukonpro.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frukon_cover_photo_2.169d9c02.jpg&w=1920&q=75',
      },
    };
  }

export const generateViewport = () => {
    return {
        themeColor: '#382e6b',
    }
}

const Portfolios = () => {
    return (
        <div className="  min-h-screen portfolio-bg overflow-x-hidden">
            <Navigation/>
            <RootLayoutAnimated>
            <div
                className="absolute custom-animate-pulse inset-0 m-auto max-w-xs h-[357px] blur-[1000px] sm:max-w-md md:max-w-lg"
                style={{background: "linear-gradient(106.89deg, rgba(141, 76, 206, 0.11) 15.73%, rgb(165, 14, 233) 15.74%, rgba(255, 0, 0, 0.26) 56.49%, rgba(234, 51, 214, 0.4) 115.91%)"}}/>

            <div className=" z-10 max-w-[1200px] mx-auto px-5   py-32 ">

                <div className="flex justify-between items-center py-3"
                     data-aos="fade-up"
                     data-aos-anchor-placement="bottom-bottom"
                     data-aos-duration="1000"
                >
                    <h1 className={`text-white text-xl  font-bold  pt-15 `}>All projects</h1>
                    <BackButton/>
                </div>
                <PortfolioMapping/>
            </div>
            </RootLayoutAnimated>
            <Footer/>

        </div>
    );
};

export default Portfolios;
