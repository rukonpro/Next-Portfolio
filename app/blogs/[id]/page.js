import React from 'react';
import Image from "next/image";
import  NotFoundImage from "/public/images/notfounderror.png";
import Navigation from "@/app/components/navigation/navigation";
import Footer from "@/app/components/footer/footer";
import HowToConnectionOfMongooseInNodeJs from "@/app/components/blogs/Articls/How_to_Connection_of_Mongoose_in_Node_Js";
import BackButton from "@/app/components/backButton/backButton";
import Whats_Is_Features_In_Javascript_EE6 from "@/app/components/blogs/Articls/Whats_Is_Features_In_Javascript_EE6";
import TheDifferentWaysToDefineAFunctionInJavaScript
    from "@/app/components/blogs/Articls/The_different_ways_to_define_a_function_in_JavaScript";
import HowToDuplicateGitRepository from "@/app/components/blogs/Articls/HowToDuplicateGitRepository";

const BlogDetails = ({params}) => {

    const blog=()=>{
        if ("HowToConnectionOfMongooseInNodeJs"===params.id){
            return <HowToConnectionOfMongooseInNodeJs/>
        }
        if ("Whats_Is_Features_In_Javascript_EE6"===params.id){
            return <Whats_Is_Features_In_Javascript_EE6/>
        }
      if ("TheDifferentWaysToDefineAFunctionInJavaScript"===params.id){
            return <TheDifferentWaysToDefineAFunctionInJavaScript/>
        }
        if ("HowToDuplicateGitRepository"===params.id){
            return <HowToDuplicateGitRepository/>
        }
        else {
            return (
                <div className="flex justify-center items-center">
                    <div className="text-center">
                        <Image src={NotFoundImage} alt="Not found error"/>
                        <BackButton/>
                    </div>
                </div>
            )
        }
    }

    return (
        <section>
            <Navigation/>
            <div className="relative  bg-[#0e0e36]     overflow-x-hidden  pt-28 ">
                <div className="max-w-[1200px] mx-auto px-5 text-white">
                    {blog()}
                </div>
            </div>

            <Footer/>
        </section>
    );
};

export default BlogDetails;