import React from "react";
import Image from "next/image";
import portfolioData from "@/app/assite/portfollioData/portfollioData";
import IconImage from "@/public/images/BlockChain.svg";

const FollowUs = ({ position }) => {
  return (
    <ol className={`flex flex-wrap justify-${position} gap-2`}>
      {portfolioData?.followUs?.map((data, index) => {
        return (
          <li key={index}>
            <a
              data-aos="fade-right"
              data-aos-offset="10"
              data-aos-duration="1200"
              data-aos-easing="ease-in-sine"
              href={data.link}
              target="_blank"
              rel="noreferrer"
            >
              <button
                style={{
                  backgroundImage: `linear-gradient(to top, #0e0e36 , ${data?.color})`,
                }}
                className={`p-2 md:p-1 lg:p-2 rounded-full flex justify-center items-center  shadow-2xl shadow-fuchsia-300  relative transition-all  duration-500  hover:bottom-2 bottom-0`}
              >
                <Image
                  src={data?.icon}
                  className={position==="left"&&`md:w-[16px] md:h-[16px]`}
                  height={16}
                  width={16}
                  alt={data.title}
                  loading="lazy"
                />
              </button>
            </a>
          </li>
        );
      })}
    </ol>
  );
};

export default FollowUs;
