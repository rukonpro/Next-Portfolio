"use client";
import React from 'react';
import ProfileInfo from './ProfileInfo';
import EditProfileForm from './EditProfileForm';
import SecuritySettings from './SecuritySettings';
import MyOrders from './MyOrders';

const ProfileContent = ({ user, activeTab, setActiveTab }) => {
    return (
        <main className="flex-grow bg-black/20 backdrop-blur-md p-8 rounded-2xl shadow-lg">
            {activeTab === 'profile' && <ProfileInfo user={user} setActiveTab={setActiveTab} />}
            {activeTab === 'edit' && <EditProfileForm user={user} />}
            {activeTab === 'security' && <SecuritySettings user={user} />}
            {activeTab === 'orders' && <MyOrders user={user} />}
        </main>
    );
};

export default ProfileContent;
