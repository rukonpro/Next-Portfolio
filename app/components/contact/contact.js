import ContactForm from "@/app/components/contact/contactForm";
import ContactInfo from "@/app/components/contact/ContactInfo";
import RootLayoutAnimated from "@/app/components/rootLayoutAnimated/rootLayoutAnimated";

const Contact = () => {

    return (
        <section className=" relative bg-[#0f0523] py-28 ">
            <div
                className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg bg-gradient-to-tr from-[#622291] to-[#9d31f7] "
           /*     style={{
                    background:
                        "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
                }}*/
            ></div>
            <RootLayoutAnimated>
            <div className="relative  z-[0] max-w-[1200px] mx-auto ">
                <div className="flex px-8 ">
                    <div
                        className="relative -inset-3   w-[55px] h-[55px]  bg-gradient-to-tl from-[#17113a] to-[#8907c0]  animate-spin  rounded-full customShadow"/>
                    <h1 className="bg-gradient-to-r from-[#9e31f7ff] to-[#344dedff] text-transparent bg-clip-text z-10 md:text-5xl text-2xl font-bold  absolute tracking-[4px]">
                        GET IN TOUCH
                    </h1>
                </div>
                <div className="md:pt-24 pt-12 ">
                    <div className="grid md:grid-cols-2 md:gap-2">
                        <ContactForm/>
                        <ContactInfo/>
                    </div>
                </div>
            </div>
            </RootLayoutAnimated>
        </section>
    );
};

export default Contact;
