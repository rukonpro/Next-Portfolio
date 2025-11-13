
import React from 'react';
import Link from "next/link";

const SeeMoreButton = ({ href, text }) => {
    return (
        <div className="flex justify-center py-5">
            <Link
                href={href}
                passHref={true}
                legacyBehavior={true}
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
                data-aos-duration="1000"
            >
                <button
                    aria-label={text}
                    type="button"
                    className="px-6 py-3 rounded-lg transition-colors duration-300 bg-[#9669fe]/50 hover:bg-[#7b55cc]/50 text-white">
                    {text}
                </button>
            </Link>
        </div>
    );
};

export default SeeMoreButton;
