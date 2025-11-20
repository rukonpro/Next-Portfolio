import React from 'react';

const Loading = () => {
    return (
        <section
            id="loading-page"
            className="relative counter-bg min-h-screen flex flex-col justify-center items-center text-white px-5"
        >
            {/* A custom spinner designed to match the website's theme */}
            <div className="relative w-24 h-24">
                {/* Outer ring */}
                <div className="absolute w-full h-full rounded-full border-4 border-dashed border-purple-400 animate-spin" style={{ animationDuration: '4s' }}></div>
                {/* Inner ring */}
                <div className="absolute w-full h-full rounded-full border-4 border-dashed border-pink-500/80 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '2.5s' }}></div>
            </div>

            {/* Animated text below the spinner */}
            <p className="mt-8 text-lg tracking-[6px] animate-pulse uppercase">Loading...</p>
        </section>
    );
};

export default Loading;

