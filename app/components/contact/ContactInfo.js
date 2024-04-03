import LocationIcon from "@/public/images/location.webp";
import GmailIcon from "@/public/images/gmail.webp";
import PhoneIcon from "@/public/images/phone-call.webp";
import WhatsAppIcon from "@/public/images/whatsapp.webp";
import SkypeIcon from "@/public/images/skype.webp";
import LinkDinIcon from "@/public/images/linkedin.webp";
import Image from "next/image";
const ContactInfo = () => {
    return (
        <section>
            <div className=" bg-gray-950 relative  p-5 mx-5">
                <div
                    className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg"
                    style={{
                        background:
                            "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
                    }}
                ></div>
                <div className="relative z-10">
                    <h1 className="text-white text-2xl font-bold  tracking-[4px]">
                        CONTACT INFO
                    </h1>
                    <br/>
                    <article
                        className="text-[#fdccffff] text-base font-bold  text-justify tracking-[2px]">
                        {`"Ready to bring your digital vision to life. Let's connect and
                            discuss how I can elevate your online presence. Reach out for
                            web development expertise in HTML, CSS, JavaScript, and more.
                            Looking forward to collaborating with you!"`}
                    </article>
                    <br/>
                    <address className="text-white text-sm font-bold  flex gap-2 items-center">
                        <Image
                            src={LocationIcon}
                            alt="AddressIcon"
                            className="h-6 w-6"
                        />
                        <span>Address: Sunamganj, Sylhet, Bangladesh.</span>
                    </address>
                    <br/>
                    <address className="text-white text-sm font-bold  flex gap-2 items-center">
                        <Image
                            src={GmailIcon}
                            alt="EmailIcon"
                            className="h-6 w-6"
                        />
                        Email:
                        <span>
                    <a
                        className="text-white text-sm font-bold "
                        href="mailto:rukon.js@gmail.com"
                        target="_blank" rel="noreferrer"
                    >
                      rukonWhats_Is_Features_In_Javascript_EE6@gmail.com
                    </a>
                  </span>
                    </address>
                    <br/>
                    <address className="text-white text-sm font-bold  flex items-center gap-2">
                        <Image
                            src={PhoneIcon}
                            alt="PhoneIcon"
                            className="h-6 w-6"
                        />
                        Phone:
                        <span>
                    <a
                        className="text-white text-sm font-bold "
                        href="tel:+8801765459224"
                        target="_blank" rel="noreferrer"
                    >
                      +8801765459224
                    </a>
                  </span>
                    </address>
                    <br/>
                    <address className="text-white text-sm font-bold  flex items-center gap-2">
                        <Image
                            src={WhatsAppIcon}
                            alt="PhoneIcon"
                            className="h-6 w-6"
                        />
                        Whatsapp:
                        <span>
                    <a
                        className="text-white text-sm font-bold "
                        href="tel:+8801765459224"
                        target="_blank" rel="noreferrer"
                    >
                      +8801765459224
                    </a>
                  </span>
                    </address>
                    <br/>
                    <address className="text-white text-sm font-bold  flex items-center gap-2">
                        <Image
                            src={SkypeIcon}
                            alt="SkypeIcon"
                            className="h-6 w-6"
                        />{" "}
                        Skype:{" "}
                        <span>
                    <a
                        className="text-white text-sm font-bold "
                        href="https://join.skype.com/invite/yXu1Kxuk8hZF?fbclid=IwAR0_F5FZQG1sYISeOdnT_dB3PTJqS1bxp4OOI590YbfpZE9gGmw4rs_pYYU"
                        target="_blank" rel="noreferrer">
                      {" "}
                        live:.cid.adbc52c0d5ebc624
                    </a>
                  </span>
                    </address>
                    <br/>
                    <address className="text-white text-sm font-bold  flex items-center gap-2">
                        <Image
                            src={LinkDinIcon}
                            alt="SkypeIcon"
                            className="h-6 w-6"
                        />{" "}
                        Linkdin:{" "}
                        <span>
                    <a
                        className="text-white text-sm font-bold "
                        href="https://join.skype.com/invite/yXu1Kxuk8hZF?fbclid=IwAR0_F5FZQG1sYISeOdnT_dB3PTJqS1bxp4OOI590YbfpZE9gGmw4rs_pYYU"
                        target="_blank" rel="noreferrer"
                    >
                      {" "}
                        Rukon Uddin
                    </a>
                  </span>
                    </address>
                </div>
            </div>
        </section>
    );
};

export default ContactInfo;