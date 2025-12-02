"use client";
import React from 'react';
import ProfileNavContent from './ProfileNavContent'; // Import the new component

const ProfileSidebar = ({ user, sidebarLinks, activeTab, setActiveTab, closeSidebar, handleSignOut }) => {
    return (
        <aside className="hidden md:block w-64 bg-black/20 backdrop-blur-md p-6 rounded-2xl shadow-lg h-fit">
            <ProfileNavContent
                user={user}
                sidebarLinks={sidebarLinks}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                closeSidebar={closeSidebar}
                handleSignOut={handleSignOut}
            />
        </aside>
    );
};

export default ProfileSidebar;
