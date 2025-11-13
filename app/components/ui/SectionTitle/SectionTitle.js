
import React from 'react';

const SectionTitle = ({ title }) => {
    return (
        <div className="flex justify-center">
            <div className="flex items-center relative">
                <div
                    className="w-[55px] h-[55px] bg-gradient-to-tl from-[#17113a] to-[#8907c0] animate-spin rounded-full customShadow"></div>
                <h1
                    data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                    data-aos-duration="1000"
                    className="relative right-10 text-white z-10 md:text-5xl text-2xl font-bold tracking-[4px]">{title}</h1>
            </div>
        </div>
    );
};

export default SectionTitle;
