"use client";

import { motion } from "framer-motion";
import { Github, Facebook, Mail } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center bg-gradient-to-b from-background via-background/80 to-transparent backdrop-blur-sm"
        >
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                    <span className="text-black font-bold text-xs">AJ</span>
                </div>
                <span className="text-sm font-bold tracking-tighter uppercase hidden md:block">
                    MD. Arafat Jamil
                </span>
            </div>

            <div className="flex items-center gap-8">
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

                <div className="flex items-center gap-4 border-l border-white/10 pl-6">
                    <a href="https://facebook.com/mdarafat.jamil.9" target="_blank" rel="noopener noreferrer">
                        <Facebook className="w-4 h-4 text-white/50 hover:text-white transition-colors" />
                    </a>
                    <a href="mailto:arafat.jamil09@gmail.com">
                        <Mail className="w-4 h-4 text-white/50 hover:text-white transition-colors" />
                    </a>
                </div>
            </div>
        </motion.nav>
    );
}
