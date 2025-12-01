import React from 'react';
import BottomNav from "@/app/components/layout/bottomNav";
import Footer from "@/app/components/layout/footer/footer";
import Navigation from "@/app/components/layout/navigation/navigation";

const LayoutHome = ({children}) => {
    return (
        <div>
            <Navigation/>
            {children}
            <Footer/>
            <BottomNav />
        </div>
    );
};

export default LayoutHome;