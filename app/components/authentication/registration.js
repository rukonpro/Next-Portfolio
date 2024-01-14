"use client"
import React, { useState } from "react";

const Registration = ({ setIsLogin }) => {
    const [isPasswordHidden, setPasswordHidden] = useState(true)

    return (

        <section id="contact" className=' relative  overflow-hidden bg-gradient-to-tl to-[#13053d] via-[#031220] from-[#250725]  py-10  '>

            <div className='relative  z-10 container mx-auto  px-3'>

                <div className="flex ">
                    <div className="flex px-8 ">
                        <div className="relative -inset-3   w-[55px] h-[55px] bg-gradient-to-r from-[#17113a] to-[#8907c0]  animate-spin rounded-full customShadow" />
                        <h1 className="bg-gradient-to-r from-[#9e31f7ff] to-[#344dedff] text-transparent bg-clip-text z-10 md:text-5xl text-2xl font-bold  absolute">Registration</h1>
                    </div>
                </div>



                <div className='py-10 '>
                    <form >

                        <div className='grid grid-cols-2 md:gap-5 gap-y-3 gap-x-1  px-3   border border-purple-700  rounded-lg py-5'>


                            <div className=" col-span-1 ">
                                <label className="bg-gradient-to-r from-[#9e31f7ff] to-[#344dedff] text-transparent bg-clip-text font-bold ">First Name:</label>
                                <input
                                    className="mt-2 px-5 py-2 w-full rounded-[10px]  border border-purple-500  focus:outline-purple-400 bg-gradient-to-l focus:bg-gradient-to-r   from-[#5f3391ff] to-[#020617ff] text-white font-bold  clickSound"
                                    type="fname"
                                    name="fname"
                                    placeholder='Rukon'
                                />
                            </div>

                            <div className=" col-span-1 ">
                                <label className="bg-gradient-to-r from-[#9e31f7ff] to-[#344dedff] text-transparent bg-clip-text font-bold ">Last Name:</label>
                                <input
                                    className="mt-2 px-5 py-2 w-full rounded-[10px]  border border-purple-500  focus:outline-purple-400 bg-gradient-to-l focus:bg-gradient-to-r   from-[#5f3391ff] to-[#020617ff] text-white font-bold  clickSound"
                                    type="lname"
                                    name="lname"
                                    placeholder='Uddin'
                                />
                            </div>
                            <div className=" col-span-2 ">
                                <label className="bg-gradient-to-r from-[#9e31f7ff] to-[#344dedff] text-transparent bg-clip-text font-bold ">Email address:</label>
                                <input
                                    className="mt-2 px-5 py-2 w-full rounded-[10px]  border border-purple-500  focus:outline-purple-400 bg-gradient-to-l focus:bg-gradient-to-r   from-[#5f3391ff] to-[#020617ff]  text-white font-bold   clickSound"
                                    type="email"
                                    name="email"
                                    placeholder='rukon.pro@gmail.com'
                                />

                            </div>
                            <div className=" col-span-2  relative">
                                <div className="flex justify-between ">
                                    <label className="bg-gradient-to-r from-[#9e31f7ff] to-[#344dedff] text-transparent bg-clip-text text-sm font-bold ">Password:</label>
                                    <button
                                        aria-label="Forgot password?"
                                        type="button"
                                        className="bg-gradient-to-r from-[#9e31f7ff] to-[#344dedff] text-transparent bg-clip-text text-xs font-bold clickSound"><span className="bg-gradient-to-r from-[#9e31f7ff] to-[#344dedff] text-transparent bg-clip-text">Forgot password?</span> </button>
                                </div>

                                <button
                                    type="button"
                                    className="text-gray-400 absolute right-[10px] top-[30px] inset-y-0  my-auto active:text-gray-600 clickSound"
                                    onClick={() => {
                                        setPasswordHidden(!isPasswordHidden)
                                    }}
                                >
                                    {
                                        isPasswordHidden ? (
                                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                                            </svg>

                                        )
                                    }
                                </button>

                                <input
                                    type={isPasswordHidden ? "password" : "text"}
                                    className="mt-2 px-5 py-2 w-full rounded-[10px]  border border-purple-500  focus:outline-purple-400 bg-gradient-to-l focus:bg-gradient-to-r   from-[#5f3391ff] to-[#020617ff]  text-white font-bold   clickSound"
                                    placeholder='******'

                                />

                            </div>
                            <div className='col-span-2 flex justify-center text-white font-bold font-["Roboto"] '>

                                <button
                                    type="submit"
                                    aria-label="Register"
                                    className=" w-full py-2  rounded-[10px] border border-purple-500  focus:outline-purple-400 bg-gradient-to-l focus:bg-gradient-to-r   from-[#5f3391ff] to-[#020617ff]  text-white text-xl font-bold   hover:shadow-2xl  hover:shadow-[#111827] clickSound"
                                >
                                    <span className="bg-gradient-to-r from-[#9e31f7ff] to-[#344dedff] text-transparent bg-clip-text  font-bold">
                                        Register
                                    </span>
                                </button>
                            </div>
                            <div className="col-span-2 flex justify-center ">
                                <p className="text-[#fccdff] text-sm">Are you alrady Registered?
                                    <button
                                        aria-label="Please Login"
                                        type="button"
                                        onClick={() => {
                                            setIsLogin(isLogin => !isLogin)
                                        }}

                                        className="bg-gradient-to-r from-[#9e31f7ff] to-[#344dedff] text-transparent bg-clip-text px-1 clickSound">Please Login</button>
                                </p>
                            </div>

                        </div>
                    </form>


                </div>
            </div>
        </section>

    )
}

export default Registration;