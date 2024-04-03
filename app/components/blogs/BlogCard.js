import React from 'react';
import Image from "next/image";
import Link from "next/link";
import AvatarRukon from "@/public/images/rukon.jpg";

const BlogCard = ({banner,date,title,path}) => {
    return (
        <Link href={path} className="border-b flex flex-col justify-between">
            <div>
                <Image
                    className="w-full    object-cover h-44"
                    data-aos="fade-left"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="2000"
                    src={banner}
                    alt="How ToConnection Of Mongoose In NodeJs"
                    loading="lazy"/>

                <h1 className="text-xl pt-3">{title}</h1>
            </div>
            <div className="flex gap-4  py-10">
                <Link href="/about">
                    <Image src={AvatarRukon} alt="rukonpro profile"
                           height={50}
                           width={50}
                           className="rounded-full"
                    />
                </Link>
                <div>
                    <Link href="/about" className="hover:underline">
                        <h1>Rukon Uddin</h1>
                    </Link>
                    <small>{date}</small>
                </div>
            </div>
        </Link>
    );
};

export default BlogCard;