"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
    motion,
    AnimatePresence,
    useMotionValue,
    useTransform,
    useAnimation,
} from "framer-motion";
import { Home, FolderKanban, BadgeCheck, MoreHorizontal } from "lucide-react";

// Global Gradient
const GradientDefs = () => (
    <svg width="0" height="0" className="absolute">
        <defs>
            <linearGradient id="navGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#816aff" />
                <stop offset="100%" stopColor="#d066fd" />
            </linearGradient>
        </defs>
    </svg>
);

export default function BottomNav() {
    const [open, setOpen] = useState(false);

    const y = useMotionValue(0);
    const controls = useAnimation();

    // স্মুথ ইফেক্টস
    const opacity = useTransform(y, [0, 200], [1, 0]);
    const scale = useTransform(y, [0, 200], [1, 0.94]);

    // Drag করে ছেড়ে দিলে
    const onDragEnd = (event, info) => {
        if (info.velocity.y > 500 || y.get() > 150) {
            closeSheet();
        } else {
            controls.start({ y: 0 });
        }
    };

    // স্মুথলি খোলা
    const openSheet = () => {
        setOpen(true);
    };

    // স্মুথলি বন্ধ করা (বাটন ক্লিক বা ড্র্যাগ যেকোনো কারণে)
    const closeSheet = () => {
        controls.start({ y: window.innerHeight, transition: { duration: 0.35, ease: "easeInOut" } });
        setTimeout(() => setOpen(false), 350);
    };

    // যখন open হয় তখন রিসেট
    useEffect(() => {
        if (open) {
            y.set(0);
            controls.set({ y: 0 });
        }
    }, [open, y, controls]);

    const menuItems = [
        { name: "Services", href: "/services" },
        { name: "Pricing", href: "/pricing" },
        { name: "Blogs", href: "/blogs" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
        { name: "Dashboard", href: "/dashboard" },
        { name: "Profile", href: "/profile" },
        { name: "Settings", href: "/settings" },
    ];

    return (
        <>
            <GradientDefs />

            {/* Bottom Navigation Bar */}
            <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[92%] max-w-md bg-purple-500/20 backdrop-blur-2xl shadow-2xl border border-purple-300/30 rounded-3xl px-6 py-4 flex justify-around items-center z-50 md:hidden">
                <Link href="/" className="flex flex-col items-center gap-1">
                    <Home className="w-7 h-7" stroke="url(#navGradient)" />
                    <span className="text-xs font-bold bg-gradient-to-r from-[#816aff] to-[#d066fd] bg-clip-text text-transparent">Home</span>
                </Link>

                <Link href="/portfolios" className="flex flex-col items-center gap-1">
                    <FolderKanban className="w-7 h-7" stroke="url(#navGradient)" />
                    <span className="text-xs font-bold bg-gradient-to-r from-[#816aff] to-[#d066fd] bg-clip-text text-transparent">Projects</span>
                </Link>

                <Link href="/skills" className="flex flex-col items-center gap-1">
                    <BadgeCheck className="w-7 h-7" stroke="url(#navGradient)" />
                    <span className="text-xs font-bold bg-gradient-to-r from-[#816aff] to-[#d066fd] bg-clip-text text-transparent">Skills</span>
                </Link>

                {/* More Button → স্মুথলি খুলবে */}
                <button onClick={openSheet} className="flex flex-col items-center gap-1">
                    <MoreHorizontal className="w-7 h-7" stroke="url(#navGradient)" />
                    <span className="text-xs font-bold bg-gradient-to-r from-[#816aff] to-[#d066fd] bg-clip-text text-transparent">More</span>
                </button>
            </nav>

            {/* Super Smooth Bottom Sheet */}
            <AnimatePresence>
                {open && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            className="fixed inset-0 bg-black/50 z-[60]"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            style={{ opacity }}
                            onClick={closeSheet}
                        />

                        {/* Sheet */}
                        <motion.div
                            drag="y"
                            dragConstraints={{ top: 0 }}
                            dragElastic={0.3}
                            onDragEnd={onDragEnd}
                            style={{ y, scale }}
                            animate={controls}
                            initial={{ y: "100%" }}
                            exit={{ y: "100%" }}
                            transition={{
                                type: "spring",
                                damping: 30,
                                stiffness: 400,
                                mass: 0.8,
                            }}
                            onClick={(e) => e.stopPropagation()}
                            className="fixed inset-x-0 bottom-0 bg-white rounded-t-3xl p-8 pb-12 shadow-2xl cursor-grab active:cursor-grabbing z-[70]"
                        >
                            <div className="w-12 h-1.5 bg-gray-400/90 rounded-full mx-auto mb-7" />

                            <h2 className="text-2xl font-bold text-center mb-10 text-gray-800">Menu</h2>

                            <div className="grid grid-cols-2 gap-5">
                                {menuItems.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        onClick={closeSheet}
                                        className="py-5 text-center text-gray-700 font-medium rounded-2xl bg-gray-50 hover:bg-purple-100 hover:text-purple-700 transition-all duration-200"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>

                            {/* Close Button → স্মুথলি বন্ধ হবে */}
                            <button
                                onClick={closeSheet}
                                className="mt-12 w-full py-4 bg-gradient-to-r from-[#816aff] to-[#d066fd] text-white font-bold rounded-2xl shadow-xl hover:shadow-purple-500/30 transition-all duration-200"
                            >
                                Close
                            </button>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}