import React from 'react';

const Loading = () => {
    return (
        <section
            id="portfolios"
            className="relative   py-28 px-5">
            <div
                className="absolute custom-animate-pulse inset-0 m-auto max-w-xs h-[357px] blur-[1000px] sm:max-w-md md:max-w-lg"
                style={{background: "linear-gradient(106.89deg, rgba(141, 76, 206, 0.11) 15.73%, rgb(165, 14, 233) 15.74%, rgba(255, 0, 0, 0.26) 56.49%, rgba(234, 51, 214, 0.4) 115.91%)"}}/>
            <div className="h-screen flex justify-center items-center">
                <h1 className='text-white'>Loading...</h1>
            </div>
        </section>
    );
};

export default Loading;
