"use client"
import React, {useState, Suspense} from 'react';
import {useRouter, useSearchParams} from "next/navigation";
import LoadingPage from "@/app/components/loading/loading";
import Link from "next/link";
import axios from "axios";
import Swal from "sweetalert2";

const SignUpForm = () => {
    const [isPasswordHidden, setPasswordHidden] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        setError(null);
        try {
            const response = await axios.post('/api/auth/signup', {
                name,
                email,
                password
            });
            setIsLoading(false);
            if (response.status === 201) {
                Swal.fire({
                    icon: 'success',
                    title: 'Registration successful!',
                    text: 'Please login to continue.',
                    showConfirmButton: false,
                    timer: 2000
                });
                router.push('/auth/signin');
            }
        } catch (err) {
            setIsLoading(false);
            const errorMessage = err.response?.data?.error || 'An unexpected error occurred.';
            setError(errorMessage);
            Swal.fire({
                icon: 'error',
                title: 'Registration Failed',
                text: errorMessage,
            });
        }
    };

    return (
        <div
            className=" relative  overflow-hidden  py-10 w-full h-screen flex justify-center items-center bg-gradient-to-r from-[#17113a] to-[#8907c0]"
        >
            <div className="relative  z-10 container   px-3 max-w-max">
                <div className="flex ">
                    <div className="flex ">
                        <div className="relative -inset-3   w-[55px] h-[55px] bg-gradient-to-r from-[#17113a] to-[#8907c0]  animate-spin rounded-full customShadow" />
                        <h1 className="bg-gradient-to-r from-[#9e31f7ff] to-[#344dedff] text-transparent bg-clip-text z-10 md:text-3xl text-2xl font-bold  absolute">
                            Register
                        </h1>
                    </div>
                </div>

                <div className="py-10  mx-auto">
                    {error && <p className='text-red-500 text-center mb-4'>{error}</p>}
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-2 md:gap-5 gap-y-3 gap-x-1 ">
                             <div className=" col-span-2 ">
                                <label className="bg-gradient-to-r from-[#9e31f7ff] to-[#344dedff] text-transparent bg-clip-text text-[16px] font-bold">
                                    Full Name:
                                </label>
                                <input
                                    className="mt-2 px-5 py-2 rounded-lg w-full border border-purple-500  focus:outline-purple-400 text-white font-bold bg-transparent  "
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    placeholder="Rukon Uddin"
                                />
                            </div>
                            <div className=" col-span-2 ">
                                <label className="bg-gradient-to-r from-[#9e31f7ff] to-[#344dedff] text-transparent bg-clip-text text-[16px] font-bold">
                                    Email address:
                                </label>
                                <input
                                    className="mt-2 px-5 py-2 rounded-lg w-full border border-purple-500  focus:outline-purple-400 text-white font-bold bg-transparent  "
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    placeholder="rukon.pro@gmail.com"
                                />
                            </div>

                            <div className=" col-span-2  relative">
                                <div className="flex justify-between ">
                                    <label className="bg-gradient-to-r from-[#9e31f7ff] to-[#344dedff] text-transparent bg-clip-text text-[16px] font-bold">
                                        Password:
                                    </label>
                                </div>

                                <button
                                    type="button"
                                    className="text-gray-400 absolute right-[10px] top-[30px] inset-y-0  my-auto active:text-gray-600 clickSound"
                                    onClick={() => {
                                        setPasswordHidden(!isPasswordHidden)
                                    }}
                                >
                                    {isPasswordHidden ? (
                                        <svg
                                            className="w-6 h-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-6 h-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                                            />
                                        </svg>
                                    )}
                                </button>

                                <input
                                    type={isPasswordHidden ? "password" : "text"}
                                    className="mt-2 px-5 py-2 w-full rounded-[10px]  border border-purple-500  focus:outline-purple-400 bg-transparent  text-white font-bold"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    placeholder="******"
                                />
                            </div>
                            <div className='col-span-2 flex justify-center text-white font-bold font-["Roboto"] '>
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    aria-label="Register"
                                    className=" w-full py-2  rounded-t-[50px] border border-purple-500  focus:outline-purple-400 bg-transparent   text-white text-xl font-bold   hover:shadow-2xl  hover:shadow-[#111827] clickSound"
                                >
                                  <span className="bg-gradient-to-r from-[#9e31f7ff] to-[#344dedff] text-transparent bg-clip-text  font-bold">
                                    {isLoading ? "Registering..." : "Register"}
                                  </span>
                                </button>
                            </div>
                            <div className="col-span-2 flex justify-center ">
                                <p>
                                  <span className="text-[#fdccffff] text-[13px] font-bold">
                                    Already have an account?
                                  </span>
                                    <Link
                                        href="/auth/signin"
                                        aria-label="Please Login"
                                        className="bg-gradient-to-r from-[#9e31f7ff] to-[#344dedff] text-transparent bg-clip-text text-[16px] font-bold px-1 clickSound"
                                    >
                                        Please Login
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

const SignUpPage = () => {
    return (
        <Suspense fallback={<LoadingPage/>}>
            <SignUpForm/>
        </Suspense>
    )
}

export default SignUpPage;
