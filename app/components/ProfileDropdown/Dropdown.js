// components/Dropdown.jsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Dropdown = ({ trigger, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const triggerRef = useRef(null);

    useEffect(() => {
        if (isOpen && dropdownRef.current && triggerRef.current) {
            // Get trigger position and dimensions
            const triggerRect = triggerRef.current.getBoundingClientRect();
            const dropdownRect = dropdownRef.current.getBoundingClientRect();

            // Calculate available space
            const spaceBelow = window.innerHeight - triggerRect.bottom;
            const spaceAbove = triggerRect.top;
            const spaceRight = window.innerWidth - triggerRect.right;
            const spaceLeft = triggerRect.left;

            // Determine position
            let xPos = triggerRect.left;
            let yPos = triggerRect.bottom;
            let transformOrigin = 'top left';

            // Position below if enough space, otherwise above
            if (spaceBelow < dropdownRect.height && spaceAbove > spaceBelow) {
                yPos = triggerRect.top - dropdownRect.height;
                transformOrigin = 'bottom left';
            }

            // Adjust horizontal position if needed
            if (xPos + dropdownRect.width > window.innerWidth) {
                xPos = triggerRect.right - dropdownRect.width;
                transformOrigin = transformOrigin.replace('left', 'right');
            }

            // Apply position and animate
            gsap.set(dropdownRef.current, { x: xPos, y: yPos });
            gsap.fromTo(
                dropdownRef.current,
                { opacity: 0, scale: 0.95, transformOrigin },
                { opacity: 1, scale: 1, duration: 0.2, ease: 'power2.out' }
            );
        }
    }, [isOpen]);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative inline-block">
            <div ref={triggerRef} onClick={handleToggle}>
                {trigger}
            </div>

            {isOpen && (
                <div
                    ref={dropdownRef}
                    className="absolute z-10 w-48 bg-white rounded-md shadow-lg py-1"
                >
                    {children}
                </div>
            )}
        </div>
    );
};

// Dropdown Item component
export const DropdownItem = ({ children, onClick }) => {
    return (
        <button
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={() => {
                onClick?.();
            }}
        >
            {children}
        </button>
    );
};

export default Dropdown;
