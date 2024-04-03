import React from 'react';
import BlogUser from "@/app/components/blogs/BlogUser";
import AvatarRukon from "@/public/images/rukon.jpg";
import Image from "next/image";
import HowToDuplicateGitRepositoryBanner from "@/public/BlogsImage/HowToDuplicateRepository .jpg";

const HowToDuplicateGitRepository = () => {
    return (
        <div>
            <h1 className="lg:text-5xl md:text-2xl text-xl font-extrabold">How to Duplicating a repository?</h1>
            <BlogUser userName="Rukon Uddin" profilePhoto={AvatarRukon} date="Dec 15, 2023"/>
            <br/>
            <div>
                <Image src={HowToDuplicateGitRepositoryBanner}
                       alt={"How to Duplicating a repository?"}
                       className="w-full"
                />
            </div>
        </div>
    );
};

export default HowToDuplicateGitRepository;