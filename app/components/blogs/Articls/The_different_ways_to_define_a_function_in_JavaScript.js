import React from 'react';
import BlogUser from "@/app/components/blogs/BlogUser";
import AvatarRukon from "@/public/images/rukon.jpg";
import Image from "next/image";
import TheDifferentWaysToDefineAFunctionInJavaScriptBanner from "@/public/BlogsImage/The_different_ways_to_define_a_function_in_JavaScript.webp";

const TheDifferentWaysToDefineAFunctionInJavaScript = () => {
    return (
        <div>
            <h1 className="lg:text-5xl md:text-2xl text-xl font-extrabold">The different ways to define a function in JavaScript</h1>
            <BlogUser userName="Rukon Uddin" profilePhoto={AvatarRukon} date="3 min read·May 26, 2021"/>
<br/>
            <div>
                <Image src={TheDifferentWaysToDefineAFunctionInJavaScriptBanner} alt={"The different ways to define a function in JavaScript"}
                       className="w-full"
                />
            </div>
        </div>
    );
};

export default TheDifferentWaysToDefineAFunctionInJavaScript;