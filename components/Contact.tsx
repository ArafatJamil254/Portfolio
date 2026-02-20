"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
    return (
        <div id="contact">
            <section className="relative z-20 bg-[#0a0a0a] py-24 md:py-32 px-6 sm:px-8 md:px-16 lg:px-24 border-t border-white/5 min-h-[100svh] lg:h-[80vh] h-auto flex flex-col justify-center">
                <div className="max-w-7xl mx-auto w-full">
                    <header className="mb-24 text-center">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-xs tracking-[0.3em] uppercase text-white/40 mb-4 font-semibold"
                        >
                            Get In Touch
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-8xl font-bold tracking-tighter uppercase"
                        >
                            Let's <span className="text-white/30 italic">Talk</span>
                        </motion.h2>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Email */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-col items-center text-center p-8 rounded-2xl glass hover:bg-white/5 transition-colors"
                        >
                            <div className="mb-6 p-4 rounded-full bg-white/5 border border-white/10">
                                <Mail className="w-6 h-6 text-white/70" />
                            </div>
                            <h3 className="text-xs tracking-[0.2em] uppercase text-white/40 mb-3">Email</h3>
                            <a href="mailto:arafat.jamil09@gmail.com" className="text-lg font-medium hover:text-white/70 transition-colors">
                                arafat.jamil09@gmail.com
                            </a>
                        </motion.div>

                        {/* Phone */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col items-center text-center p-8 rounded-2xl glass hover:bg-white/5 transition-colors"
                        >
                            <div className="mb-6 p-4 rounded-full bg-white/5 border border-white/10">
                                <Phone className="w-6 h-6 text-white/70" />
                            </div>
                            <h3 className="text-xs tracking-[0.2em] uppercase text-white/40 mb-3">Phone</h3>
                            <a href="tel:+8801812022503" className="text-lg font-medium hover:text-white/70 transition-colors">
                                +880 181 202 2503
                            </a>
                        </motion.div>

                        {/* Location */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-col items-center text-center p-8 rounded-2xl glass hover:bg-white/5 transition-colors"
                        >
                            <div className="mb-6 p-4 rounded-full bg-white/5 border border-white/10">
                                <MapPin className="w-6 h-6 text-white/70" />
                            </div>
                            <h3 className="text-xs tracking-[0.2em] uppercase text-white/40 mb-3">Address</h3>
                            <p className="text-base text-white/80 leading-relaxed">
                                Building-Barekplaza, Baganbari, <br />
                                Hossain Ali road, Uttar Vashantek, Dhaka
                            </p>
                        </motion.div>
                    </div>

                </div>
            </section>
        </div>
    );
}
