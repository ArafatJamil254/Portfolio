"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Overlay() {
    const { scrollYProgress } = useScroll();

    // The entire animation scrubs linearly over scrollYProgress [0, 1].
    // Let's refine the points so they transition perfectly without overlap.

    // Section 1: Center (Name)
    // Visible from 0.0 to 0.15, fades out completely by 0.25
    const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
    const scale1 = useTransform(scrollYProgress, [0, 0.25], [1, 0.9]);
    const y1 = useTransform(scrollYProgress, [0, 0.25], [0, -50]);

    // Section 2: Left (Role/Subtitle)
    // Fades in from 0.25 to 0.35, stays to 0.55, fades out by 0.65
    const opacity2 = useTransform(scrollYProgress, [0.25, 0.35, 0.55, 0.65], [0, 1, 1, 0]);
    const x2 = useTransform(scrollYProgress, [0.25, 0.65], [-50, 50]);

    // Section 3: Right (Tagline)
    // Fades in from 0.65 to 0.75, stays to 0.9, fades out by 1.0
    const opacity3 = useTransform(scrollYProgress, [0.65, 0.75, 0.9, 1], [0, 1, 1, 0]);
    const x3 = useTransform(scrollYProgress, [0.65, 1], [50, -50]);

    return (
        <div className="absolute inset-0 z-10 pointer-events-none">
            {/* 
              By making this single wrapper sticky and h-screen, 
              we guarantee that the text inside will stay pinned 
              in the viewport while the page scrolls.
            */}
            <div className="sticky top-0 h-screen overflow-hidden">

                {/* Section 1 */}
                <motion.div
                    style={{ opacity: opacity1, scale: scale1, y: y1 }}
                    className="absolute inset-0 flex items-center justify-center text-center"
                >
                    <h1 className="text-4xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.8] drop-shadow-2xl">
                        Md. Arafat <br />
                        <span className="text-white/40">Jamil.</span>
                    </h1>
                </motion.div>

                {/* Section 2 */}
                <motion.div
                    style={{ opacity: opacity2, x: x2 }}
                    className="absolute inset-0 flex items-center justify-center text-center px-8"
                >
                    <div className="max-w-3xl drop-shadow-2xl">
                        <h2 className="text-4xl md:text-7xl font-bold tracking-tighter uppercase leading-[0.9]">
                            CSE Student <br />
                            <span className="text-white/50 italic">@ AIUB</span> <br />
                            Sophomore.
                        </h2>
                    </div>
                </motion.div>

                {/* Section 3 */}
                <motion.div
                    style={{ opacity: opacity3, x: x3 }}
                    className="absolute inset-0 flex items-center justify-center text-center px-8"
                >
                    <div className="max-w-3xl drop-shadow-2xl">
                        <h2 className="text-4xl md:text-7xl font-bold tracking-tighter uppercase leading-[0.9]">
                            Building <br />
                            <span className="text-white/50 italic">Impactful</span> <br />
                            Digital Solutions.
                        </h2>
                    </div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    style={{ opacity: opacity1 }}
                    className="absolute bottom-24 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
                >
                    <div className="w-[1px] h-16 bg-gradient-to-b from-white/0 via-white/80 to-white/0" />
                    <span className="text-[10px] tracking-[0.4em] uppercase text-white/60 font-medium">
                        Scroll
                    </span>
                </motion.div>

            </div>
        </div>
    );
}
