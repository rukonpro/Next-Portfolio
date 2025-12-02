"use client";
import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Drawer = ({ isOpen, onClose, children, side = 'left', width = 'w-64' }) => {
    const drawerRef = useRef(null);

    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === 'Escape' && isOpen) {
                onClose();
            }
        };
        document.addEventListener('keydown', handleEscape);
        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isOpen, onClose]);

    const variants = {
        left: {
            open: { x: 0 },
            closed: { x: "-100%" }
        },
        right: {
            open: { x: 0 },
            closed: { x: "100%" }
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black bg-opacity-50 z-50"
                        onClick={onClose}
                    />

                    {/* Drawer Panel */}
                    <motion.div
                        ref={drawerRef}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={variants[side]}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className={`fixed inset-y-0 ${side === 'left' ? 'left-0' : 'right-0'} ${width} bg-black/20 backdrop-blur-md text-white p-4 z-50 shadow-lg`}
                    >
                        {children}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default Drawer;
