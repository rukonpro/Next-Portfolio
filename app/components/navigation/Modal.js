'use client'

import { useEffect } from 'react'

export default function Modal({ isOpen, onClose, children }) {
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose()
        }
        window.addEventListener('keydown', handleEsc)
        return () => window.removeEventListener('keydown', handleEsc)
    }, [onClose])

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center h-screen">
            {/* Overlay with Chrome-friendly backdrop blur */}
            <div
                className="absolute inset-0 bg-purple-950/50 backdrop-blur"
                style={{
                    // Chrome-specific fixes
                    transform: 'translateZ(0)',
                    WebkitBackfaceVisibility: 'hidden',
                }}
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative z-10 w-full max-w-md rounded-2xl p-6 shadow-xl transition-all flex-1 h-full   backdrop-blur-3xl">
                <button
                    className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
                    onClick={onClose}
                >
                    ✕
                </button>
                {children}
            </div>
        </div>
    )
}
