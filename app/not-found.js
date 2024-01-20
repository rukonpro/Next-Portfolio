"use client"
import React, {useEffect, useState} from 'react';
import Link from "next/link";

const NotfoundPages= () => {
    const [movementX,setMovementX]=useState(0);
    const [movementY,setMovementY]=useState(0);

   const handleMovementChange=(event)=>{
       setMovementX(event.clientX);
       setMovementY(event.clientY);
   }
    return (
        <section
            onMouseMove={handleMovementChange}
            className="relative py-28 bg-gray-900 h-screen    bg-no-repeat   bg-cover " style={{backgroundImage:`url("/images/rukon-pro-footer-images.png")`,backgroundPosition:`${movementX}px ${movementY}px`}}>
            <div
                className="relative z-10 max-w-screen-xl mx-auto px-4 text-gray-300 justify-between gap-24 lg:flex md:px-8">
                <div className="max-w-lg mx-auto space-y-3 text-center">
                    <h3 className="text-orange-600 font-semibold">
                        404 Error
                    </h3>

                    <h1>
                        <span className="text-white text-[22px] font-bold font-['Roboto'] ">Rukon.</span>
                        <span className="text-orange-600 text-[22px] font-bold font-['Roboto']">Pro</span>
                    </h1>
                    <p className=" text-4xl font-semibold sm:text-5xl text-white">
                        Page not found
                    </p>
                    <p className="text-slate-400">
                        Sorry, the page you are looking for could not be found or has been removed.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        <Link href="/"
                              className="block py-2 px-4 text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg">
                            Go back
                        </Link>
                        <Link href="contact"
                            className="block py-2 px-4  text-white hover:text-gray-950 hover:bg-gray-50 font-medium duration-150 active:bg-gray-100 border rounded-lg">
                            Contact support
                        </Link>
                    </div>
                </div>
            </div>
            <div className="absolute inset-0 max-w-md mx-auto h-72 blur-[118px]"
                 style={{background: "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)"}}></div>
        </section>
    );
};

export default NotfoundPages;