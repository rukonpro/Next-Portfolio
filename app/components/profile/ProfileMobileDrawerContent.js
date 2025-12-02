"use client";
import React from 'react';
import ProfileNavContent from './ProfileNavContent'; // Import the new component

const ProfileMobileDrawerContent = ({ user, sidebarLinks, activeTab, setActiveTab, closeSidebar, handleSignOut }) => {
    return (
        <ProfileNavContent
            user={user}
            sidebarLinks={sidebarLinks}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            closeSidebar={closeSidebar}
            handleSignOut={handleSignOut}
        />
    );
};

export default ProfileMobileDrawerContent;
