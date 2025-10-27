import React from 'react';
import Image from "next/image";
import Link from "next/link";
import AvatarRukon from "@/public/images/rukon.jpg";
import moment from 'moment';

const BlogCard = ({ blog }) => {
    const { title, thumbnail, createdAt, updatedAt, id } = blog;
    return (
        <div className="border-b flex flex-col justify-between hover:bg-gradient-to-tr hover:to-[#2f055a]/90 hover:from-[#055c8f] rounded overflow-hidden  duration-500 hover:-translate-y-2.5 l hover:shadow-lg hover:shadow-fuchsia-300/20 hover:z-10 ">
            <Link href={`blogs/${id}`} className=" pb-10">
                {
                    thumbnail &&
                    <img
                        className="w-full    object-cover h-44"
                        data-aos="fade-left"
                        data-aos-anchor-placement="top-bottom"
                        data-aos-duration="2000"
                        src={thumbnail}                 
                        alt={title}
                       
                       
                    />
                }
                <h1 className="text-xl pt-3 px-2">{title}</h1>
            </Link>
            <Link href="/about" className="flex gap-4  pb-10 px-2">
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
                    <small>{moment(createdAt).calendar()}</small>
                </div>
            </Link>
        </div>
    );
};

export default BlogCard;