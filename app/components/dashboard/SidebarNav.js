"use client";
import React from 'react';
import SidebarLink from './SidebarLink';
import { LayoutDashboard, Newspaper, BarChart2 } from 'lucide-react';

const SidebarNav = () => {
    return (
        <nav className="flex flex-col p-4 space-y-2 flex-grow">
            <SidebarLink href="/dashboard" icon={LayoutDashboard}>
                Dashboard
            </SidebarLink>
            <SidebarLink href="/dashboard/blogs" icon={Newspaper}>
                Blogs
            </SidebarLink>
            <SidebarLink href="/dashboard/analytics" icon={BarChart2}>
                Analytics
            </SidebarLink>
        </nav>
    );
};

export default SidebarNav;
