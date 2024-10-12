import React from "react";
import HomePage from "@/app/home/page";


export const metadata = {
  title: 'MERN Stack Dev. - Rukon.Pro',
  description: 'Explore the portfolio of Rukon Pro, a skilled MERN stack developer with expertise in building robust web applications.',
  keywords: 'Rukon Pro, MERN stack developer, web developer, portfolio, JavaScript, React, Node.js, Express, MongoDB, software engineering, web applications',
  author: 'Rukon Pro',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  themeColor: '#37306b',
  canonical: 'https://rukonpro.vercel.app',
  language: 'en',
  openGraph: {
    title: 'MERN Stack Dev. - Rukon.Pro',
    description: 'Explore the portfolio of Rukon Pro, a skilled MERN stack developer with expertise in building robust web applications.',
    url: 'https://rukonpro.vercel.app',
    type: 'website',
    images: [
      {
        url: 'https://rukonpro.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frukon_cover_photo_2.169d9c02.jpg&w=1920&q=75',
        width: 800,
        height: 600,
        alt: 'Rukon Pro Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rukonpro',
    creator: '@rukonpro',
    title: 'MERN Stack Dev. - Rukon.Pro',
    description: 'Explore the portfolio of Rukon Pro, a skilled MERN stack developer with expertise in building robust web applications.',
    image: 'https://rukonpro.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frukon_cover_photo_2.169d9c02.jpg&w=1920&q=75',
  },
};

export default async function Home() {

  return (
    <React.Fragment>
      <HomePage />
    </React.Fragment>
  )
}
