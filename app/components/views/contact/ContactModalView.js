import React from 'react';
import Contact from "./contact";

const ContactModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50" onClick={onClose}>
            <div className="relative w-11/12 max-w-5xl text-white bg-gradient-to-tl to-[#060212] via-[#021a30] from-[#410b42] rounded-lg p-8" onClick={(e) => e.stopPropagation()}>
                <button
                    onClick={onClose}
                    aria-label="Close modal"
                    className="absolute top-2 right-2 text-3xl text-purple-500 hover:text-purple-700 z-20"
                >
                    ✕
                </button>
                <div className="relative z-10">
                    <Contact />
                </div>
            </div>
        </div>
    );
};

export default ContactModal;