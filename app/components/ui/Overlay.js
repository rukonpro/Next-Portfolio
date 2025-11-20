"use client";
import React from 'react';

const Overlay = ({ isOpen, onClick }) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden" // z-20 is below sidebar's z-30
            onClick={onClick}
        ></div>
    );
};

export default Overlay;
