import ContactComponent from "@/app/components/contact/contact"
import Navigation from "@/app/components/navigation/navigation";
import Footer from "@/app/components/footer/footer";
const Contact = () => {
    return (
        <div>
            <Navigation/>
                <ContactComponent/>
                <Footer/>
        </div>
    );
};

export default Contact;

export const metadata = {
    title: 'MERN Stack Dev. - Contact',
    description: '"Ready to bring your digital vision to life. Let\'s connect and discuss how I can elevate your online presence. Reach out for web development expertise in HTML, CSS, JavaScript, and more. Looking forward to collaborating with you!"',
}