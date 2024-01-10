import React from 'react';
import Image from "next/image";
import GithubIcon from "@/public/images/github-icon-1.svg";
import LinkdinIcon from "@/public/images/linkedin.png";
import EmailIcon from "@/public/images/gmail.png";
import SkypeIcon from "@/public/images/skype.png";
import Whatsapp from "@/public/images/whatsapp.png";
import PhoneIcon from "@/public/images/phone-call.png";
const FollowUs = () => {
    return (
        <ol className='flex flex-wrap gap-2 pt-5'>
            <li>
                <a
                    data-aos="fade-right"
                    data-aos-offset="10"
                    data-aos-duration="1200"
                    data-aos-easing="ease-in-sine"
                    href="https://github.com/rukonpro" target="_blank" rel="noreferrer">
                    <button
                        className=' w-10 p-2 h-10 rounded-full flex justify-center items-center bg-gradient-to-bl from-[#007ab9] to-[#eceff1]  shadow-2xl shadow-fuchsia-300 '>
                            <Image
                                src={GithubIcon}
                                alt="GithubIcon"/>
                    </button>
                </a>
            </li>

            <li>
                <a
                    data-aos="fade-right"
                    data-aos-offset="10"
                    data-aos-duration="1100"
                    data-aos-easing="ease-in-sine"
                    href="https://www.linkedin.com/in/rukonpro/" target="_blank"
                    rel="noreferrer">
                    <button
                        className=' w-10 h-10 rounded-full flex justify-center items-center bg-gradient-to-bl from-[#007ab9] to-[#0e0e36] '>
                        <Image
                            src={LinkdinIcon}
                            alt="linkedin"
                        />
                    </button>
                </a>
            </li>

            <li>
                <a
                    data-aos="fade-right"
                    data-aos-offset="10"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-sine"
                    href="mailto:rukon.js@gamil.com" target="_blank" rel="noreferrer">
                    <button
                        className=' w-10 h-10 rounded-full flex justify-center items-center bg-gradient-to-bl from-[#f44336] to-[#0e0e36] '>
                        <Image
                            src={EmailIcon}
                            alt="gmail"
                        />
                    </button>
                </a>
            </li>

            <li>
                <a
                    data-aos="fade-right"
                    data-aos-offset="10"
                    data-aos-duration="900"
                    data-aos-easing="ease-in-sine"
                    href="https://join.skype.com/invite/yXu1Kxuk8hZF?fbclid=IwAR18ICJ_AmaQUWEIsiIfd4XyikyYvhcEIrM5HLImwXXJc42KT6pwqWjDaC0"
                    target="_blank" rel="noreferrer">
                    <button
                        className=' w-10 h-10 rounded-full flex justify-center items-center bg-gradient-to-bl from-[#00aff0] to-[#0e0e36] '>
                        <Image
                            src={SkypeIcon}
                            alt="skype"
                        />
                    </button>
                </a>
            </li>
            <li>
                <a
                    data-aos="fade-right"
                    data-aos-offset="10"
                    data-aos-duration="800"
                    data-aos-easing="ease-in-sine"
                    href="https://api.whatsapp.com/send?phone=1765459224" target="_blank"
                    rel="noreferrer">
                    <button
                        className=' w-10 h-10 rounded-full flex justify-center items-center bg-gradient-to-bl from-[#4caf50] to-[#0e0e36] '>
                        <Image
                            src={Whatsapp}
                            alt="whatsapp"
                        />

                    </button>
                </a>
            </li>

            <li>
                <a
                    data-aos="fade-right"
                    data-aos-offset="10"
                    data-aos-duration="700"
                    data-aos-easing="ease-in-sine"
                    href="tel:+8801765459224" target="_blank" rel="noreferrer">
                    <button
                        className=' w-10 h-10 rounded-full flex justify-center items-center bg-gradient-to-bl from-[#3e9ddd] to-[#0e0e36] '
                        data-aos="fade-in"
                    >
                        <Image
                            src={PhoneIcon}
                            alt="phone-call"
                            loading="lazy"/>
                    </button>
                </a>
            </li>
        </ol>
    );
};

export default FollowUs;