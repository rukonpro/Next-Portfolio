"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const SidebarLink = ({ href, icon: Icon, children, onClick }) => {
    const pathname = usePathname();

    const baseClasses = "flex items-center px-4 py-2 rounded-md";
    const inactiveClasses = "text-gray-300 hover:bg-gray-700 hover:text-white";
    const activeClasses = "bg-gray-700 text-white";

    const linkClasses = `${baseClasses} ${pathname === href ? activeClasses : inactiveClasses}`;

    return (
        <Link href={href} className={linkClasses} onClick={onClick}>
            <Icon className="mr-3" size={20} />
            {children}
        </Link>
    );
};

export default SidebarLink;
