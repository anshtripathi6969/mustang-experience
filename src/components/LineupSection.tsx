"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function LineupSection() {
    const horizontalRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: horizontalRef
    });

    const xTranslate = useTransform(scrollYProgress, [0, 1], ["0%", "-66.6%"]);

    return (
        <section ref={horizontalRef} id="lineup" className="relative h-[300vh] bg-black">
            <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                <motion.div style={{ x: xTranslate }} className="flex gap-0 h-full w-[300vw]">

                    {/* Card 1 - The GT */}
                    <div className="w-screen h-full flex-shrink-0 relative group flex items-center justify-center p-20">
                        <div className="absolute inset-0 bg-zinc-950/50 z-10 group-hover:bg-transparent transition-colors duration-700 pointer-events-none" />
                        <Image src="https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg" fill className="object-cover" alt="GT" />
                        <div className="relative z-20 text-center">
                            <h2 className="text-8xl md:text-[15rem] font-black uppercase italic tracking-tighter mix-blend-difference text-white">Fastback</h2>
                            <p className="text-mustang-red font-black uppercase tracking-[0.5em] mt-4">The Classic Profile</p>
                        </div>
                    </div>

                    {/* Card 2 - Performance Cockpit */}
                    <div className="w-screen h-full flex-shrink-0 relative group flex items-center justify-center p-20">
                        <div className="absolute inset-0 bg-zinc-950/80 z-10" />
                        <Image src="https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&q=80&w=2070" fill className="object-cover" alt="Interior" />
                        <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 gap-20 items-center container mx-auto">
                            <div className="text-left text-white">
                                <span className="text-mustang-red font-black text-xs uppercase tracking-widest mb-4 block">Design Philosophy</span>
                                <h3 className="text-6xl font-black italic uppercase tracking-tighter mb-8 leading-none">Aerodynamic <br /> Mastery</h3>
                                <p className="text-zinc-400 max-w-sm leading-relaxed">
                                    Every curve serves a purpose. Reduced drag, increased downforce, and a cockpit designed specifically for high-speed engagement.
                                </p>
                            </div>
                            <div className="p-12 border border-white/10 bg-black/40 backdrop-blur-xl rounded-3xl text-white">
                                <div className="space-y-8">
                                    {[
                                        { label: 'Brembo™ Brakes', val: '6-Piston' },
                                        { label: 'Aero Kit', val: 'Active' },
                                        { label: 'Wheels', val: '19" Carbon' }
                                    ].map(s => (
                                        <div key={s.label} className="flex justify-between items-end border-b border-white/10 pb-4">
                                            <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">{s.label}</span>
                                            <span className="text-2xl font-black italic">{s.val}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 - Transmission/Dark Horse */}
                    <div className="w-screen h-full flex-shrink-0 relative group flex items-center justify-center p-20 bg-zinc-900 border-l border-white/10">
                        <Image src="https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&q=80&w=1200" fill className="object-cover grayscale opacity-20" alt="Transmission" />
                        <div className="relative z-20 text-center text-white">
                            <span className="text-7xl md:text-[20rem] font-black uppercase italic tracking-tighter opacity-5 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none select-none">TREMEC 6-SPEED</span>
                            <h2 className="text-7xl font-black uppercase italic tracking-tighter leading-none relative">Uncompromising <br /> Gearbox</h2>
                            <button className="mt-12 px-12 py-5 bg-white text-black font-black uppercase tracking-widest text-xs rounded-full hover:bg-mustang-red hover:text-white transition-all transform hover:scale-105 active:scale-95 cursor-pointer">
                                Feel the shift
                            </button>
                        </div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
}
