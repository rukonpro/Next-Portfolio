import React from 'react';

const AnimatedCodeBlockSkeleton = () => {
    return (
        <div className="skills-bg py-28 px-5">
            <div className="max-w-[1200px] mx-auto">
                <div className="code-block-container bg-purple-950/30 w-full h-[500px] rounded-lg animate-pulse">
                    {/* Header placeholder */}
                    <div className="h-10 bg-gray-700/50 rounded-t-lg mb-4"></div>
                    {/* Code area placeholder */}
                    <div className="h-[calc(100%-60px)] bg-gray-700/50 rounded-b-lg"></div>
                </div>
            </div>
        </div>
    );
};

export default AnimatedCodeBlockSkeleton;
