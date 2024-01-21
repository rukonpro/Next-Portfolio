import AboutComponent from "@/app/components/about/about";
import Navigation from "@/app/components/navigation/navigation";
import Footer from "@/app/components/footer/footer";


export const metadata = {
    title: 'MERN Stack Dev. - About',
    description: 'Hello!\n' +
        'I am a Web Developer, React Developer,MERN stack developer, or aJavaScript enthusiast.\n' +
        '\n' +
        'I have good knowledge of building web applications withReact.js for the client-side, Node.js / express.js for the server-side, andMongoDBfor the database. I’m curious, and I enjoy work that challenges me to learn something new and stretch in a different direction.I do my best to stay on top of changes in the state of the art so that I can meet challenges with tools well suited to the job at hand.\n' +
        '\n' +
        'I am currently available for a job. If your company needs aReact developer, web developer, or MERN stack developer,then get in touch.',
}
const About = () => {
    return (
        <section>
            <Navigation/>
                   <AboutComponent/>
            <Footer/>
        </section>
    );
};

export default About;