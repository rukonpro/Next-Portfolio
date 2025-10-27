import React from 'react';
import ProfileImage from "@/public/images/rukon_cover_photo_2.jpg";
import Image from 'next/image';

const ProfileDropdown = ({ status, handleSingOut, setIsDialogOpen }) => {
    return (
        <div>
            {
                status == "authenticated" ?
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <Image
                                    alt="rukonpro profile photo"
                                    src={ProfileImage} />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow backdrop-blur-3xl">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Dashboard</a></li>

                            <li><a>Settings</a></li>

                            <li><button onClick={handleSingOut}>Logout</button></li>
                        </ul>
                    </div>
                    :
                    <button
                        type="button"
                        aria-label="Login"
                        className=" bg-gradient-to-r from-[#5e2594ec] to-[#270257fd] px-5 py-1 rounded-lg  animated-button tracking-[3px]  text-[#fccdff]"
                        onClick={() => setIsDialogOpen(true)}><span
                            className="bg-gradient-to-r from-[#816aff] to-[#d066fd] text-transparent bg-clip-text">Login</span>
                    </button>
            }
        </div>
    );
};

export default ProfileDropdown;