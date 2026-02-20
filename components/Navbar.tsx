"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Facebook, Mail, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 w-full z-50 px-6 md:px-8 py-6 flex justify-between items-center bg-gradient-to-b from-background via-background/80 to-transparent backdrop-blur-sm"
        >
            <div className="flex items-center gap-2 relative z-50">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                    <span className="text-black font-bold text-xs">AJ</span>
                </div>
                <span className="text-sm font-bold tracking-tighter uppercase hidden md:block">
                    MD. Arafat Jamil
                </span>
            </div>

            <div className="flex items-center gap-8 relative z-50">
                <div className="hidden md:flex items-center gap-6">
                    {["Work", "Skills", "About", "Contact"].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-[10px] tracking-[0.2em] uppercase font-semibold text-white/50 hover:text-white transition-colors"
                        >
                            {item}
                        </Link>
                    ))}
                </div>

                <div className="hidden md:flex items-center gap-4 border-l border-white/10 pl-6">
                    <a href="https://facebook.com/mdarafat.jamil.9" target="_blank" rel="noopener noreferrer">
                        <Facebook className="w-4 h-4 text-white/50 hover:text-white transition-colors" />
                    </a>
                    <a href="mailto:arafat.jamil09@gmail.com">
                        <Mail className="w-4 h-4 text-white/50 hover:text-white transition-colors" />
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-0 left-0 w-full h-[100dvh] bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 z-40 md:hidden"
                    >
                        {["Work", "Skills", "About", "Contact"].map((item) => (
                            <Link
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                onClick={() => setIsOpen(false)}
                                className="text-2xl tracking-[0.2em] uppercase font-bold text-white/70 hover:text-white transition-colors"
                            >
                                {item}
                            </Link>
                        ))}

                        <div className="flex items-center gap-6 mt-8">
                            <a href="https://facebook.com/mdarafat.jamil.9" target="_blank" rel="noopener noreferrer">
                                <Facebook className="w-6 h-6 text-white/50 hover:text-white transition-colors" />
                            </a>
                            <a href="mailto:arafat.jamil09@gmail.com">
                                <Mail className="w-6 h-6 text-white/50 hover:text-white transition-colors" />
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
