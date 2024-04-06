import React from 'react';
import Image from "next/image";
import Link from "next/link";
import AvatarRukon from "@/public/images/rukon.jpg";

const BlogCard = ({blog}) => {
    const {title,banner,date,id}=blog;
    return (
        <div className="border-b flex flex-col justify-between">
            <Link href={`blogs/${id}`}>
                <Image
                    className="w-full    object-cover h-44"
                    data-aos="fade-left"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="2000"
                    src={banner}
                    alt="How ToConnection Of Mongoose In NodeJs"
                    loading="lazy"
                    placeholder="blur"
                />
                <h1 className="text-xl pt-3">{title}</h1>
            </Link>
            <Link href="/about" className="flex gap-4  py-10">
                <div>
                    <Image src={AvatarRukon} alt="rukonpro profile"
                           height={50}
                           width={50}
                           blurDataURL={AvatarRukon}
                           className="rounded-full"
                    />
                </div>
                <div>
                    <h1 className="hover:underline">
                        Rukon Uddin
                    </h1>
                    <small>{date}</small>
                </div>
            </Link>
        </div>
    );
};

export default BlogCard;