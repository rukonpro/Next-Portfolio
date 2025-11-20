import React from 'react';
import DashboardLayoutClient from '@/app/components/dashboard/DashboardLayoutClient';

const DashboardLayout = ({ children }) => {
    return (
        <DashboardLayoutClient>
            {children}
        </DashboardLayoutClient>
    );
};

export default DashboardLayout;
