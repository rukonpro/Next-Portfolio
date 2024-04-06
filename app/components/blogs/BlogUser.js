import React from 'react';
import Link from "next/link";
import Image from "next/image";
import AvatarRukon from "@/public/images/rukon.jpg";

const BlogUser = ({userName,date,profilePhoto}) => {
    return (
        <div className="flex gap-4 border-b py-10">
            <Link href="/about">
                <Image src={profilePhoto} alt="rukonpro profile"
                       height={50}
                       width={50}
                       className="rounded-full"
                       placeholder="blur"
                />
            </Link>
            <div>
                <Link href="/about" className="hover:underline">
                    <h1>{userName}</h1>
                </Link>
                <small>{date}</small>
            </div>
        </div>
    );
};

export default BlogUser;