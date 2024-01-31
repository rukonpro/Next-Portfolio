import React from 'react';

const Loading = () => {
    return (
        <section
            id="portfolios"
            className="relative  bg-[#0e0e36] py-28 px-5">
            <div className="absolute  inset-0  blur-[118px] radial-gradient"/>
            <div className="h-screen flex justify-center items-center">
                <h1>Loading...</h1>
            </div>
        </section>
    );
};

export default Loading;