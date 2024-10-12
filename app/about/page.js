import AboutComponent from "@/app/components/about/about";
import Navigation from "@/app/components/navigation/navigation";
import Footer from "@/app/components/footer/footer";


export const metadata = {
    title: 'MERN Stack Dev. - Rukon.Pro',
    description: 'Welcome to Rukon.Pro! I am Rukon, a passionate MERN stack developer dedicated to creating dynamic and user-friendly web applications. With a strong foundation in JavaScript, React, Node.js, and MongoDB, I excel at building responsive, scalable solutions that enhance user experiences. My portfolio showcases a variety of projects, from e-commerce platforms to innovative web tools, reflecting my commitment to quality and performance. Join me on this exciting journey in the tech world as I continue to learn, grow, and bring ideas to life through code.',
    keywords: 'Rukon, MERN stack developer, web applications, JavaScript, React, Node.js, MongoDB, portfolio, e-commerce, innovative tools',
    authors: 'Rukon',
    creator: 'Rukon',
    publisher: 'Rukon.Pro',
    openGraph: {
        title: 'MERN Stack Dev. - Rukon.Pro',
        description: 'Explore the portfolio of Rukon, a dedicated MERN stack developer skilled in creating robust web applications. Discover projects that demonstrate creativity and technical proficiency.',
        url: 'https://rukonpro.vercel.app/about',
        siteName: 'Rukon.Pro',
        locale: 'en_US',
        type: 'website',
        images: [
            {
                url: 'https://rukonpro.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frukon_cover_photo_2.169d9c02.jpg&w=1920&q=75',
                width: 1200,
                height: 630,
                alt: 'Rukon Portfolio Image',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'MERN Stack Dev. - Rukon.Pro',
        description: 'Dive into the world of Rukon, a talented MERN stack developer passionate about crafting exceptional web applications. Check out my projects!',
        image: 'https://rukonpro.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frukon_cover_photo_2.169d9c02.jpg&w=1920&q=75',
    },
    themeColor: '#382e6b', // Updated theme color
};

const About = () => {
    return (
        <section>
            <Navigation />
            <AboutComponent />
            <Footer />
        </section>
    );
};

export default About;