"use client"
import React, { useState } from 'react'
import Login from "@/app/components/authentication/login";
import Registration from "@/app/components/authentication/registration";

export default function LoginModal({ isDialogOpen, setIsDialogOpen }) {

    const [isLogin, setIsLogin] = useState(false);

    if (!isDialogOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 h-[100vh] flex items-center justify-center bg-black bg-opacity-70 ">
            <div className=" w-11/12 md:w-1/2 lg:w-1/3 p-0 shadow-2xl shadow-[#3f223a80] relative rounded-2xl overflow-hidden"

                 data-aos={`fade-left`}
                 data-aos-offset="10"
                 data-aos-duration="600"
                 data-aos-easing="ease-in-sine"
            >
                <button
                    onClick={() => setIsDialogOpen(false)}
                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 z-10 text-purple-500 text-3xl ">✕</button>
                <div>
                    {!isLogin ?
                        <Login
                            setIsLogin={setIsLogin}
                            isDialogOpen={isDialogOpen}
                            setIsDialogOpen={setIsDialogOpen}
                        /> :
                        <Registration
                            setIsLogin={setIsLogin}
                            isDialogOpen={isDialogOpen}
                            setIsDialogOpen={setIsDialogOpen}
                        />}
                </div>
            </div>
        </div>
    )
}
