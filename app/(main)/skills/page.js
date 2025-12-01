import React, {Suspense} from 'react';
import Skills from "@/app/components/views/skills/SkillsView";


const SkillsAll = () => {
    return (
            <Suspense fallback={"<h1>loading...</h1>"}>
                <Skills/>
            </Suspense>
    );
};

export default SkillsAll;

export const metadata = {
    title: 'My Skills',
    description: 'Explore the technical skills of Rukon Pro, a Full Stack Developer. Expertise in JavaScript, React, Node.js, MongoDB, and more.',
    keywords: 'skills, full stack developer, web developer, JavaScript, React, Node.js, MongoDB, HTML, CSS, Git',
    author: 'Rukon Pro',
    openGraph: {
        title: 'Technical Skills - Rukon.Pro',
        description: 'A showcase of my technical skills and expertise in web development.',
        url: 'https://rukonpro.vercel.app/skills',
        type: 'website',
    },
    twitter: {
        card: 'summary',
        title: 'Technical Skills - Rukon.Pro',
        description: 'A showcase of my technical skills and expertise in web development.',
    },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#37306b',
};