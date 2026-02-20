"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";

export default function About() {
    return (
        <div id="about">
            <section className="relative z-20 bg-[#121212] py-32 px-8 md:px-24 border-t border-white/5">
                <div className="max-w-5xl mx-auto flex flex-col items-center">

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="mb-8 p-4 w-fit rounded-full bg-white/5 border border-white/10"
                    >
                        <User className="w-8 h-8 text-white/70" />
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-xs tracking-[0.3em] uppercase text-white/40 mb-6 font-semibold"
                    >
                        About Me
                    </motion.p>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold tracking-tighter uppercase text-center mb-12"
                    >
                        Shaping the next <br />
                        <span className="text-white/30 italic">Generation</span> of tech.
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="space-y-6 text-lg md:text-xl text-white/60 leading-relaxed text-center max-w-3xl"
                    >
                        <p>
                            I am <strong>MD. ARAFAT JAMIL</strong>, currently pursuing a B.Sc. in Computer Science & Engineering at the American International University-Bangladesh (AIUB). With a strong passion for building impactful solutions, I focus on combining technical skills with creativity to shape the next generation of technology.
                        </p>
                        <p>
                            Throughout my academic journey and experience, I’ve engaged in designing systems, managing databases, and bringing interactive applications to life. In addition to my work, I actively participate in various initiatives, continually refining both my technical and creative abilities.
                        </p>
                        <p className="text-white/80 font-medium italic">
                            Let’s explore the vast potential of technology together, as it continues to innovate and transform our world.
                        </p>
                    </motion.div>

                </div>
            </section>
        </div>
    );
}
