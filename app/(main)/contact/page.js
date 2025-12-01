import ContactComponent from "@/app/components/views/contact/ContactView"
const Contact = () => {
    return (
            <ContactComponent/>
    );
};

export default Contact;

export const metadata = {
    title: 'Contact Me',
    description: 'Get in touch with Rukon Pro to discuss your project. I am available for freelance web development work.',
    keywords: 'contact, freelance, web developer, hire me, project inquiry',
    author: 'Rukon Pro',
    openGraph: {
        title: 'Contact Me - Rukon.Pro',
        description: 'Let\'s build something amazing together.',
        url: 'https://rukonpro.vercel.app/contact',
        type: 'website',
    },
    twitter: {
        card: 'summary',
        title: 'Contact Me - Rukon.Pro',
        description: 'Let\'s build something amazing together.',
    },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#37306b',
};