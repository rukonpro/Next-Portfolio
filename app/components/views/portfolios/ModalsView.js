import React from 'react';
import Portfolio from "./PortfolioView";

const Modals = ({ data, isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
            <div className="relative w-11/12 max-w-5xl text-white bg-gradient-to-tl to-[#060212] via-[#021a30] from-[#410b42] rounded-lg p-8">
                <button
                    onClick={onClose}
                    aria-label="Close modal"
                    className="absolute top-2 right-2 text-2xl text-red-500 hover:text-red-700 z-10"
                >
                    ✕
                </button>
                <Portfolio data={data} />
            </div>
        </div>
    );
};

export default Modals;