"use client"
import React from 'react';
import BlogForm from '../blogForm/BlogForm';
import {useSession} from "next-auth/react";
import { useRouter } from 'next/navigation'
import Loading from "@/app/loading";
import Navigation from "@/app/components/layout/navigation/navigation";
import Footer from "@/app/components/layout/footer/footer";

const Dashboard = () => {
    const router = useRouter();
    const { data: session, status } = useSession();

    if (status === 'loading') {
        return <Loading/>;
    }

    if (session?.user?.role!=="ADMIN") {
        return router.push("/");
    }
    return (
        <div className='bg-slate-400'>
            <Navigation/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <BlogForm/>
            <br/>
            <br/>

            <Footer/>
        </div>
    );
};

export default Dashboard;