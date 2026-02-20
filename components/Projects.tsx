"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Database, Code, Shield } from "lucide-react";
import React, { useRef } from "react";

const PROJECTS = [
    {
        title: "Coffee Shop Management",
        category: "Desktop Application / Java Swing",
        description: "Tracking inventory, processing orders, and managing sales to streamline operations.",
        icon: Code,
        color: "from-amber-500/20",
    },
    {
        title: "Bus Ticket Counter",
        category: "Database / Management",
        description: "Automates ticket booking, seat reservation, and inventory management for efficiency.",
        icon: Database,
        color: "from-blue-500/20",
    },
    {
        title: "Laser Security Alarm",
        category: "Electronics / IoT",
        description: "A security system using a laser beam to trigger an alarm, demonstrating IoT integration.",
        icon: Shield,
        color: "from-red-500/20",
    },
];

const SKILLS = [
    "C++", "Java", "JavaScript", "HTML", "CSS", "React.js", "MySQL", "Oracle", "SQLite", "MS Word", "MS Powerpoint", "MS Excel", "Leadership", "Teamwork", "Problem Solving"
];

// Reusable 3D Tilt Card Component
function TiltCard({ project, index }: { project: any; index: number }) {
    const cardRef = useRef<HTMLDivElement>(null);

    // Mouse position values
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth spring configuration
    const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    // Map mouse position to rotation (-15deg to +15deg max)
    const rotateX = useTransform(springY, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(springX, [-0.5, 0.5], ["-10deg", "10deg"]);

    // Slight parallax for inner content
    const translateZ = useTransform(springX, [-0.5, 0.5], [-20, 20]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();

        // Calculate mouse position relative to card center (normalized from -0.5 to 0.5)
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const normX = (mouseX / rect.width) - 0.5;
        const normY = (mouseY / rect.height) - 0.5;

        x.set(normX);
        y.set(normY);
    };

    const handleMouseLeave = () => {
        // Reset to center
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                perspective: 1000,
                transformStyle: "preserve-3d",
            }}
            className="group relative flex flex-col p-8 rounded-2xl glass overflow-visible h-full cursor-pointer"
        >
            <motion.div
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                className="absolute inset-0 rounded-2xl border border-white/5 bg-[#1a1a1a]/50"
            >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
            </motion.div>

            <motion.div
                style={{ translateZ, transformStyle: "preserve-3d" }}
                className="relative z-10 flex flex-col h-full pointer-events-none"
            >
                <div className="mb-6 p-3 w-fit rounded-xl bg-white/5 border border-white/10 shadow-xl">
                    <project.icon className="w-6 h-6 text-white/70" />
                </div>

                <p className="text-[10px] tracking-[0.2em] uppercase text-white/40 mb-2 font-semibold drop-shadow-md">
                    {project.category}
                </p>
                <h3 className="text-2xl font-bold tracking-tight mb-4 drop-shadow-lg">
                    {project.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed mb-8 flex-grow">
                    {project.description}
                </p>

                <div className="mt-auto flex justify-between items-center relative z-10">
                    <div className="flex gap-4">
                        <span className="text-[10px] tracking-[0.1em] uppercase font-bold text-white/40 group-hover:text-white transition-colors">
                            View Details
                        </span>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 shadow-2xl">
                        <ArrowUpRight className="w-5 h-5 text-black" />
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default function Projects() {
    return (
        <div id="work">
            <section className="relative z-20 bg-[#121212] py-32 px-8 md:px-24 border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <header className="mb-24">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-xs tracking-[0.3em] uppercase text-white/40 mb-4 font-semibold"
                        >
                            Selected Works
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-7xl font-bold tracking-tighter uppercase"
                        >
                            Building <br />
                            <span className="text-white/30 italic">Solutions.</span>
                        </motion.h2>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-[2000px]">
                        {PROJECTS.map((project, index) => (
                            <TiltCard key={index} project={project} index={index} />
                        ))}
                    </div>

                    <div id="skills" className="mt-40">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-xs tracking-[0.3em] uppercase text-white/40 mb-12 font-semibold text-center"
                        >
                            Technology & Soft Skills
                        </motion.p>
                        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                            {SKILLS.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.1, rotateZ: Math.random() < 0.5 ? 2 : -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.02, type: "spring", stiffness: 400, damping: 10 }}
                                    className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-sm font-medium hover:bg-white/10 hover:border-white/30 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all cursor-crosshair text-white/80 hover:text-white"
                                >
                                    {skill}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
