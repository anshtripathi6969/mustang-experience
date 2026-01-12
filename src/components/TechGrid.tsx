"use client";

import { motion } from "framer-motion";
import {
    Zap,
    Activity,
    Maximize,
    Gauge,
    ShieldCheck,
    Navigation,
} from 'lucide-react';

export default function TechGrid() {
    return (
        <section id="tech" className="py-32 bg-black relative overflow-hidden text-white">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-mustang-red/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center text-center mb-32">
                    <h2 className="text-7xl md:text-[10rem] font-black uppercase italic tracking-tighter leading-none mb-10">
                        Pure <br /> Intelligence
                    </h2>
                    <div className="w-px h-32 bg-gradient-to-b from-mustang-red to-transparent" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { icon: <Zap />, title: 'Remote Rev', desc: 'Warm up the soul of the machine from your phone with the key fob.' },
                        { icon: <Activity />, title: 'Track Apps', desc: 'Real-time G-Force and lap timing analytics directly on the cluster.' },
                        { icon: <Maximize />, title: 'Drift Brake', desc: 'Competitive electronic parking brake for precision sideways movement.' },
                        { icon: <Gauge />, title: 'Custom Cluster', desc: 'Choose between modern displays or classic heritage themes.' },
                        { icon: <ShieldCheck />, title: 'Active Exhaust', desc: 'Choose your volume: Quiet, Normal, Sport, or Track modes.' },
                        { icon: <Navigation />, title: 'Co-Pilot360', desc: 'Intelligent systems that keep pace with your performance driving.' }
                    ].map((tech, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -20, borderColor: 'rgba(220, 38, 38, 0.5)' }}
                            className="p-12 bg-zinc-900/50 backdrop-blur-sm border border-white/5 rounded-[2.5rem] transition-all duration-500 group relative overflow-hidden"
                        >
                            <div className="w-12 h-12 bg-mustang-red flex items-center justify-center rounded-2xl mb-8 shadow-[0_0_30px_rgba(220,38,38,0.3)] group-hover:scale-110 transition-transform text-white">
                                {tech.icon}
                            </div>
                            <h4 className="text-2xl font-black uppercase italic mb-4">{tech.title}</h4>
                            <p className="text-zinc-500 text-sm leading-relaxed">{tech.desc}</p>
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-mustang-red/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
