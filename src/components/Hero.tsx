"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    const textY = useTransform(scrollYProgress, [0, 1], [0, 200]);

    return (
        <section ref={heroRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            <motion.div style={{ scale: heroScale, opacity: heroOpacity }} className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover brightness-[0.4]"
                    poster="https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg"
                >
                    <source src="/hero-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />
            </motion.div>

            <div className="relative z-10 text-center container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    style={{ y: textY }}
                >
                    <h1 className="text-[12vw] font-black uppercase italic tracking-tighter leading-[0.8] mb-4">
                        Iconic <br /> <span className="text-mustang-red">Soul.</span>
                    </h1>
                    <p className="text-zinc-400 font-bold uppercase tracking-[0.5em] text-[10px] md:text-xs">
                        Born to run. Bred to lead.
                    </p>
                </motion.div>
            </div>

            <motion.div
                style={{ opacity: heroOpacity }}
                className="absolute bottom-12 left-12 hidden lg:block z-20"
            >
                <div className="flex items-center gap-4">
                    <div className="w-12 h-px bg-white/30" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Scroll to Explore</span>
                </div>
            </motion.div>
        </section>
    );
}
