"use client";

import { motion } from "framer-motion";
import { History } from "lucide-react";
import Image from "next/image";

export default function HeritageSection() {
    return (
        <section id="heritage" className="py-32 px-6 bg-zinc-950 text-white">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-start">
                    <div className="sticky top-32">
                        <span className="flex items-center gap-4 text-mustang-red font-black uppercase tracking-[0.4em] text-xs mb-8">
                            <History size={16} /> 60 Years of Heritage
                        </span>
                        <h2 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-[0.85] mb-12">
                            A Legacy <br /> Written in <br /> <span className="text-transparent text-stroke stroke-white/20">Tire Smoke.</span>
                        </h2>
                        <p className="text-zinc-400 text-lg leading-relaxed max-w-lg mb-12">
                            Since April 17, 1964, the Mustang has defined the American spirit. It&apos;s more than a car—it&apos;s a movement of freedom, speed, and raw mechanical honesty.
                        </p>
                        <div className="flex gap-12">
                            <div>
                                <p className="text-5xl font-black italic tracking-tighter">1964</p>
                                <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest mt-2">The Debut</p>
                            </div>
                            <div>
                                <p className="text-5xl font-black italic tracking-tighter">10M+</p>
                                <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest mt-2">Produced</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-32 py-32">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ margin: "-100px" }}
                            className="rounded-3xl overflow-hidden aspect-[4/5] relative group"
                        >
                            <Image src="https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg" fill className="object-cover group-hover:scale-110 transition-transform duration-1000" alt="Vintage Look" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                            <div className="absolute bottom-10 left-10">
                                <h4 className="text-3xl font-black uppercase italic">Classic Silhouette</h4>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ margin: "-100px" }}
                            className="rounded-3xl overflow-hidden aspect-[4/5] relative group"
                        >
                            <Image src="https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&q=80&w=2070" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" alt="Modern Look" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                            <div className="absolute bottom-10 left-10">
                                <h4 className="text-3xl font-black uppercase italic">Modern DNA</h4>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
